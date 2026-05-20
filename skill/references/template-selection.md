# Template Selection Flow

Users should not need to memorize template names. Convert natural language into a design system.

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

| No. | Design system | Use when | Visual language |
| --- | --- | --- | --- |
| 1 | Executive Analytical Minimalism | Executive analysis, charts, strategy | white space, thin rules, restrained accents |
| 2 | Executive Analytical Minimalism Dark | Covers, section breaks, big conclusions | deep navy, high contrast, signal slides |
| 3 | Corporate Linework Profile | Company profile, recruiting, culture, office/history decks | monochrome, red accent, isometric linework |
| 4 | Gradient Editorial Proposal | Project proposals, creative strategy, team/story decks | thin grid, soft gradients, bold lowercase type |
| 5 | Financial Blueprint Analytics | Finance, investment, forecasts, fundraising plans | blue accent, donut charts, tables, dashboards |
| 6 | Monochrome Pitch System | Startup pitch, product/service/business model decks | black/white, bold icons, compact pitch layouts |
| 7 | Strategic Report Neo-Corporate | Transformation, policy, AI strategy | green accent, dense executive structure |
| 8 | Vector Consulting Linework | Workflows, operating models, AI diagrams | thin line icons, arrows, pistachio accent |
| 9 | Soft Modular Neo-Brutalism | AI/product/web-native explainers | rounded modules, pastel pop, bold borders |
| 10 | Pastel Neo-Brutalism | Startup/product/business pitch | chunky borders, energetic blocks |
| 11 | Analog Editorial Collage | Essays, qualitative research, workshops | paper, annotations, editorial tactility |
| 12 | Botanical Editorial Classicism | Calm research, education, culture | forest/cream, editorial classicism |

Then ask the user to choose one, or offer to choose based on the material.

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
