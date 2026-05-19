---
name: smart-decks
description: Creates, improves, plans, and QA-checks professional PPTX and HTML slide decks from notes, research, PDFs, tables, meeting notes, outlines, or existing presentations. Use for executive decks, strategy decks, proposal decks, research reports, consulting-style diagrams, MBB-level business visuals, slide schemas, slide plans, and rendered slide deliverables.
metadata:
  short-description: Plan and render professional PPTX/HTML decks
---

# SmartDecks

Use SmartDecks to turn rough information into structured, polished slide deliverables.

SmartDecks can produce:
- Deck briefs and storylines
- `slide_plan` schemas
- PPTX decks
- HTML slide decks
- Data charts, consulting diagrams, icon systems, and comparison exhibits
- PDF or screenshot previews when useful
- Visual QA findings and fixes

## Default Behavior

Default to delivering the final artifact, not just a plan.

If the request is small or clear, proceed directly:
`input -> deck brief -> slide_plan -> render -> QA -> final files`.

For high-stakes, ambiguous, or long decks, show a compact storyline or slide plan first, then render after alignment. Do not expose internal schemas unless the user asks for them or they help with review.

## Core Rules

- One slide, one message.
- Use action titles, not topic labels.
- Prefer charts, diagrams, tables, icons, logos, and structured exhibits over generic cards.
- Never add decorative illustrations, flowers, leaves, ornaments, abstract line art, or filler icons just to make a slide look designed. Every visual asset must explain content, label structure, identify an entity, show flow, or encode data.
- Do not default to boxes/cards for every slide. Each slide must choose a visual role: chart, data table, process, matrix, system map, timeline, icon grid, hero message, or appendix.
- Include source footers on data or externally sourced slides.
- Keep a consistent visual system across the deck.
- Use the user's existing template, brand, or prior deck style when provided.
- Avoid copying logos, exact layouts, proprietary trade dress, or firm-specific branding from consulting firms.
- Make the output useful first, beautiful second.
- Always run final slide QA.

## Workflow

1. Understand the brief: objective, audience, use case, output format, tone, constraints, sources, and slide count.
2. Create the storyline: sections, argument flow, and key decisions.
3. Create a slide plan: action title, message, exhibit type, content blocks, sources, and visual direction for each slide.
4. Select a rendering path: PPTX, HTML, both, or schema-only.
5. Choose a template from the curated pack or from a user-provided template.
6. Render the deck.
7. Inspect the rendered output and fix overflow, overlap, weak hierarchy, missing sources, and inconsistent styling.

## When To Read References

- Overall process: `references/workflow.md`
- Story structures: `references/storyline-patterns.md`
- Slide archetypes: `references/slide-patterns.md`
- Exhibit selection: `references/exhibit-selector.md`
- Chart and data grammar: `references/chart-grammar.md`
- Icons, logos, and visual assets: `references/visual-assets.md`
- Curated visual templates: `references/template-pack.md`
- Template selection flow and sample previews: `references/template-selection.md`
- Consulting-style diagrams and line-art prompts: `references/consulting-diagrams.md`
- PPTX creation/editing: `references/pptx-rendering.md`
- HTML slide creation: `references/html-rendering.md`
- Final review: `references/qa-checklist.md`

## Output Modes

- `schema`: Return `deck_brief` and/or `slide_plan`.
- `pptx`: Create or edit a PowerPoint deck.
- `html`: Create a browser-viewable HTML slide deck.
- `both`: Use the same `slide_plan` to render PPTX and HTML when practical.

If the user says "make slides", "deck", "PowerPoint", or "PPT", default to PPTX. If the user asks for HTML, browser slides, template previews, or highly visual web-native output, default to HTML.

## Template Selection Mode

If the user asks to see templates, design candidates, samples, or "which style should I use", do not ask them to remember template names.

Show a concise template list using professional design-language names, with:
- a stable number
- best use case
- visual traits
- 2-3 sample slide concepts
- when not to use it

If the user asks for visual samples, create a small HTML gallery or preview deck with 2-3 sample slides per design system, then let the user choose.

Always number template lists. Accept later references like "1番", "No. 3", "template 5", or "5で" as template selection.

Recommended user flow:
1. User invokes `$smart-decks`.
2. User asks for template/design list.
3. SmartDecks shows design systems and/or a visual preview gallery.
4. User provides source information.
5. User chooses a design system or says "choose for me".
6. SmartDecks renders the final PPTX/HTML and runs QA.

## Intermediate Schemas

Use `schemas/deck_brief.schema.json` and `schemas/slide_plan.schema.json` when a stable plan is useful, when multiple renderers are involved, or when the user asks for reusable structure.

## Visual Defaults

For business, strategy, executive, proposal, policy, or research decks, default to `Executive Analytical Minimalism` unless the user provides a better template.

For diagrams using the user's preferred style, default to `Vector Consulting Linework`: white background, clean thin black outlines, limited palette, neon pistachio green accent, professional vector look, friendly high-end tech corporate tone.
