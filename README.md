# 🧭 Next.js 15 Task Management App

This is a modern **Task Management App** built with [Next.js 15](https://nextjs.org), utilizing **SSR**, **React Query (TanStack Query)** for data mutation/fetching, **ShadCN UI** for beautiful components, and a structured **HTTP service layer** for API handling.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install

2. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Then open http://localhost:3000 in your browser to view the app.

Features
✅ Built with Next.js 15 App Router

✅ Uses Server-Side Rendering (SSR) for authenticated task data

✅ API calls handled via a clean HTTP service layer (/http)

✅ State/data management using @tanstack/react-query

✅ Beautiful and accessible components via ShadCN UI

✅ Modular structure: components/, schema/, lib/, types/, http/, etc.

✅ Form validation with Zod + React Hook Form

✅ Optimistic UI, loading states, and toast notifications

✅ Middleware-based route protection

🧱 Project Structure
app/
  └── layout.tsx         # Shared layout
  └── page.tsx           # Home page with task list

components/
  ├── task-list.tsx      # Task table component
  ├── create-task-form.tsx
  ├── edit-task-form.tsx
  └── ui/                # ShadCN UI components

http/
  └── tasks.ts           # All HTTP requests related to tasks

schema/
  └── task.ts            # Zod schemas for task forms

lib/
  ├── api-endpoint.ts    # Centralized endpoint constants
  └── api.ts             # Axios instance config

types/
  └── tasks.type.ts      # TypeScript types for tasks

middleware.ts            # Auth guard using Next.js Middleware

🧪 Tech Stack
Tech	Description
Next.js 15	React framework with App Router, SSR, routing
@tanstack/react-query	Data fetching & mutation hooks
ShadCN UI	Beautiful UI components with Tailwind CSS
Axios	HTTP client with interceptors
Zod	Schema validation with typesafety
React Hook Form	Easy and performant form management
Next Auth / JWT	(Optional) For cookie-based route protection

🛡 Middleware Protection
Routes like /, /task/* are protected using middleware.ts. If a valid JWT cookie is not present, the user will be redirected to /login.

