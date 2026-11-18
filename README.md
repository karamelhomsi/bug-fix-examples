# Bug Fix Examples

Three common React/Next.js/TypeScript bugs with fixes.

## Bugs Fixed

1. **Infinite Loop** - `useEffect` missing dependency → Added dependency array
2. **TypeScript Errors** - Wrong property access → Proper type definitions
3. **API Timeout** - No timeout/retry → `AbortController` + exponential backoff

## Stack
- Next.js 14, TypeScript, Tailwind CSS
- React Hooks, Fetch API, AbortController

## Run Locally
```bash
npm install
npm run dev
```

## What I Learned
- Always specify dependency arrays in useEffect
- Type API responses properly
- Always add timeouts and retries for external APIs