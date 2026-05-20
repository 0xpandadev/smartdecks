# HTML Rendering

Use HTML when the user asks for browser slides, web-native decks, visual prototypes, template previews, or highly designed one-page-per-slide output.

## Template Selection

If the user names a template, use it.

If not:
- Charts / comparisons / evidence / recommendations: `Executive Analytical Minimalism`
- Strong conclusions / section transitions / signal moments: `Executive Analytical Minimalism Dark`
- Entity maps / milestones / operating facts / structure: `Precision Linework System`
- Narrative arcs / concepts / stages / transformation stories: `Gradient Grid Editorial`
- Metrics / forecasts / assumptions / scenarios / economics: `Quantitative Blueprint System`
- Crisp argument / business model / modules / decision paths: `Monochrome Signal System`
- Multi-option evidence / policy logic / implications: `Strategic Report Neo-Corporate`
- Workflows / operating models / causal loops / value chains: `Vector Consulting Linework`
- Qualitative synthesis / field notes / narrative evidence: `Analog Editorial Collage`
- Bold comparisons / options / business models / launches: `Pastel Neo-Brutalism`
- Modular systems / capability maps / workflow loops: `Soft Modular Neo-Brutalism`
- Ecosystems / long-horizon arguments / reflective strategy: `Botanical Editorial Classicism`

These are not fixed use cases. Choose by the dominant information pattern and visual grammar, not by whether the deck is a proposal, pitch, company overview, or consulting analysis.

## Beautiful HTML Templates

When using `zarazhangrui/beautiful-html-templates`:
- Use only the internal aliases behind Analog Editorial Collage, Pastel Neo-Brutalism, Soft Modular Neo-Brutalism, or Botanical Editorial Classicism when the user asks for those imported visual directions.
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
- Do not add decorative SVGs or images. Every CSS/SVG illustration must be a labeled chart, diagram, icon map, logo map, process, or content-relevant visual explanation.
- Use browser screenshots for QA.
- Ensure every slide fits in a 16:9 frame without vertical scroll or clipped text.

## QA

Open the HTML in a browser and inspect:
- First slide
- A dense text slide
- A chart/diagram slide
- Last slide

Check for clipping, overlap, missing fonts, broken assets, and inconsistent spacing.
