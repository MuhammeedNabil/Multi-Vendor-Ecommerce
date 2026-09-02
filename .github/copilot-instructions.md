# Copilot Cloud Agent Instructions

## Repository Overview

This is a **Multi-Vendor E-Commerce Application** built with **Next.js 15.4** and the **Wix Commerce Platform**. The application provides:
- Multi-vendor e-commerce storefront with product catalog and filtering
- Shopping cart management with Zustand state management
- User authentication and profile management via Wix Members API
- Order management and checkout functionality
- Dashboard and admin features for vendors

**Repository Stats:**
- Language: TypeScript (98.9%)
- Size: ~1MB
- Default Branch: `master`
- Deployment: Vercel-ready

## Core Technology Stack

- **Framework:** Next.js 15.4 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4 + PostCSS
- **State Management:** Zustand 5.0
- **Backend Platform:** Wix SDK (@wix/* packages)
  - @wix/stores (v1.0.274) - Product catalog management
  - @wix/ecom (v1.0.798) - Cart and orders
  - @wix/members (v1.0.113) - User authentication
  - @wix/redirects (v1.0.70) - URL redirects
- **UI Components:** React 18, Confetti animations, timeago formatting
- **Package Manager:** npm (with package-lock.json)
- **Node.js:** Recommended 18+ (per Next.js 15 requirements)

## Build and Development Commands

**Always run these commands from the repository root directory.**

### Installation (Required - Always do this first)
```bash
npm install
```
This installs all dependencies listed in package.json. **Never skip this step** when starting work.

### Development Server
```bash
npm run dev
```
- Starts Next.js development server on `http://localhost:3000`
- Supports hot module reloading for immediate changes
- Default for local development and testing

### Production Build
```bash
npm run build
```
- Compiles TypeScript and bundles the application
- **Must complete successfully before deployment**
- Creates `.next/` directory with optimized build output
- Typical build time: ~30 seconds
- **This must pass for any PR to be accepted** - verify locally before committing

### Start Production Server
```bash
npm start
```
- Runs the production build (requires `npm run build` first)
- Used to test production behavior locally

### Linting
```bash
npm run lint
```
- Runs ESLint with Next.js core-web-vitals configuration
- **Must pass before committing**
- Extends "next/core-web-vitals" preset (.eslintrc.json)
- Automatically fixes many issues with: `npx next lint --fix`

## Project Structure and Key Directories

### `/src` - Application source code
- **`/src/app`** - Next.js App Router pages
  - `layout.tsx` - Root layout with WixClientContextProvider
  - `page.tsx` - Homepage with Slider, CategoryList, ProductList (uses Suspense for async components)
  - `[slug]/` - Dynamic product detail pages
  - `list/` - Product listing pages
  - `login/` - Authentication pages
  - `profile/` - User profile management
  - `orders/` - Order history and tracking
  - `success/` - Checkout success page
  - `globals.css` - Global styles and scrollbar utilities
  - `favicon.ico` - Site favicon

- **`/src/components`** - Reusable React components
  - `Navbar.tsx`, `Footer.tsx` - Layout shells
  - `ProductList.tsx`, `CategoryList.tsx` - Data display
  - `CartModel.tsx` - Shopping cart modal
  - `Add.tsx` - Product addition to cart
  - `CustomizeProducts.tsx` - Product variant selection
  - `Filter.tsx` - Product filtering
  - `Pagination.tsx` - Page navigation
  - `ProductImages.tsx` - Image carousel
  - `Skeleton.tsx` - Loading placeholders
  - `Slider.tsx` - Hero carousel
  - `SearchBar.tsx`, `NavIcons.tsx`, `Menu.tsx` - Navigation
  - `Reviews.tsx`, `UpdateButton.tsx` - Additional UI components

- **`/src/context`** - React Context providers
  - `wixContext.tsx` - Wix SDK client initialization (client-side with OAuth)
    - Creates Wix client using NEXT_PUBLIC_WIX_CLIENT_ID
    - Manages refresh tokens via cookies
    - Provides products, collections, currentCart, redirects modules
    - **Mark with "use client"** - this is a client component

- **`/src/hooks`** - Custom React hooks
  - `useWixClient.tsx` - Hook to access WixClientContext (client-side)
  - `useCartStore.ts` - Zustand cart state management
    - Manages cart state, loading status, counter
    - Methods: getCart, addItem, removeItem
    - Uses NEXT_PUBLIC_WIX_APP_ID for catalog references

- **`/src/lib`** - Utility functions and server-side code
  - `wixClientServer.ts` - Server-side Wix client creation (used in Server Components)
    - Async function that reads refresh token from cookies
    - Provides products, collections, orders, members modules
    - Handles token refresh automatically
  - `actions.ts` - Server actions ("use server")
    - `updateUser()` - Updates member profile (firstName, lastName, email, phone, username)

### Configuration Files (Root Directory)
- `tsconfig.json` - TypeScript configuration with path alias `@/*` → `./src/*`
- `next.config.mjs` - Next.js configuration with image optimization
  - **Image domains:** images.pexels.com, static.wixstatic.com, people.pic1.co, app-uploads-cdn.fera.ai
  - Add new domains here if using new image sources
- `tailwind.config.ts` - Tailwind CSS configuration
  - Custom color: `Pink: "#F35C7A"`
  - Content paths configured for all tsx/jsx files
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `.eslintrc.json` - ESLint configuration extending "next/core-web-vitals"
- `package.json` - Dependencies and scripts
- `.gitignore` - Includes node_modules, .next, .env*.local, coverage

## Environment Variables

Create a `.env.local` file in the root with:
```
NEXT_PUBLIC_WIX_CLIENT_ID=<your-wix-client-id>
NEXT_PUBLIC_WIX_APP_ID=<your-wix-app-id>
```

These variables are required for:
- `src/context/wixContext.tsx` - Client-side Wix OAuth
- `src/lib/wixClientServer.ts` - Server-side Wix client
- `src/hooks/useCartStore.ts` - Catalog item references

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never include secrets in them.

## Validation Checklist Before Submitting Code

Always execute these steps to validate changes before committing:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run linter (fix issues):**
   ```bash
   npm run lint
   # or auto-fix:
   npm run lint --fix
   ```

3. **Build the application:**
   ```bash
   npm run build
   ```
   - This is **critical** - build must pass
   - Common issues: TypeScript errors, missing imports, ESLint violations

4. **Test in development mode (optional but recommended):**
   ```bash
   npm run dev
   # Visit http://localhost:3000 in browser
   # Ctrl+C to stop
   ```

5. **Verify no uncommitted changes remain** from lint/build processes

**Do NOT commit if:**
- `npm run lint` fails
- `npm run build` fails or produces errors
- TypeScript type errors exist
- New console.error() warnings appear in build output

## Architecture Notes

### Client vs Server Components
- **Client Components** ("use client"): `wixContext.tsx`, `useWixClient.tsx`, all hook-based state
- **Server Components** (default): Page files (page.tsx), async data fetching
- **Server Actions** ("use server"): In `actions.ts` for mutations (updateUser)

### Wix SDK Pattern
- **Client-side:** Use `useWixClient()` hook to access pre-initialized context
- **Server-side:** Call `wixClientServer()` async function to create instance
- **Token Management:** Handled automatically via OAuth strategy with cookie-based refresh tokens
- **Module Access:** Access via `wixClient.products`, `wixClient.currentCart`, etc.

### Data Fetching Pattern
- Use React Suspense for async data loading in Server Components
- Example: `<Suspense fallback={<Skeleton />}><ProductList /></Suspense>`
- Components inside Suspense should be async (await data in component body)

### Styling Approach
- Tailwind CSS first (utility classes in className)
- Global CSS in `globals.css` only for truly global styles
- Custom color "Pink" (#F35C7A) available via Tailwind
- Responsive breakpoints: md, lg, xl, 2xl used throughout

## Common Patterns to Follow

1. **Importing from @/ alias:** Always use `import { X } from "@/components/X"` not relative paths
2. **Component naming:** PascalCase (ProductList.tsx, CartModel.tsx)
3. **File naming:** Match component names exactly
4. **Type definitions:** Use TypeScript interfaces/types explicitly
5. **Error handling:** Try-catch blocks in server actions and async functions (see actions.ts, wixClientServer.ts)
6. **API calls:** Always use wixClient methods, never direct HTTP (SDK handles auth)

## Trust These Instructions

The build and validation commands listed above have been verified and work correctly. Before using code search or exploration tools, first follow the exact commands and paths documented here. Only search if information is explicitly marked as incomplete or if a command produces unexpected errors not mentioned in these instructions.
