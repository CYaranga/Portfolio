# Modern React TypeScript SSR Portfolio

A modern Hello World application built with React 18+, TypeScript, and Server-Side Rendering (SSR) using Cloudflare Workers, following current best practices and standards.

## Features

- ✅ **Modern React 18+ with TypeScript** - Type-safe React components using latest patterns
- ✅ **Server-Side Rendering (SSR)** - Initial HTML rendered on the server
- ✅ **Modern React Router** - Using createBrowserRouter and RouterProvider
- ✅ **React Context** - State management with modern context patterns
- ✅ **Custom Hooks** - Reusable logic with custom hooks
- ✅ **Cloudflare Workers** - Deployed on Cloudflare's edge network
- ✅ **Modern CSS** - Clean, responsive design with CSS-in-JS styling
- ✅ **TypeScript Interfaces** - Proper type definitions and interfaces

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout component with navigation
│   └── Navigation.tsx      # Modern navigation component
├── context/
│   └── AppContext.tsx      # React Context for state management
├── hooks/
│   └── useApi.tsx          # Custom hook for API calls
├── pages/
│   ├── Home.tsx           # Home page component
│   └── About.tsx          # About page component
├── types/
│   └── index.ts           # TypeScript interfaces and types
├── App.tsx                # Main app component with RouterProvider
├── routes.tsx             # Modern routing configuration
├── client.tsx             # Client-side hydration entry point
└── index.tsx              # Cloudflare Worker with SSR implementation
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit `http://localhost:8787` to see the application.

## Available Routes

- `/` - Home page with Hello World message
- `/about` - About page with technology stack information
- `/api/message` - API endpoint returning "Hello, World!"
- `/api/random` - API endpoint returning a random UUID

## Technology Stack

- **React** - JavaScript library for building user interfaces
- **TypeScript** - JavaScript with static type checking
- **React Router** - Declarative routing for React applications
- **Cloudflare Workers** - Serverless platform for running code at the edge
- **SSR** - Server-Side Rendering for better performance and SEO

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## How It Works

1. **Server-Side Rendering**: The Cloudflare Worker renders React components to HTML on the server
2. **Client-Side Hydration**: JavaScript takes over on the client for interactive routing
3. **Routing**: Simple routing logic handles navigation between pages
4. **API Endpoints**: Additional endpoints provide data for the application

This application demonstrates a minimal but complete SSR setup with React, TypeScript, and Cloudflare Workers.
