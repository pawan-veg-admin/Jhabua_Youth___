# Arpit Library Project Structure

This guide summarizes the monorepo layout, the key files that bootstrap the stack, and how the frontend and backend are wired for the Gen Z–styled Arpit Library ecommerce experience.

## Top-level layout
- `frontend/` – Next.js + Tailwind + Framer Motion app for the UI, catalog, cart, and admin highlights.
- `backend/` – Node.js + Express API with MongoDB models, JWT authentication, and Razorpay helpers.
- `README.md` – Project overview and setup notes.
- `.gitignore` – Standard Node/Next ignores.

## Frontend (Next.js)
```
frontend/
├─ app/
│  ├─ layout.tsx        # Root layout with Navbar/ThemeProvider and metadata
│  ├─ page.tsx          # Home page composed of hero, book grid, features, and admin showcase
│  └─ globals.css       # Tailwind base layers, fonts, and theme utilities
├─ components/
│  ├─ Navbar.tsx        # Top navigation with theme toggle and anchor links
│  ├─ ThemeToggle.tsx   # Button to switch between dark/light modes
│  ├─ ThemeProvider.tsx # Wraps app with theme context and class handling
│  ├─ Hero.tsx          # Landing hero section with CTA and motion effects
│  ├─ BookGrid.tsx      # Catalog grid with search/filter controls
│  ├─ BookCard.tsx      # Individual book tile with pricing/badges
│  ├─ FeatureHighlights.tsx # Feature list highlighting payment, shipping, and experience
│  ├─ AdminShowcase.tsx # Snapshot of admin dashboard cards/metrics
│  └─ Footer.tsx        # Footer with links and social cues
├─ lib/books.ts         # Sample book seed data used by the grid/filter UI
├─ tailwind.config.js   # Tailwind theme extension (colors, fonts, animations)
├─ postcss.config.js    # PostCSS pipeline for Tailwind
├─ next.config.js       # Next.js runtime configuration
├─ tsconfig.json        # TypeScript settings used by Next
├─ package.json         # Frontend scripts (dev/build/lint) and dependencies
└─ next-env.d.ts        # Next.js TypeScript ambient declarations
```

### Tailwind + Next.js bootstrap
- `app/globals.css` imports Tailwind base/components/utilities and defines global gradients, typography, and background helpers.
- `tailwind.config.js` scans the `app/` and `components/` directories and extends the color palette for brand neon/glow effects suited to the Gen Z aesthetic.
- `app/layout.tsx` applies the `ThemeProvider` and shared `Navbar/Footer` so dark/light mode works across all routes.

## Backend (Express + MongoDB)
```
backend/
├─ src/
│  ├─ index.js            # Entry point that loads env vars and starts the HTTP server
│  ├─ app.js              # Express app instance with middleware and route mounting
│  ├─ config/db.js        # MongoDB connection helper using Mongoose
│  ├─ middleware/auth.js  # JWT verification and role guard helpers
│  ├─ models/
│  │  ├─ User.js          # User schema with roles, hashed password, and auth helpers
│  │  ├─ Book.js          # Book schema with pricing, tags, inventory, and media fields
│  │  └─ Order.js         # Order schema tracking cart items, totals, and payment status
│  ├─ routes/
│  │  ├─ authRoutes.js    # /api/auth registration/login/profile endpoints
│  │  ├─ bookRoutes.js    # /api/books CRUD/search/filter endpoints
│  │  ├─ cartRoutes.js    # /api/cart cart + checkout endpoints
│  │  └─ adminRoutes.js   # /api/admin protected admin actions
│  ├─ controllers/
│  │  ├─ authController.js  # Auth flows, JWT issuance, profile retrieval
│  │  ├─ bookController.js  # Book listing, search, filter, and admin CRUD
│  │  ├─ cartController.js  # Cart persistence and checkout orchestration
│  │  └─ adminController.js # Admin dashboard metrics and management hooks
│  └─ utils/razorpay.js    # Razorpay client setup and order utility helpers
├─ package.json           # Backend scripts (dev/start) plus Express/Mongoose/JWT/Razorpay deps
└─ .env.example (create)  # Sample env vars for Mongo URI, JWT secret, and Razorpay keys
```

### Express bootstrap
- `src/index.js` reads environment variables, connects to MongoDB, initializes the app instance, and starts listening on the configured port.
- `src/app.js` centralizes middleware (`cors`, `morgan`, `cookie-parser`, JSON parsing) and mounts modular route files for auth, books, cart/checkout, and admin.
- Route files forward to controller functions, keeping HTTP definitions thin while business logic lives in controllers.
- `src/utils/razorpay.js` exposes a preconfigured Razorpay client for checkout flows.

## Packages
- **Frontend `package.json`** – Defines Next.js scripts (`dev`, `build`, `start`, `lint`) and dependencies including `next`, `react`, `tailwindcss`, `framer-motion`, and Heroicons for UI polish.
- **Backend `package.json`** – Provides `dev` (via `nodemon`) and `start` commands with dependencies for Express routing, MongoDB (`mongoose`), auth (`jsonwebtoken`, `bcryptjs`), CORS/cookies, logging (`morgan`), env handling, and Razorpay SDK.

Use this map as a quick reference when navigating or extending the codebase.
