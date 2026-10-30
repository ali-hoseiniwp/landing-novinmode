# Novin Mode social storefront

A Persian RTL landing page built with Next.js App Router and React Server Components. Social links, store contact details, and local fonts/images render statically. There are no application API endpoints, forms, authentication, database access, or Server Actions.

## Development

Use Node.js 20.9 or newer (validated with Node.js 24.18.0).

```sh
npm ci
npm run dev
```

## Production verification

```sh
npm audit
npm run build
npm run start -- --port 3101
```

In another terminal:

```sh
npm run check:release
```

An alternative server URL can be supplied with `npm run check:release -- http://localhost:3000`.
The release check validates the homepage, security response headers, external-link protections, the selected app download and copyright destinations, local assets and font signatures, and private-file/unknown-route 404 responses.

Deploy using the production Next.js server (`npm start`), not the development server. Security headers are defined in `next.config.mjs`; a reverse proxy must preserve them. If deployed through a static-file host instead, configure equivalent headers at that host. Font files are local; Vazirmatn's license is included under `public/fonts`.

See `REVIEW.md` for the security/performance review and its verification limits.
