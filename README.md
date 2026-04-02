# Geek Store

A cleaned-up retro gaming storefront with:

- a shared frontend state layer for products, cart, wishlist, and reviews
- consistent product pages and storefront UI
- Stripe checkout integration
- contact and order confirmation server endpoints
- a flatter, cleaner project structure

## Run locally

```bash
npm install
npm start
```

The app runs on `http://localhost:3001` by default.

## Environment

Create a local `.env` file with the values you need for Stripe and optional email sending:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `PUBLIC_BASE_URL`
- `EMAIL_USER`
- `EMAIL_PASS`
- `CONTACT_EMAIL`
