require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const Stripe = require("stripe");

const PORT = Number(process.env.PORT || 3001);
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

const app = express();
app.disable("x-powered-by");

const PRODUCT_CATALOG = {
  "r36s-black": {
    id: "r36s-black",
    label: "R36S Handheld Console - Black",
    priceId: "price_1SrIw5JTQJwchq95idjTHcZf",
    aliases: [
      "R36S Handheld Console Black",
      "R36S Handheld Console - Black",
      "Console Portable R36S Noir"
    ]
  },
  "r36s-white": {
    id: "r36s-white",
    label: "R36S Handheld Console - White",
    priceId: "price_1SrIvOJTQJwchq952qTjQ01i",
    aliases: [
      "R36S Handheld Console White",
      "R36S Handheld Console - White",
      "Console Portable R36S Blanc"
    ]
  },
  "r36s-violet": {
    id: "r36s-violet",
    label: "R36S Handheld Console - Violet",
    priceId: "price_1SrIwmJTQJwchq95SVUK4x5H",
    aliases: [
      "R36S Handheld Console Violet",
      "R36S Handheld Console - Violet",
      "Console Portable R36S Violet"
    ]
  },
  "arcade-sky-blue": {
    id: "arcade-sky-blue",
    label: "Mini Arcade Cabinet - Sky Blue",
    priceId: "price_1SrIt2JTQJwchq95wPaxUhGp",
    aliases: [
      "Mini Arcade Cabinet Sky Blue",
      "Mini Arcade Cabinet - Sky Blue",
      "Mini Borne d'arcade Bleu ciel"
    ]
  },
  "arcade-light-blue": {
    id: "arcade-light-blue",
    label: "Mini Arcade Cabinet - Light Blue",
    priceId: "price_1SrIs9JTQJwchq95Y6g3Oexq",
    aliases: [
      "Mini Arcade Cabinet Light Blue",
      "Mini Arcade Cabinet - Light Blue",
      "Mini Borne d'arcade Bleu clair"
    ]
  },
  "arcade-yellow": {
    id: "arcade-yellow",
    label: "Mini Arcade Cabinet - Sun Yellow",
    priceId: "price_1SrIrgJTQJwchq95SwQTHZnx",
    aliases: [
      "Mini Arcade Cabinet Yellow",
      "Mini Arcade Cabinet - Sun Yellow",
      "Mini Borne d'arcade Jaune"
    ]
  },
  "retro-controller": {
    id: "retro-controller",
    label: "Bluetooth Retro Controller",
    priceId: "price_1SrIztJTQJwchq95rsmOhRGZ",
    aliases: ["Bluetooth Retro Controller", "Manette Retro Sans Fils"]
  },
  "retro-keychain": {
    id: "retro-keychain",
    label: "Retro Keychain Mini Console",
    priceId: "price_1SrJ1zJTQJwchq95QqUbT46w",
    aliases: [
      "Retro Keychain Mini Console",
      "Porte-Cle Retro Mini Console",
      "Porte-Clé Rétro Mini Console",
      "Porte-ClÃ© RÃ©tro \"Mini Console\""
    ]
  }
};

const aliasLookup = buildAliasLookup(PRODUCT_CATALOG);

const transporter =
  process.env.EMAIL_USER && process.env.EMAIL_PASS
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })
    : null;

syncCatalogWithCsv();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(503).json({
      error: "Stripe webhook support is not configured on this server."
    });
  }

  const signature = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook error: ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    await sendOrderConfirmation(event.data.object);
  }

  res.json({ received: true });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-checkout-session", async (req, res) => {
  if (!stripe) {
    return res.status(503).json({
      error: "Stripe is not configured yet. Add STRIPE_SECRET_KEY to continue."
    });
  }

  const items = Array.isArray(req.body.items) ? req.body.items : [];
  if (!items.length) {
    return res.status(400).json({ error: "Your cart is empty." });
  }

  try {
    const lineItems = items.map((item) => {
      const product = resolveProduct(item && (item.id || item.name));
      if (!product || !product.priceId) {
        throw new Error("One of the selected products is no longer available.");
      }

      const quantity = clamp(Number(item.quantity || 1), 1, 20);
      return {
        price: product.priceId,
        quantity
      };
    });

    const baseUrl = getBaseUrl(req);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      billing_address_collection: "auto",
      customer_creation: "always",
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "DE", "ES", "IT", "NL", "GB", "US"]
      },
      success_url: `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel.html`
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "Please complete every contact field."
    });
  }

  if (!transporter) {
    return res.status(503).json({
      error: "Contact email is not configured yet."
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `[Geek Store] ${subject}`,
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `
    });

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({
      error: "We could not send your message right now."
    });
  }
});

app.use(
  express.static(path.join(__dirname), {
    maxAge: "1d",
    setHeaders: (res, filePath) => {
      const extension = path.extname(filePath).toLowerCase();
      if (extension === ".html") {
        res.setHeader("Cache-Control", "no-cache");
        return;
      }

      if ([".css", ".js", ".svg"].includes(extension)) {
        res.setHeader("Cache-Control", "public, max-age=86400");
        return;
      }

      if ([".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".ico"].includes(extension)) {
        res.setHeader("Cache-Control", "public, max-age=604800");
      }
    }
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Index.html"));
});

app.listen(PORT, () => {
  console.log(`Geek Store server running at http://localhost:${PORT}`);
});

function buildAliasLookup(catalog) {
  const lookup = {};
  Object.values(catalog).forEach((product) => {
    lookup[normalizeKey(product.id)] = product.id;
    lookup[normalizeKey(product.label)] = product.id;
    product.aliases.forEach((alias) => {
      lookup[normalizeKey(alias)] = product.id;
    });
  });
  return lookup;
}

function normalizeKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function resolveProduct(reference) {
  if (!reference) {
    return null;
  }

  if (PRODUCT_CATALOG[reference]) {
    return PRODUCT_CATALOG[reference];
  }

  const matchId = aliasLookup[normalizeKey(reference)];
  return matchId ? PRODUCT_CATALOG[matchId] : null;
}

function parseCsv(csv) {
  return csv
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(1)
    .map((line) => {
      const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
      return {
        priceId: stripQuotes(values[0]),
        productName: stripQuotes(values[2])
      };
    })
    .filter((row) => row.priceId && row.productName);
}

function stripQuotes(value) {
  return String(value || "").replace(/"/g, "").trim();
}

function syncCatalogWithCsv() {
  const csvPath = path.join(__dirname, "prices.csv");
  if (!fs.existsSync(csvPath)) {
    return;
  }

  try {
    const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
    rows.forEach((row) => {
      const product = resolveProduct(row.productName);
      if (product) {
        product.priceId = row.priceId;
      }
    });
  } catch (error) {
    console.log(`Could not sync prices.csv: ${error.message}`);
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getBaseUrl(req) {
  if (process.env.PUBLIC_BASE_URL) {
    return process.env.PUBLIC_BASE_URL.replace(/\/$/, "");
  }

  if (req.headers.origin) {
    return String(req.headers.origin).replace(/\/$/, "");
  }

  if (req.headers.referer) {
    try {
      const referer = new URL(req.headers.referer);
      return referer.origin;
    } catch (error) {
      return `http://localhost:${PORT}`;
    }
  }

  return `http://localhost:${PORT}`;
}

async function sendOrderConfirmation(session) {
  if (!transporter || !session || !session.customer_details || !session.customer_details.email) {
    return;
  }

  const customerName = session.customer_details.name || "Geek Store customer";
  const total = Number(session.amount_total || 0) / 100;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: session.customer_details.email,
      subject: "Your Geek Store order is confirmed",
      html: `
        <h1>Thanks for your order</h1>
        <p>Hello ${escapeHtml(customerName)},</p>
        <p>Your payment has been confirmed and your order is now in our queue.</p>
        <ul>
          <li><strong>Order:</strong> ${escapeHtml(session.id || "Confirmed")}</li>
          <li><strong>Total:</strong> EUR ${total.toFixed(2)}</li>
        </ul>
        <p>If you need anything, reply to this email or contact ${escapeHtml(
          process.env.CONTACT_EMAIL || process.env.EMAIL_USER || "Geek Store support"
        )}.</p>
      `
    });
  } catch (error) {
    console.log(`Could not send confirmation email: ${error.message}`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
