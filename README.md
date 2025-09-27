Next.js 15 Product Management System

This is a modern Product Management System built with Next.js 15, utilizing SSR, React Query (TanStack Query) for data fetching/mutations, ShadCN UI for sleek components, and a structured HTTP service layer for API communication.

npm install
# or
yarn
# or
pnpm install
# or
bun install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Built with Next.js 15 App Router
 Server-Side Rendering (SSR) for authenticated product data
 Clean HTTP service layer (/http) for API calls
 State & cache management with @tanstack/react-query
 ShadCN UI + Tailwind CSS for modern, accessible components
 Modular structure: components/, schema/, lib/, types/, http/
 Form validation with Zod + React Hook Form
 Optimistic UI updates, loading states, and toast notifications
 Middleware-based route protection for authenticated access

 app/
  └── layout.tsx          # Shared layout
  └── page.tsx            # Home page with product list

components/
  ├── product-list.tsx    # Product table component
  ├── create-product-form.tsx
  ├── edit-product-form.tsx
  └── ui/                 # ShadCN UI components

http/
  └── products.ts         # All HTTP requests related to products

schema/
  └── product.ts          # Zod schemas for product forms

lib/
  ├── api-endpoint.ts     # Centralized endpoint constants
  └── api.ts              # Axios instance config

types/
  └── products.type.ts    # TypeScript types for products

middleware.ts             # Auth guard using Next.js Middleware

Routes like /, /product/* are protected using middleware.ts.
If a valid JWT cookie is not present, the user will be redirected to /login.


| Tech                      | Description                                     |
| ------------------------- | ----------------------------------------------- |
| **Next.js 15**            | React framework with App Router & SSR           |
| **@tanstack/react-query** | Data fetching & mutations with caching          |
| **ShadCN UI**             | Beautiful UI components built on Tailwind CSS   |
| **Axios**                 | HTTP client with interceptors for auth handling |
| **Zod**                   | Schema validation with type safety              |
| **React Hook Form**       | Performant form management                      |
| **Next Auth / JWT**       | (Optional) For cookie-based route protection    |

Running with Docker

The project includes a Docker setup with:



Frontend (Next.js)

Run everything with Docker Compose
docker compose up --build