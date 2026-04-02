"use strict";

const targetBaseUrl = (process.env.TEST_BASE_URL || process.argv[2] || "http://127.0.0.1:3001")
  .trim()
  .replace(/\/$/, "");

const items = [{ id: "r36s-black", quantity: 1 }];

async function main() {
  const response = await fetch(`${targetBaseUrl}/api/create-checkout-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ items })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = payload.error || `Request failed with status ${response.status}`;
    throw new Error(error);
  }

  if (
    !payload.url ||
    typeof payload.url !== "string" ||
    !payload.url.startsWith("https://checkout.stripe.com/")
  ) {
    throw new Error("Server did not return a valid Stripe Checkout URL.");
  }

  console.log(`Stripe checkout smoke test passed for ${targetBaseUrl}`);
  console.log(payload.url);
}

main().catch((error) => {
  console.error(`Stripe checkout smoke test failed for ${targetBaseUrl}`);
  console.error(error.message);
  process.exit(1);
});
