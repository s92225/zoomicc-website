# Flow2 Website

Static website for Flow2. The deployed pages remain plain HTML, CSS, and JavaScript.

## Hermes OAuth information pages

The owner-operated personal-use Google integration has a separate public overview,
privacy policy, and terms. These pages do not implement OAuth or collect Google data:

- `https://flow2.xyz/hermes/`
- `https://flow2.xyz/hermes/privacy`
- `https://flow2.xyz/hermes/terms`

Source is in `hermes/`; Vercel's existing `cleanUrls` setting serves the legal pages
without `.html`. They use their own stylesheet and no external scripts or fonts.
Keep the operator's actual AI providers, data handling, and retention configuration
consistent with the privacy disclosure. These pages are not a runtime security audit
or a representation that Google has verified the integration.

The Google Auth Platform branding links use these three URLs and the authorized
domain `flow2.xyz`. Changing the Audience publishing status is separate from changing
the website or from completing Google's brand/scope verification. Reauthorize the
existing Hermes client after switching out of Testing; do not replace the OAuth client
or publish credentials in this repository.

## Shared chrome

Navigation and footer are generated at build time from:

- `partials/nav.html`
- `partials/footer.html`
- `scripts/build-partials.js`

Run this after changing shared nav/footer content:

```bash
npm run build
```

The script updates these rendered HTML files in place:

- `index-hero-scroll-prototype.html`
- `index.html`
- `pricing.html`
- `automation-blueprints.html`

Page-specific layouts and interactions stay inside each HTML file. Shared tokens, nav, footer, reveal behavior, and mobile menu behavior live in:

- `assets/site.css`
- `assets/site.js`
