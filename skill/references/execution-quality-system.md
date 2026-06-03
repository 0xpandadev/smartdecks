# Execution Quality System

Use this reference for every SmartDecks output, regardless of template.

This system converts source material into a high-quality deck by controlling five things:

1. Information intent
2. Layout role
3. Component role
4. Visual asset role
5. Final QA

Do not copy code, full templates, exact page layouts, or implementation-specific registries from third-party repositories. Absorb only general, non-copyrightable ideas: slot-first image planning, semantic components, strict QA, readable typography, and consistent layout systems.

## Universal Workflow

Before rendering each slide:

1. Write the action title.
2. Identify the one message.
3. Select the layout role.
4. Select the primary exhibit.
5. Select components.
6. Decide whether a generated visual is needed.
7. Bind visual assets to aspect-ratio slots.
8. Render.
9. QA and fix.

## Layout Roles

Every slide should use one of these roles. The selected role goes into the slide plan.

| Role | Use for | Primary exhibit |
|---|---|---|
| Cover | opening thesis, title, major framing | title + contextual visual or signal block |
| Executive Summary | 3-5 conclusions | message cards or short evidence rows |
| Section Divider | transition | one statement or big number |
| Thesis + Evidence | claim plus proof | chart, table, image, quote, or source snippet |
| Data Chart | trend, comparison, composition | chart with direct labels |
| KPI Board | metrics and interpretation | KPI tiles, waterfall, ledger, or ring chart |
| Comparison | before/after, A/B, options | parallel columns, scorecard, or table |
| Matrix | prioritization or segmentation | 2x2, heatmap, score grid |
| Process Flow | sequence or workflow | arrows, steps, swimlanes |
| Timeline | history, roadmap, milestones | horizontal/vertical rail |
| System Map | actors, tools, dependencies | nodes and labeled relationships |
| Loop Diagram | feedback or growth loop | circular/recursive flow |
| Evidence Wall | screenshots, artifacts, examples | aligned image/source grid |
| Spatial Map | locations, routes, coverage | map or fallback relation diagram |
| Recommendation | decision, choice, rationale | option summary + next action |
| Appendix | supporting detail | tables, sources, methods |

Rules:

- Do not invent a new layout on every slide.
- Do not use card grids on more than two consecutive slides.
- Do not make a box-only deck.
- For 8+ slides, use at least five layout roles.
- If no role fits, create a variant and state why in the slide plan.

## Component Roles

Use components only when they carry meaning.

| Component | Meaning |
|---|---|
| Action title | conclusion |
| Kicker / meta label | section, source type, or analytical lens |
| Source footer | provenance |
| KPI block | metric + implication |
| Ledger row | financial or operational breakdown |
| Comparison rail | parallel alternatives |
| Timeline rail | sequence |
| Matrix cell | category, priority, or score |
| Flow arrow | causality, handoff, or sequence |
| Swimlane | ownership |
| System node | entity, tool, capability, data source |
| Semantic icon | word replacement or category marker |
| Logo tile | real entity identification |
| Callout | caveat, quote, decision, or interpretation |
| Evidence image | screenshot, artifact, photo, or UI scene |
| Map point | location or route evidence |

Reject decorative components:

- filler icons
- random ornaments
- corner illustrations
- flowers, leaves, vines, or decorative botanical art
- generic abstract line art
- unrelated stock photos
- unlabeled diagrams

## Visual Asset Rules

Every visual asset must pass at least one test:

- It explains structure, flow, hierarchy, causality, comparison, or data.
- It identifies a real entity, tool, place, person, role, risk, or capability.
- It helps the reader understand the action title faster.
- It creates evidence or context that text alone cannot provide.

If it does not pass, remove it.

## Slot-First Image Planning

Never generate or insert an image first and force the slide around it.

1. Pick layout role.
2. Pick visual role.
3. Pick aspect ratio.
4. Pick crop behavior.
5. Write prompt or choose source image.
6. Insert into a stable slot.
7. QA in browser/PPT preview.

Typical slots:

| Slot | Ratio | Use |
|---|---|---|
| Hero strip | 21:9 | evidence image, scene, UI panorama |
| Main proof | 16:10 | screenshot, UI scene, product/workflow |
| Diagram | 16:9 | infographic, flow, system map |
| Small evidence | 4:3 or 3:2 | photo, artifact, example |
| Logo/icon grid | square or fixed tile | entity map |

Use `cover` for context photos and scenes. Use `contain` for screenshots, dense UI, and text-heavy diagrams.

## Generated Visuals

Generated visuals are allowed only when they explain content.

Use generated visuals for:

- documentary context photo
- compact infographic
- workflow or pipeline diagram
- comparison visual
- system relationship visual
- UI situation image
- data poster
- evidence grid

Do not generate:

- full slide images
- fake logos
- decorative borders
- page numbers, headers, or footers
- unreadable UI
- unsupported metrics
- unrelated decorative art

Universal prompt tail:

```text
The image is an embedded slide asset, not a full slide. Do not include a slide title, header, footer, page number, logo, watermark, author credit, decorative border, or frame. Keep text short and readable. Match the deck language. Use the requested aspect ratio exactly. Keep key content inside the central safe area.
```

## Spatial Map Rules

Use maps only when spatial relationships matter.

Good:

- locations
- routes
- coverage gaps
- store/office/campus distribution
- logistics path
- regional concentration

Bad:

- generic network map
- value chain pretending to be geography
- org chart
- abstract ecosystem

For maps:

- Define points and relationships first.
- Explain relationships in text beside the map.
- Provide a static fallback when using interactive maps.
- Disable scroll/drag by default in browser slides unless interaction is the point.
- Do not rely on map decoration; labels and relation meaning must be readable.

## Typography QA

- Body text must remain readable in the intended slide viewport.
- Labels, footnotes, and captions must not become tiny.
- If a title overflows, shorten it first.
- Do not solve overflow by shrinking everything.
- Keep line length reasonable.
- Avoid negative letter spacing.

## Final QA Gate

Reject or fix if:

- slide lacks one clear message
- title is a topic label rather than a conclusion
- exhibit does not support the title
- visual is decorative-only
- chart lacks unit, period, or label
- image slot ratio is wrong
- text overflows or overlaps
- source footer is missing where needed
- template styles are mixed unintentionally
- icons are unexplained
- body/caption text is too small
- slides repeat the same box layout without reason
- five-second takeaway is unclear
