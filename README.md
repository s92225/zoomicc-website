# Flow2 Website

Static website for Flow2. The deployed pages remain plain HTML, CSS, and JavaScript.

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
