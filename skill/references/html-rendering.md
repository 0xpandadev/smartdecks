# HTML Rendering

Use HTML when the user asks for browser slides, web-native decks, visual prototypes, template previews, or highly designed one-page-per-slide output.

## Template Selection

If the user names a template, use it.

If not:
- Business/executive default: `Executive Analytical Minimalism`
- Strong title/section moments: `Executive Analytical Minimalism Dark`
- Transformation/policy/AI report: `Strategic Report Neo-Corporate`
- AI/workflow diagram: `Vector Consulting Linework`
- Product/storytelling: `Analog Editorial Collage`
- Structured modern business: `Pastel Neo-Brutalism`
- Tech/future: `Soft Modular Neo-Brutalism`
- Calm research/education: `Botanical Editorial Classicism`

## Beautiful HTML Templates

When using `zarazhangrui/beautiful-html-templates`:
- Use only the internal aliases behind Analog Editorial Collage, Pastel Neo-Brutalism, Soft Modular Neo-Brutalism, or Botanical Editorial Classicism by default.
- Read the template's structure before editing.
- Keep its design system intact.
- Replace content and imagery to match the user's brief.
- Do not mix multiple template styles in one deck unless intentionally making section variants.

## HTML Deck Rules

- Make slides 16:9.
- Use stable dimensions and responsive constraints.
- Avoid text overflow at common desktop and mobile viewport widths.
- Use real or generated visual assets where the deck needs imagery.
- Use SVG/HTML/CSS diagrams for crisp line art when practical.
- Use CSS/SVG charts, icon rows, logo tiles, matrices, and process diagrams; do not rely only on cards.
- Use browser screenshots for QA.
- Ensure every slide fits in a 16:9 frame without vertical scroll or clipped text.

## QA

Open the HTML in a browser and inspect:
- First slide
- A dense text slide
- A chart/diagram slide
- Last slide

Check for clipping, overlap, missing fonts, broken assets, and inconsistent spacing.
