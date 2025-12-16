# Arpit Library

Arpit Library is a full-stack ecommerce experience for discovering and buying books. The monorepo ships with a Next.js frontend styled with Tailwind CSS and Framer Motion plus a Node.js + Express backend connected to MongoDB with Razorpay payment plumbing.

## Tech stack
- Frontend: Next.js, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, MongoDB (Mongoose), JWT auth, Razorpay integration scaffold

## Getting started

### Prerequisites
- Node.js 18+
- MongoDB connection string
- Razorpay key and secret

### Install dependencies
```bash
# Frontend
yarn install --cwd frontend
# Backend
yarn install --cwd backend
```

### Environment variables
Copy `.env.example` to `.env` in `backend/` and update the values.

### Run the apps
```bash
# Frontend
yarn --cwd frontend dev
# Backend
yarn --cwd backend dev
```

## Folder structure
- `frontend/` – Next.js app with Tailwind styling, theme toggling, and animated Gen Z landing page
- `backend/` – Express server with modular routes, controllers, and Razorpay helper utilities
- `README.md` – Project overview and setup notes
- `.gitignore` – Standard Node/Next ignores

## Notes
- The frontend ships with sample book data and UI sections for hero, featured picks, search/filter, cart previews, and admin highlights.
- Backend routes are organized for auth, books, cart/checkout, and admin tools; wire them to MongoDB and Razorpay credentials for full functionality.
