# Flow2 Website Brand Spec

Source: current Flow2 website repo, primarily `index.html` and `index-hero-scroll-prototype.html`.

## Core Tokens

```css
:root {
  --bg:      oklch(92.9% 0.029 89.6);  /* warm paper, from #efe7d2 */
  --surface: oklch(95.8% 0.026 92.4);  /* bone panel, from #f7f1de */
  --fg:      oklch(19.1% 0.010 97.9);  /* ink, from #15140f */
  --muted:   oklch(44.8% 0.021 84.6);  /* muted ink, from #5a5448 */
  --border:  oklch(86.5% 0.039 89.1);  /* paper-dark, from #ddd2b6 */
  --accent:  oklch(68.8% 0.160 30.4);  /* coral, from #ed6f5c */

  --font-display: "Playfair Display", "Iowan Old Style", Georgia, serif;
  --font-ui: "Inter Tight", "Avenir Next", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
}
```

## Supporting Colors

- Mustard: `oklch(80.9% 0.137 85.1)` from `#e9b94a`
- Olive: `oklch(54.2% 0.064 114.9)` from `#6e7448`
- WhatsApp green: `oklch(51.5% 0.111 156.3)` from `#1f7a4c`

## Layout Posture

- Editorial paper-canvas system with tactile grain, dotted borders, and workflow-map diagrams.
- Display typography uses a serif for large narrative moments; navigation, labels, and cards use tight sans or mono.
- Accent budget is low: coral is for pulse, highlights, selected nodes, and primary narrative emphasis, not full-section fills.
- Cards and panels use thin ink-tinted borders, light translucent bone fills, and restrained shadows.
- Interaction language is product-realistic: sticky nav, language toggle, case tabs, scenario buttons, hover/focus map nodes, and WhatsApp CTA.
