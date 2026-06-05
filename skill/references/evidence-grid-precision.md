# Evidence Grid Precision

Use this reference when the user asks for template 3, strict-grid design, high-contrast analytical HTML slides, product logic, methodology explanation, UI scenes, facts, generated infographics, or evidence-heavy strategy decks.

This is an original SmartDecks design system. It uses general grid-design principles, not third-party code or exact template structures.

## Core Visual Language

- 16:9 slide frame.
- Warm off-white or white canvas.
- Near-black text.
- One vivid anchor color only.
- 12 or 16 column grid.
- Hairline rules.
- Hard rectangular modules.
- Strong left alignment.
- Large negative space.
- Large headings are light; small labels are heavier.
- Images are evidence blocks, not decoration.

Avoid:

- gradients
- shadows
- rounded cards
- glass effects
- decorative textures
- filler illustrations
- fake logos
- generated slide chrome

## Anchor Colors

Use exactly one anchor color per deck.

| Name | Accent | Best for | Text on accent |
|---|---:|---|---|
| Cobalt Evidence | `#1537D3` | AI, product, technology, analysis | white |
| Signal Yellow | `#F2CF22` | consumer, energy, warning, activity | black |
| Frontier Lime | `#B8E339` | emerging themes, ecology, future, frontier tech | black |
| Decision Orange | `#FF6A3D` | urgency, risk, industrial, turnaround | white |

Rules:

- Do not mix anchors.
- Do not use accent as decoration.
- Use accent for hierarchy, decision points, selected cells, or key metrics.

## Layout Roles

Use these roles inside the broader `execution-quality-system.md` workflow.

| Role | Use for |
|---|---|
| Grid Cover | opening thesis with strict metadata and one signal block |
| Thesis + Proof | left claim, right evidence/chart/UI scene |
| Statement Poster | one turning-point sentence |
| KPI Stack | 3-5 facts with hierarchy and interpretation |
| Evidence Matrix | 4-8 examples, screenshots, artifacts, or facts |
| Timeline Axis | sequence, roadmap, adoption path |
| Duo Compare | old/new, A/B, two operating models |
| System Map | entities, workflows, dependencies |
| Loop Diagram | feedback loop or operating cycle |
| Spec Sheet | product, method, benchmark, or technical summary |
| Image Evidence | photo/UI/infographic strip with short interpretation |
| Closing Decision | decision, threshold, next action |

Rules:

- Put the selected role in the slide plan.
- Use at least four roles in decks longer than six slides.
- Do not use evidence matrices repeatedly when a chart, timeline, map, or system diagram is clearer.
- Centering is allowed only for deliberate statement posters.

## Component Grammar

Prefer these components:

- action title
- mono meta label
- source footer
- KPI block
- ledger row
- evidence cell
- relation line
- timeline rail
- system node
- semantic icon
- UI evidence slot
- callout

Component rules:

- Every component must have a semantic role.
- Labels live as real text, not inside decorative geometry.
- Icons must replace or clarify words.
- Images must have captions, labels, or nearby interpretation.

## Image Slots

| Slot | Ratio | Use |
|---|---|---|
| `eg-hero-21x9` | 21:9 | wide proof image, UI panorama, evidence strip |
| `eg-main-16x10` | 16:10 | screenshot, UI scene, product/workflow visual |
| `eg-diagram-16x9` | 16:9 | infographic, flow, relationship map |
| `eg-grid-21x9` | 21:9 | evidence wall image cells |
| `eg-data-16x9` | 16:9 | data poster or metric visual |

Rules:

- Choose slot before image generation.
- Keep important subjects inside the central safe area.
- Use `cover` for context photos and scenes.
- Use `contain` for dense screenshots and text-heavy diagrams.
- Do not place white-background infographics inside grey boxes unless the contrast is intentional and clean.

## Generated Visual Prompts

### Strict Grid Infographic

```text
Create a horizontal strict editorial-grid infographic explaining: [concept/process/relationship].
Use a 12/16 column grid, black/white/gray plus one [accent color], hard rectangles, thin hairline rules, sparse labels, large negative space, and concise [language] text.
No gradients, shadows, rounded corners, 3D, cartoons, fake logos, slide title, page number, footer, border, or watermark.
Aspect ratio: [21:9/16:10/16:9]. Keep key content inside the central safe area.
```

### UI Situation Image

```text
Create a horizontal UI/workspace situation image for: [workflow or product context].
Use a strict analytical interface style: hard rectangular panels, thin rules, sparse labels, black/white/gray plus one [accent color], and medium information density.
Use [language] labels only where necessary. Do not include real brand logos.
No slide chrome, title bar, page number, footer, rounded corners, shadows, gradients, decorative frame, or invented user data.
Aspect ratio: 16:10.
```

### Documentary Context Photo

```text
Create a horizontal editorial documentary photo for: [business/user/work context].
Calm realistic scene, high contrast, low saturation, natural light, large negative space, subject within central safe area.
No AI robots, sci-fi UI, fake logos, watermarks, slide frame, title, page number, or decorative border.
Aspect ratio: [21:9/16:9/16:10].
```

## Spatial Map Use

Evidence Grid Precision may include a spatial map only when location/route/coverage is part of the argument.

If used:

- explain the relationship beside the map
- label points clearly
- provide static fallback
- do not use a map as a decorative background
- do not use map controls unless the output is meant to be interactive HTML

## QA

Before finalizing:

- Does each slide have a selected layout role?
- Is exactly one accent color used?
- Are titles left-aligned unless intentionally poster-like?
- Are small labels readable?
- Does every image have a slot and semantic role?
- Are there no copied third-party layouts or code?
- Are generated images free of slide chrome, logos, page numbers, fake UI clutter, and unsupported claims?
- Does the deck use charts, diagrams, icons, and images where they clarify the message, rather than generic boxes?

## HTML Enforcement

When rendering Evidence Grid Precision as HTML, the output should look structurally different from soft modular, capsule, or neo-brutalist decks.

Required signals:

- page or slide root identifies the template, for example `data-template="evidence-grid-precision"` or a clear internal comment
- hard rectangular modules
- hairline rules
- one accent color only
- visible grid alignment
- at least four layout roles in decks longer than six slides
- evidence cells, data rows, system nodes, charts, or diagrams instead of repeated cards

Forbidden signals:

- `box-shadow` used for chunky card shadows
- `border-radius` above 2px on major modules
- classes or visual concepts named `pill`, `capsule`, `bubble`, `soft`, or `brutal`
- pastel multi-color semantic palette unless the colors encode actual data categories
- repeated `.card` grids as the primary layout
- decorative hero photos without an evidence caption or analytical role

If these forbidden signals appear, the deck is not using Evidence Grid Precision and must be rewritten before delivery.
