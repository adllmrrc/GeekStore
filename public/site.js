const STORE = {
  email: "chahine.daha@gmail.com",
  phoneDisplay: "06 12 98 11 81",
  phoneHref: "tel:0612981181"
};

const PRODUCT_CATALOG = {
  "r36s-black": {
    id: "r36s-black",
    familyId: "r36s",
    familyName: "R36S Handheld Console",
    variantLabel: "Black",
    name: "R36S Handheld Console - Black",
    price: 49.99,
    image: "/assets/images/r36s-black.avif",
    page: "r36s.html",
    summary: "20,000 plus games, 3.5-inch IPS display, and an 8-hour battery.",
    aliases: [
      "R36S Handheld Console Black",
      "Console Portable R36S Noir",
      "R36S Handheld Console - Black",
      "R36S Black"
    ]
  },
  "r36s-white": {
    id: "r36s-white",
    familyId: "r36s",
    familyName: "R36S Handheld Console",
    variantLabel: "White",
    name: "R36S Handheld Console - White",
    price: 49.99,
    image: "/assets/images/r36s-white.jpeg",
    page: "r36s.html",
    summary: "The same pocket handheld in a lighter finish for clean setups.",
    aliases: [
      "R36S Handheld Console White",
      "Console Portable R36S Blanc",
      "R36S Handheld Console - White",
      "R36S White"
    ]
  },
  "r36s-violet": {
    id: "r36s-violet",
    familyId: "r36s",
    familyName: "R36S Handheld Console",
    variantLabel: "Violet",
    name: "R36S Handheld Console - Violet",
    price: 49.99,
    image: "/assets/images/r36s-violet.jpeg",
    page: "r36s.html",
    summary: "A bold shell option for players who want color without extra setup.",
    aliases: [
      "R36S Handheld Console Violet",
      "Console Portable R36S Violet",
      "R36S Handheld Console - Violet",
      "R36S Violet"
    ]
  },
  "arcade-sky-blue": {
    id: "arcade-sky-blue",
    familyId: "mini-arcade",
    familyName: "Mini Arcade Cabinet",
    variantLabel: "Sky Blue",
    name: "Mini Arcade Cabinet - Sky Blue",
    price: 79.99,
    image: "/assets/images/arcade-blue.jpg",
    page: "arcade.html",
    summary: "A compact desktop cabinet that instantly turns a shelf into a gaming corner.",
    aliases: [
      "Mini Arcade Cabinet Sky Blue",
      "Mini Borne d'arcade Bleu ciel",
      "Mini Arcade Cabinet - Sky Blue"
    ]
  },
  "arcade-light-blue": {
    id: "arcade-light-blue",
    familyId: "mini-arcade",
    familyName: "Mini Arcade Cabinet",
    variantLabel: "Light Blue",
    name: "Mini Arcade Cabinet - Light Blue",
    price: 79.99,
    image: "/assets/images/arcade-light-blue.jpg",
    page: "arcade.html",
    summary: "A softer cabinet finish with the same all-in retro desk appeal.",
    aliases: [
      "Mini Arcade Cabinet Light Blue",
      "Mini Borne d'arcade Bleu clair",
      "Mini Arcade Cabinet - Light Blue"
    ]
  },
  "arcade-yellow": {
    id: "arcade-yellow",
    familyId: "mini-arcade",
    familyName: "Mini Arcade Cabinet",
    variantLabel: "Sun Yellow",
    name: "Mini Arcade Cabinet - Sun Yellow",
    price: 79.99,
    image: "/assets/images/arcade-yellow.jpg",
    page: "arcade.html",
    summary: "Bright cabinet styling for setups that want a stronger statement piece.",
    aliases: [
      "Mini Arcade Cabinet Yellow",
      "Mini Borne d'arcade Jaune",
      "Mini Arcade Cabinet - Sun Yellow"
    ]
  },
  "retro-controller": {
    id: "retro-controller",
    familyId: "retro-controller",
    familyName: "Bluetooth Retro Controller",
    variantLabel: "Wireless",
    name: "Bluetooth Retro Controller",
    price: 29.99,
    image: "/assets/images/retro-controller.jpg",
    page: "controller.html",
    summary: "A low-latency gamepad that feels familiar from the first button press.",
    aliases: [
      "Bluetooth Retro Controller",
      "Manette Retro Sans Fils",
      "Wireless Retro Controller"
    ]
  },
  "retro-keychain": {
    id: "retro-keychain",
    familyId: "retro-keychain",
    familyName: "Retro Keychain Mini Console",
    variantLabel: "Collector Edition",
    name: "Retro Keychain Mini Console",
    price: 19.99,
    image: "/assets/images/retro-keychain.avif",
    page: "keychain.html",
    summary: "A pocket-size collectible that adds nostalgic character to any everyday carry.",
    aliases: [
      "Retro Keychain Mini Console",
      "Porte-Cle Retro Mini Console",
      "Porte-Clé Rétro Mini Console",
      "Porte-ClÃ© RÃ©tro \"Mini Console\"",
      "Portecle retro mini console"
    ]
  }
};

const PRODUCT_FAMILIES = {
  r36s: {
    id: "r36s",
    name: "R36S Handheld Console",
    page: "r36s.html",
    badge: "Best seller",
    category: "consoles",
    categoryLabel: "Handheld console",
    description:
      "A ready-to-play Linux handheld for classic libraries, travel sessions, and fast pickup-and-play use.",
    cardCopy:
      "The R36S gives you crisp retro visuals, a mature emulator stack, and long battery life in one compact shell.",
    highlights: ["20,000 plus games", "8-hour battery", "3 finishes"],
    rating: "4.9/5",
    reviewCount: "2,847 reviews",
    defaultVariant: "r36s-black"
  },
  "mini-arcade": {
    id: "mini-arcade",
    name: "Mini Arcade Cabinet",
    page: "arcade.html",
    badge: "Desk centerpiece",
    category: "arcade",
    categoryLabel: "Arcade",
    description:
      "A compact cabinet that gives shelves, bedrooms, and offices a real arcade presence without taking over the room.",
    cardCopy:
      "Built for display as much as play, with a bright cabinet look and an easy place-anywhere footprint.",
    highlights: ["Compact cabinet", "3 cabinet colors", "Gift-ready"],
    rating: "4.7/5",
    reviewCount: "1,234 reviews",
    defaultVariant: "arcade-sky-blue"
  },
  "retro-controller": {
    id: "retro-controller",
    name: "Bluetooth Retro Controller",
    page: "controller.html",
    badge: "Easy upgrade",
    category: "controllers",
    categoryLabel: "Controller",
    description:
      "A wireless controller that adds reliable comfort and familiar button placement to emulators and retro setups.",
    cardCopy:
      "Plug in less, play more. This is the fastest way to improve the feel of a retro setup on modern hardware.",
    highlights: ["Bluetooth", "Low-latency feel", "Travel friendly"],
    rating: "4.8/5",
    reviewCount: "956 reviews",
    defaultVariant: "retro-controller"
  },
  "retro-keychain": {
    id: "retro-keychain",
    name: "Retro Keychain Mini Console",
    page: "keychain.html",
    badge: "Giftable",
    category: "collectibles",
    categoryLabel: "Collectible",
    description:
      "A playful display piece and conversation starter for bags, keys, desks, and small gamer gifts.",
    cardCopy:
      "Designed for nostalgia-first gifting, everyday carry, and retro-themed desk styling.",
    highlights: ["Collector feel", "Lightweight", "Instant gift idea"],
    rating: "4.6/5",
    reviewCount: "423 reviews",
    defaultVariant: "retro-keychain"
  }
};

const DEFAULT_REVIEWS = [
  {
    name: "Mike T.",
    rating: 5,
    title: "Looks premium in person",
    text:
      "The handheld arrived fast, the controls felt solid right away, and the setup looked much better than the average marketplace gadget.",
    date: "2026-02-17"
  },
  {
    name: "Sarah L.",
    rating: 5,
    title: "Exactly the kind of retro gift I wanted",
    text:
      "The arcade cabinet was easy to place on a shelf and instantly made the room feel more fun. It feels like a polished novelty instead of a cheap toy.",
    date: "2026-02-10"
  },
  {
    name: "James R.",
    rating: 5,
    title: "Good balance of nostalgia and convenience",
    text:
      "What sold me was how little setup was needed. I wanted a simple retro device that still felt intentional, and this hit that mark.",
    date: "2026-01-28"
  }
];

const STORAGE_KEYS = {
  cart: "geek_store_cart_v2",
  wishlist: "geek_store_wishlist_v2",
  legacyCart: "pixel_vault_cart",
  legacyWishlist: "geek_store_wishlist",
  reviews: "geek_store_reviews_v2"
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR"
});

let cart = [];
let wishlist = [];
let submittedReviews = [];
let revealObserver = null;
const catalogState = {
  query: "",
  category: "all",
  sort: "featured"
};

const aliasToProductId = buildAliasMap();

document.addEventListener("DOMContentLoaded", () => {
  cart = loadCart();
  wishlist = loadWishlist();
  submittedReviews = loadReviews();

  setupRevealObserver();
  updateCurrentYear();
  markActiveNav();
  syncHeaderBadges();
  syncProductPages();
  syncStaticWishlistButtons();
  renderProductsPage();
  renderCartPage();
  renderWishlistPage();
  renderReviews();
  initProductFilterControls();
  initProductPages();
  initContactForm();
  initNav();
  initSuccessState();
  registerServiceWorker();
  revealIn(document);
});

document.addEventListener("click", async (event) => {
  const navToggle = event.target.closest("[data-nav-toggle]");
  if (navToggle) {
    toggleNav();
    return;
  }

  const navLink = event.target.closest(".nav-link, .action-link");
  if (navLink) {
    closeNav();
  }

  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    addToCartById(addButton.dataset.addToCart);
    return;
  }

  const addFamilyButton = event.target.closest("[data-add-family]");
  if (addFamilyButton) {
    const family = PRODUCT_FAMILIES[addFamilyButton.dataset.addFamily];
    if (family) {
      addToCartById(family.defaultVariant);
    }
    return;
  }

  const wishlistButton = event.target.closest("[data-toggle-wishlist]");
  if (wishlistButton) {
    toggleWishlist(wishlistButton.dataset.toggleWishlist);
    return;
  }

  const variantButton = event.target.closest("[data-product-variant]");
  if (variantButton) {
    const root = variantButton.closest("[data-product-root]");
    if (root) {
      root.dataset.currentProduct = variantButton.dataset.productVariant;
      syncProductRoot(root);
    }
    return;
  }

  const addCurrentButton = event.target.closest("[data-add-current-product]");
  if (addCurrentButton) {
    const root = addCurrentButton.closest("[data-product-root]");
    if (root && root.dataset.currentProduct) {
      addToCartById(root.dataset.currentProduct);
    }
    return;
  }

  const saveCurrentButton = event.target.closest("[data-save-current-product]");
  if (saveCurrentButton) {
    const root = saveCurrentButton.closest("[data-product-root]");
    if (root && root.dataset.currentProduct) {
      toggleWishlist(root.dataset.currentProduct);
    }
    return;
  }

  const quantityButton = event.target.closest("[data-cart-delta]");
  if (quantityButton) {
    const productId = quantityButton.dataset.productId;
    const delta = Number(quantityButton.dataset.cartDelta || 0);
    changeCartQuantity(productId, delta);
    return;
  }

  const removeButton = event.target.closest("[data-cart-remove]");
  if (removeButton) {
    removeFromCart(removeButton.dataset.cartRemove);
    return;
  }

  const moveButton = event.target.closest("[data-move-to-cart]");
  if (moveButton) {
    addToCartById(moveButton.dataset.moveToCart);
    removeFromWishlist(moveButton.dataset.moveToCart, false);
    return;
  }

  const wishlistRemoveButton = event.target.closest("[data-remove-wishlist]");
  if (wishlistRemoveButton) {
    removeFromWishlist(wishlistRemoveButton.dataset.removeWishlist);
    return;
  }

  const checkoutButton = event.target.closest("[data-begin-checkout]");
  if (checkoutButton) {
    event.preventDefault();
    await beginCheckout(checkoutButton);
  }

  const categoryButton = event.target.closest("[data-category-filter]");
  if (categoryButton) {
    catalogState.category = categoryButton.dataset.categoryFilter;
    renderProductsPage();
  }
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "review-form") {
    event.preventDefault();
    handleReviewSubmit(event.target);
    return;
  }

  if (event.target.id === "contact-form") {
    event.preventDefault();
    await handleContactSubmit(event.target);
  }
});

window.addToCartGeneric = function addToCartGeneric(nameOrId) {
  const productId = resolveProductId(nameOrId);
  if (!productId) {
    showToast("We could not match that product.", "error");
    return;
  }
  addToCartById(productId);
};

window.addToWishlist = function addToWishlistLegacy(nameOrId) {
  const productId = resolveProductId(nameOrId);
  if (!productId) {
    showToast("We could not match that product.", "error");
    return;
  }
  toggleWishlist(productId);
};

window.checkout = function legacyCheckout() {
  const button = document.querySelector("[data-begin-checkout]");
  beginCheckout(button);
};

function buildAliasMap() {
  const lookup = {};
  Object.values(PRODUCT_CATALOG).forEach((product) => {
    lookup[normalizeKey(product.id)] = product.id;
    lookup[normalizeKey(product.name)] = product.id;
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

function resolveProductId(reference) {
  if (!reference) {
    return null;
  }
  if (PRODUCT_CATALOG[reference]) {
    return reference;
  }
  return aliasToProductId[normalizeKey(reference)] || null;
}

function formatCurrency(value) {
  return currencyFormatter.format(Number(value || 0));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function loadCart() {
  const current = readStorage(STORAGE_KEYS.cart, null);
  if (Array.isArray(current)) {
    return normalizeCartEntries(current);
  }
  const legacy = readStorage(STORAGE_KEYS.legacyCart, []);
  const migrated = normalizeCartEntries(legacy);
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(migrated));
  return migrated;
}

function normalizeCartEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  const merged = new Map();
  entries.forEach((entry) => {
    const productId = resolveProductId(entry && (entry.id || entry.name));
    if (!productId) {
      return;
    }

    const quantity = Math.max(1, Number(entry.quantity || 1));
    const current = merged.get(productId) || 0;
    merged.set(productId, current + quantity);
  });

  return Array.from(merged.entries()).map(([id, quantity]) => ({ id, quantity }));
}

function loadWishlist() {
  const current = readStorage(STORAGE_KEYS.wishlist, null);
  if (Array.isArray(current)) {
    return normalizeWishlistEntries(current);
  }

  const legacy = readStorage(STORAGE_KEYS.legacyWishlist, []);
  const migrated = normalizeWishlistEntries(legacy);
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(migrated));
  return migrated;
}

function normalizeWishlistEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  const next = [];
  entries.forEach((entry) => {
    const productId = resolveProductId(
      typeof entry === "string" ? entry : entry && (entry.id || entry.name)
    );
    if (productId && !next.includes(productId)) {
      next.push(productId);
    }
  });
  return next;
}

function loadReviews() {
  const reviews = readStorage(STORAGE_KEYS.reviews, []);
  if (!Array.isArray(reviews)) {
    return [];
  }

  return reviews
    .filter((review) => review && review.name && review.text)
    .map((review) => ({
      name: String(review.name).slice(0, 60),
      title: String(review.title || "Community review").slice(0, 80),
      text: String(review.text).slice(0, 400),
      rating: clamp(Number(review.rating || 5), 1, 5),
      date: review.date || new Date().toISOString()
    }));
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
}

function saveReviews() {
  localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(submittedReviews));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCartItems() {
  return cart
    .map((entry) => {
      const product = PRODUCT_CATALOG[entry.id];
      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity: entry.quantity,
        lineTotal: product.price * entry.quantity
      };
    })
    .filter(Boolean);
}

function getSubtotal() {
  return getCartItems().reduce((total, item) => total + item.lineTotal, 0);
}

function syncHeaderBadges() {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((node) => {
    node.textContent = String(itemCount);
  });
  document.querySelectorAll(".wishlist-count").forEach((node) => {
    node.textContent = String(wishlist.length);
  });
}

function addToCartById(productId) {
  if (!PRODUCT_CATALOG[productId]) {
    showToast("This product is not available right now.", "error");
    return;
  }

  const match = cart.find((item) => item.id === productId);
  if (match) {
    match.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  refreshViews();
  showToast("Added to cart.");
}

function changeCartQuantity(productId, delta) {
  const match = cart.find((item) => item.id === productId);
  if (!match) {
    return;
  }

  match.quantity = clamp(match.quantity + delta, 0, 50);
  if (match.quantity === 0) {
    cart = cart.filter((item) => item.id !== productId);
  }
  saveCart();
  refreshViews();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  refreshViews();
  showToast("Removed from cart.");
}

function toggleWishlist(productId) {
  if (!PRODUCT_CATALOG[productId]) {
    showToast("This product is not available right now.", "error");
    return;
  }

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
    saveWishlist();
    refreshViews();
    showToast("Removed from saved items.");
    return;
  }

  wishlist.push(productId);
  saveWishlist();
  refreshViews();
  showToast("Saved for later.");
}

function removeFromWishlist(productId, notify = true) {
  wishlist = wishlist.filter((id) => id !== productId);
  saveWishlist();
  refreshViews();
  if (notify) {
    showToast("Removed from saved items.");
  }
}

function refreshViews() {
  syncHeaderBadges();
  syncProductPages();
  syncStaticWishlistButtons();
  renderProductsPage();
  renderCartPage();
  renderWishlistPage();
}

function markActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const normalizedCurrent =
    currentPath === "" || currentPath === "/" ? "index.html" : currentPath.toLowerCase();

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const normalizedHref =
      href === "/" ? "index.html" : href.replace(/^\//, "").toLowerCase();
    const matches =
      normalizedHref === normalizedCurrent ||
      (window.location.pathname === "/" && normalizedHref === "index.html");
    link.classList.toggle("is-active", Boolean(matches));
  });
}

function updateCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = year;
  });
}

function initNav() {
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!menu || !toggle) {
    return;
  }

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) {
      return;
    }
    const insideMenu = event.target.closest("[data-nav-menu]");
    const insideToggle = event.target.closest("[data-nav-toggle]");
    if (!insideMenu && !insideToggle) {
      closeNav();
    }
  });
}

function toggleNav() {
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!menu || !toggle) {
    return;
  }

  const nextState = !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", nextState);
  toggle.setAttribute("aria-expanded", String(nextState));
  document.body.classList.toggle("menu-open", nextState);
}

function closeNav() {
  const menu = document.querySelector("[data-nav-menu]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!menu || !toggle) {
    return;
  }

  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function initProductFilterControls() {
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      catalogState.query = event.target.value.trim().toLowerCase();
      renderProductsPage();
    });
  }

  const sortSelect = document.getElementById("product-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      catalogState.sort = event.target.value;
      renderProductsPage();
    });
  }
}

function buildFamilyCardMarkup(family) {
  const saved = wishlist.includes(family.defaultVariant);
  const price = formatCurrency(PRODUCT_CATALOG[family.defaultVariant].price);

  return `
    <article class="catalog-card reveal">
      <a class="media-frame" href="${family.page}" aria-label="View ${escapeHtml(family.name)}">
        <img src="${PRODUCT_CATALOG[family.defaultVariant].image}" alt="${escapeHtml(family.name)}" loading="lazy">
      </a>
      <div class="card-top">
        <span class="badge">${escapeHtml(family.badge)}</span>
        <button
          class="wishlist-toggle${saved ? " is-active" : ""}"
          type="button"
          data-toggle-wishlist="${family.defaultVariant}"
          aria-label="${saved ? "Remove from saved items" : "Save for later"}"
        >${saved ? "Saved" : "Save"}</button>
      </div>
      <div>
        <h3>${escapeHtml(family.name)}</h3>
        <p class="muted">${escapeHtml(family.cardCopy)}</p>
      </div>
      <div class="meta-line">
        ${family.highlights
          .map((highlight) => `<span>${escapeHtml(highlight)}</span>`)
          .join("")}
      </div>
      <div class="price-row">
        <div class="price-stack">
          <span class="price-label">From</span>
          <span class="price-value">${price}</span>
        </div>
        <div class="muted">${escapeHtml(family.rating)}<br>${escapeHtml(family.reviewCount)}</div>
      </div>
      <div class="card-actions">
        <a class="button secondary" href="${family.page}">View details</a>
        <button class="button primary" type="button" data-add-family="${family.id}">Quick add</button>
      </div>
    </article>
  `;
}

function renderProductsPage() {
  const grid = document.getElementById("products-grid");
  if (!grid) {
    return;
  }

  const families = Object.values(PRODUCT_FAMILIES)
    .filter((family) => {
      const matchesCategory =
        catalogState.category === "all" || family.category === catalogState.category;

      const searchable = `${family.name} ${family.description} ${family.cardCopy}`
        .toLowerCase();
      const matchesQuery =
        !catalogState.query || searchable.includes(catalogState.query);

      return matchesCategory && matchesQuery;
    })
    .sort((left, right) => {
      switch (catalogState.sort) {
        case "price-low":
          return PRODUCT_CATALOG[left.defaultVariant].price - PRODUCT_CATALOG[right.defaultVariant].price;
        case "price-high":
          return PRODUCT_CATALOG[right.defaultVariant].price - PRODUCT_CATALOG[left.defaultVariant].price;
        case "name":
          return left.name.localeCompare(right.name);
        default:
          return 0;
      }
    });

  document.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.categoryFilter === catalogState.category
    );
  });

  if (!families.length) {
    grid.innerHTML = `
      <div class="surface empty-state">
        <h3>No matches found</h3>
        <p class="muted">Try another keyword or switch back to all categories.</p>
      </div>
    `;
    revealIn(grid);
    return;
  }

  grid.innerHTML = families.map((family) => buildFamilyCardMarkup(family)).join("");
  revealIn(grid);
}

function initProductPages() {
  document.querySelectorAll("[data-product-root]").forEach((root) => {
    if (!root.dataset.currentProduct) {
      const firstVariant = root.querySelector("[data-product-variant]");
      if (firstVariant) {
        root.dataset.currentProduct = firstVariant.dataset.productVariant;
      } else if (root.dataset.productId) {
        root.dataset.currentProduct = root.dataset.productId;
      }
    }
    syncProductRoot(root);
  });
}

function syncProductPages() {
  document.querySelectorAll("[data-product-root]").forEach((root) => {
    syncProductRoot(root);
  });
}

function syncProductRoot(root) {
  const productId = root.dataset.currentProduct || root.dataset.productId;
  const product = PRODUCT_CATALOG[productId];
  if (!product) {
    return;
  }

  root.querySelectorAll("[data-product-image]").forEach((node) => {
    node.src = product.image;
    node.alt = product.name;
  });

  root.querySelectorAll("[data-product-name]").forEach((node) => {
    node.textContent = product.familyName;
  });

  root.querySelectorAll("[data-product-price]").forEach((node) => {
    node.textContent = formatCurrency(product.price);
  });

  root.querySelectorAll("[data-product-subtitle]").forEach((node) => {
    node.textContent = product.summary;
  });

  root.querySelectorAll("[data-selected-label]").forEach((node) => {
    node.textContent = product.variantLabel;
  });

  root.querySelectorAll("[data-product-variant]").forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.productVariant === product.id
    );
  });

  const saveButton = root.querySelector("[data-save-current-product]");
  if (saveButton) {
    const saved = wishlist.includes(product.id);
    saveButton.textContent = saved ? "Saved" : "Save for later";
    saveButton.classList.toggle("is-active", saved);
  }
}

function syncStaticWishlistButtons() {
  document.querySelectorAll("[data-toggle-wishlist]").forEach((button) => {
    const saved = wishlist.includes(button.dataset.toggleWishlist);
    button.classList.toggle("is-active", saved);
    button.textContent = saved ? "Saved" : "Save";
  });
}

function renderCartPage() {
  const root = document.getElementById("cart-page-root");
  if (!root) {
    return;
  }

  const items = getCartItems();
  const subtotal = getSubtotal();
  const shipping = items.length ? 0 : 0;
  const total = subtotal + shipping;

  if (!items.length) {
    root.innerHTML = `
      <div class="surface empty-state">
        <h2>Your cart is empty</h2>
        <p class="muted">Save a few picks or head back to the collection to build your setup.</p>
        <div class="button-row">
          <a class="button primary" href="products.html">Browse products</a>
          <a class="button secondary" href="wishlist.html">View saved items</a>
        </div>
      </div>
      <aside class="summary-panel surface">
        <h2>Order summary</h2>
        <div class="summary-stack">
          <div class="summary-line"><span>Subtotal</span><span>${formatCurrency(0)}</span></div>
          <div class="summary-line"><span>Shipping</span><span>Free</span></div>
          <div class="summary-line total"><strong>Total</strong><strong>${formatCurrency(0)}</strong></div>
        </div>
        <p class="muted">Checkout becomes available as soon as you add an item.</p>
      </aside>
    `;
    revealIn(root);
    return;
  }

  root.innerHTML = `
    <div class="cart-list">
      ${items
        .map(
          (item) => `
            <article class="cart-row reveal">
              <div class="cart-row-media">
                <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
              </div>
              <div class="cart-row-copy">
                <div>
                  <h3>${escapeHtml(item.name)}</h3>
                  <p class="muted">${escapeHtml(item.summary)}</p>
                </div>
                <div class="quantity-control">
                  <button
                    class="quantity-button"
                    type="button"
                    data-cart-delta="-1"
                    data-product-id="${item.id}"
                    aria-label="Decrease quantity"
                  >-</button>
                  <span class="quantity-value">${item.quantity}</span>
                  <button
                    class="quantity-button"
                    type="button"
                    data-cart-delta="1"
                    data-product-id="${item.id}"
                    aria-label="Increase quantity"
                  >+</button>
                </div>
                <button
                  class="button ghost"
                  type="button"
                  data-cart-remove="${item.id}"
                >Remove</button>
              </div>
              <div class="cart-row-total">
                <strong>${formatCurrency(item.lineTotal)}</strong>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
    <aside class="summary-panel surface">
      <h2>Order summary</h2>
      <div class="summary-stack">
        <div class="summary-line"><span>Subtotal</span><span>${formatCurrency(subtotal)}</span></div>
        <div class="summary-line"><span>Shipping</span><span>Free</span></div>
        <div class="summary-line"><span>Taxes</span><span>Included</span></div>
        <div class="summary-line total"><strong>Total</strong><strong>${formatCurrency(total)}</strong></div>
      </div>
      <p class="muted">Secure Stripe checkout. Your cart stays saved if you leave and come back.</p>
      <div class="button-row">
        <button class="button primary full" type="button" data-begin-checkout>Secure checkout</button>
        <a class="button secondary full" href="products.html">Continue shopping</a>
      </div>
      <div id="checkout-status" class="status-note"></div>
    </aside>
  `;
  revealIn(root);
}

function renderWishlistPage() {
  const root = document.getElementById("wishlist-page-root");
  if (!root) {
    return;
  }

  if (!wishlist.length) {
    root.innerHTML = `
      <div class="surface empty-state">
        <h2>No saved items yet</h2>
        <p class="muted">Use the save buttons across the store to build a shortlist before checkout.</p>
        <a class="button primary" href="products.html">Explore the collection</a>
      </div>
    `;
    revealIn(root);
    return;
  }

  root.innerHTML = wishlist
    .map((productId) => PRODUCT_CATALOG[productId])
    .filter(Boolean)
    .map(
      (product) => `
        <article class="saved-card reveal">
          <a class="media-frame" href="${product.page}">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
          </a>
          <div>
            <h3>${escapeHtml(product.familyName)}</h3>
            <p class="muted">${escapeHtml(product.summary)}</p>
          </div>
          <div class="price-row">
            <div class="price-stack">
              <span class="price-label">${escapeHtml(product.variantLabel)}</span>
              <span class="price-value">${formatCurrency(product.price)}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="button primary" type="button" data-move-to-cart="${product.id}">Move to cart</button>
            <button class="button secondary" type="button" data-remove-wishlist="${product.id}">Remove</button>
          </div>
        </article>
      `
    )
    .join("");
  revealIn(root);
}

function getReviewFeed() {
  const sortedSubmitted = [...submittedReviews].sort((left, right) =>
    new Date(right.date) - new Date(left.date)
  );
  return [...sortedSubmitted, ...DEFAULT_REVIEWS];
}

function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) {
    return;
  }

  const reviews = getReviewFeed().slice(0, 6);
  grid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card reveal">
          <div class="review-head">
            <div>
              <div class="review-name">${escapeHtml(review.name)}</div>
              <div class="review-meta">${escapeHtml(review.title)}</div>
            </div>
            <div class="review-meta">${"Rated " + review.rating + "/5"}</div>
          </div>
          <p>${escapeHtml(review.text)}</p>
          <div class="review-meta">${formatReviewDate(review.date)}</div>
        </article>
      `
    )
    .join("");
  revealIn(grid);
}

function formatReviewDate(dateValue) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(new Date(dateValue));
  } catch (error) {
    return "Recently";
  }
}

function handleReviewSubmit(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const rating = clamp(Number(formData.get("rating") || 5), 1, 5);
  const text = String(formData.get("text") || "").trim();
  const status = document.getElementById("review-status");

  if (!name || !text) {
    setStatus(status, "Please add your name and review first.", "error");
    return;
  }

  submittedReviews.unshift({
    name,
    title: title || "Community review",
    rating,
    text,
    date: new Date().toISOString()
  });
  saveReviews();
  renderReviews();
  form.reset();
  setStatus(status, "Thanks. Your review has been added locally on this device.", "success");
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) {
    return;
  }
  const status = document.getElementById("contact-status");
  setStatus(
    status,
    "Use the form for general questions about products, orders, and shipping.",
    ""
  );
}

async function handleContactSubmit(form) {
  const status = document.getElementById("contact-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim()
  };

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    setStatus(status, "Please complete every field before sending.", "error");
    return;
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }
  setStatus(status, "Sending your message...", "");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "We could not send your message right now.");
    }

    form.reset();
    setStatus(status, "Message sent. We will get back to you soon.", "success");
  } catch (error) {
    setStatus(
      status,
      `${error.message} You can also email us directly at ${STORE.email}.`,
      "error"
    );
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  }
}

async function beginCheckout(button) {
  const status = document.getElementById("checkout-status");
  if (!cart.length) {
    setStatus(status, "Your cart is empty.", "error");
    showToast("Add at least one product before checkout.", "error");
    return;
  }

  if (button) {
    button.disabled = true;
    button.textContent = "Preparing checkout...";
  }
  setStatus(status, "Preparing your secure checkout...", "");

  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: cart })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Checkout failed.");
    }

    if (!data.url) {
      throw new Error("Checkout URL missing from server response.");
    }

    window.location.href = data.url;
  } catch (error) {
    setStatus(status, error.message, "error");
    showToast(error.message, "error");
    if (button) {
      button.disabled = false;
      button.textContent = "Secure checkout";
    }
  }
}

function setStatus(node, message, type) {
  if (!node) {
    return;
  }
  node.textContent = message || "";
  node.classList.remove("is-success", "is-error");
  if (type === "success") {
    node.classList.add("is-success");
  }
  if (type === "error") {
    node.classList.add("is-error");
  }
}

function initSuccessState() {
  const page = document.body.dataset.page;
  if (page !== "success") {
    return;
  }

  cart = [];
  saveCart();
  syncHeaderBadges();

  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");
  const node = document.getElementById("order-reference");
  if (node) {
    node.textContent = sessionId
      ? `Order reference: ${sessionId}`
      : "Order reference available in your confirmation email.";
  }
}

function showToast(message, type = "success") {
  let region = document.querySelector(".toast-region");
  if (!region) {
    region = document.createElement("div");
    region.className = "toast-region";
    document.body.appendChild(region);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  region.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px"
    }
  );
}

function revealIn(scope) {
  const nodes = scope.querySelectorAll(".reveal");
  nodes.forEach((node, index) => {
    node.style.setProperty("--delay", `${(index % 6) * 70}ms`);
    if (!revealObserver) {
      node.classList.add("is-visible");
      return;
    }
    revealObserver.observe(node);
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  if (!window.location.protocol.startsWith("http")) {
    return;
  }

  navigator.serviceWorker.register("/service-worker.js").catch(() => {
    return null;
  });
}
