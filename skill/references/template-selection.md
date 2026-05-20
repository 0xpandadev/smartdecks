# Template Selection Flow

Users should not need to memorize template names. Convert natural language into a design system.

Important: template numbers are visual and information-architecture systems, not fixed deck categories. Do not bind a template to a single document type or business scene. Any template can be used for strategy, consulting analysis, business introduction, problem diagnosis, solution recommendation, investor narrative, product story, research report, or executive decision material if its visual grammar fits the content.

## Trigger Phrases

Use this flow when the user says:
- template list
- design candidates
- show styles
- sample templates
- which design should I use
- 2-3 sample slides
- GitHub Pages gallery

## Response Pattern

Give a short list:

| No. | Design system | Information fit | Visual language |
| --- | --- | --- | --- |
| 1 | Executive Analytical Minimalism | Charts, comparisons, evidence, recommendations | white space, thin rules, restrained accents |
| 2 | Executive Analytical Minimalism Dark | Strong conclusions, section transitions, signal moments | deep navy, high contrast, signal slides |
| 3 | Precision Linework System | Entity maps, milestones, operating facts, structure, location, roles | monochrome, red accent, precise linework |
| 4 | Gradient Grid Editorial | Narrative arcs, concepts, teams, stages, transformation stories | thin grid, soft gradients, bold editorial type |
| 5 | Quantitative Blueprint System | Metrics, forecasts, assumptions, scenarios, resources, economics | blue accent, rings, tables, dashboards |
| 6 | Monochrome Signal System | Crisp arguments, business models, modules, traction, decision paths | black/white, bold icons, compact signal layouts |
| 7 | Strategic Report Neo-Corporate | Multi-option evidence, policy logic, implications | green accent, dense executive structure |
| 8 | Vector Consulting Linework | Workflows, operating models, causal loops, value chains | thin line icons, arrows, pistachio accent |
| 9 | Soft Modular Neo-Brutalism | Modular systems, capability maps, workflow loops | rounded modules, pastel pop, bold borders |
| 10 | Pastel Neo-Brutalism | Bold comparisons, options, business models, launches | chunky borders, energetic blocks |
| 11 | Analog Editorial Collage | Qualitative synthesis, field notes, narrative evidence | paper, annotations, editorial tactility |
| 12 | Botanical Editorial Classicism | Ecosystems, long-horizon arguments, reflective strategy | forest/cream, editorial classicism |

Then ask the user to choose one, or offer to choose based on the material. When recommending a template, explain the fit by information structure, not by deck type.

## Numbered Selection

Always number template lists. Users may later refer to templates by number only.

If the user says:
- "1番で"
- "No. 3"
- "template 5"
- "5で作って"

map the number to the design system above and proceed without asking again unless the request is ambiguous.

When answering template-list requests, include this instruction:

```text
次回からは「3番で」「5番で」のように番号だけ指定できます。
```

## Visual Preview Gallery

When asked for visual samples, create an HTML preview gallery with 2-3 sample slides per design system:
- Title/thesis slide
- Data/chart or diagram slide
- Summary/decision slide

The preview should be lightweight and self-contained so it can be hosted on GitHub Pages.

## GitHub Pages Packaging

For publishing, produce:

```text
smart-decks-site/
  index.html
  assets/
    screenshots/
  examples/
    sample-deck.html
```

Keep the actual skill in:

```text
smart-decks/
  SKILL.md
  references/
  schemas/
  prompts/
  scripts/
```

Use GitHub Pages as a visual catalog and documentation surface, not as the runtime dependency for the skill.
