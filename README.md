# Vue API example

A Vue 3 application for browsing API-backed posts and users, built with Vuetify, Vue Router, Vuex, and Vite. This is a learning project, not a hosted production service.

## Run locally

Requires Node.js 22.12 or newer.

```sh
cp .env.example .env
npm ci
npm run dev
```

`VITE_API_BASE_URL` selects the API endpoint. The default example uses JSONPlaceholder; editing routes need an API that supports writes. Run `npm run build` and `npm audit --audit-level=high` before publishing changes.

No license is granted in this repository.
