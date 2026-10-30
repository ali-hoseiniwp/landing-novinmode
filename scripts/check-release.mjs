import assert from 'node:assert/strict';

const baseUrl = new URL(process.argv[2] || 'http://localhost:3101');
const response = await fetch(baseUrl);
assert.equal(response.status, 200, 'Homepage must return HTTP 200');

const expectedHeaders = {
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
};
for (const [name, value] of Object.entries(expectedHeaders)) {
  assert.equal(response.headers.get(name), value, `Missing security header: ${name}`);
}
assert.equal(response.headers.get('x-powered-by'), null);
const policy = response.headers.get('content-security-policy') || '';
for (const directive of ["base-uri 'self'", "object-src 'none'", "frame-ancestors 'self'"]) {
  assert.ok(policy.includes(directive), `Missing CSP directive: ${directive}`);
}

const html = await response.text();
assert.match(html, /<html[^>]*lang="fa"[^>]*dir="rtl"/);
const socialLinks = [...html.matchAll(/<a\b[^>]*class="social-link [^"]*"[^>]*>/g)];
assert.equal(socialLinks.length, 7, 'All seven store/social links must remain available');
for (const [anchor] of socialLinks) {
  assert.match(anchor, /target="_blank"/);
  assert.match(anchor, /rel="noopener noreferrer"/);
}
assert.ok(html.includes('http://cafebazaar.ir/app/?id=app.shop.novinmod&amp;ref=share'), 'Preserve the chosen app download URL');
assert.ok(html.includes('https://tarhiva.com/services/web-design'), 'Preserve the copyright destination');
assert.ok(html.includes('href="tel:09153042198"'), 'Preserve the telephone action');
assert.ok(html.includes('https://www.google.com/maps/search/'), 'Preserve the map action');

const assets = new Set(['/fonts/Vazirmatn-Variable.woff2']);
for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]+\.(?:png|webp|svg|ico|woff2|ttf|css|js))"/g)) {
  assets.add(asset);
}
for (const asset of assets) {
  const result = await fetch(new URL(asset, baseUrl));
  assert.equal(result.status, 200, `Asset must load: ${asset}`);
  const bytes = Buffer.from(await result.arrayBuffer());
  assert.ok(bytes.length > 0, `Asset must not be empty: ${asset}`);
  if (asset.endsWith('.woff2')) assert.equal(bytes.subarray(0, 4).toString(), 'wOF2');
  if (asset.endsWith('.css')) {
    for (const [, dependency] of bytes.toString().matchAll(/url\(["']?(\/(?!\/)[^\s)"']+)["']?\)/g)) {
      assets.add(dependency);
    }
  }
}

for (const path of ['/release-check-missing-page', '/.env', '/package.json']) {
  const missing = await fetch(new URL(path, baseUrl));
  assert.equal(missing.status, 404, `Private files and unknown routes must not be served: ${path}`);
}
console.log(`Release checks passed: headers, Persian RTL, links, ${assets.size} assets, font, and 404.`);
