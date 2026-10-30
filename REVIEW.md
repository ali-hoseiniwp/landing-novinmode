# Pre-release review — 2026-10-30

## Scope

Reviewed all application components, both stylesheets, metadata/layout, Next.js and PostCSS configuration, package manifests/lockfile, local asset references, outbound links, and ignored environment files. No application-controlled raw HTML insertion, executable string evaluation, credentials, API handlers, forms, Server Actions, authentication, or browser storage were found.

## Corrections

- Updated Next.js 16.1.6 to 16.4.3 and React/React DOM 19.2.3 to 19.2.9, retaining their major versions. Updated compatible Tailwind 4 tooling and affected indirect dependencies. The initial npm audit reported 8 vulnerable packages (1 critical, 6 high, 1 moderate); the final audit reports 0. This is an advisory-database result, not a guarantee of complete security.
- Added nosniff, same-origin framing, strict cross-origin referrer, restricted browser feature, and minimal CSP headers. The CSP protects base URLs, object embedding, and framing; it does not claim to be a complete script-execution policy. Removed the framework-identification response header.
- Converted the shared backdrop to lossless WebP: 2,805,117 to 1,845,574 bytes (34.2% smaller). Decoded raw pixels were compared and are identical. Updated references in the banner and both stylesheets. The original PNG remains available as source material.
- Removed unused styles for the deleted quality caption and address line break. Existing layout, responsive breakpoints, logo offsets, and reduced-motion behavior were preserved.
- Added `npm run check:release` for repeatable production HTTP regression checks and replaced outdated template setup documentation.

## User edits preserved

The complete `ContentBox.js` and `Copywrite.js` files remained byte-for-byte unchanged during this review, including the Cafe Bazaar app URL, updated address markup, and Tarhiva copyright destination.

## Verification

- Production build completed successfully; homepage remains statically prerendered.
- npm audit: 0 known vulnerabilities across all dependency categories.
- Production HTTP release check passed: homepage, security headers, seven store/social links, app/copyright/telephone/map actions, 18 local assets including stylesheet dependencies, valid WOFF2 font, and 404 responses for unknown routes, /.env, and /package.json.
- Git whitespace check passed.
- ContentBox SHA256: E0BCC665731F78575BDCACEFEAED3D133E7B56BDD598C2B318F16F3305E7EF4C.
- Copywrite SHA256: BE67DFE6473ED9EAF9C18CBF049211BF954F7F82F13B60B494DCA50C80B612B8.

## Boundaries

No production deployment or live-host penetration test was performed. Browser visual QA and JavaScript execution in a real browser were not completed; HTTP/build checks do not establish visual fidelity. Hosting TLS, proxy headers, OS permissions, firewall, and resource limits must be assessed on the actual hosting environment. Do not expose the development server publicly.

Upstream security guidance consulted: https://nextjs.org/blog/nextjs-security-update-october-14-2026
