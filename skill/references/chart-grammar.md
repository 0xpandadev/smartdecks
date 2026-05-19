# Chart and Data Grammar

Use charts whenever the source material contains quantities, timing, rankings, comparisons, implied magnitude, or a directional claim.

## Chart Selection

- Trend: line chart or indexed line
- Before/after: paired bar or slope chart
- Ranking: sorted horizontal bar
- Composition: stacked bar
- Change bridge: waterfall
- Portfolio: bubble chart
- Scoring: heatmap or scorecard
- Capability maturity: maturity curve
- Task automation suitability: scored bar chart or heatmap
- Timing and sequence: roadmap or swimlane

## Business Chart Rules

- Title states the insight, not the metric name.
- Sort bars by meaning, not arbitrary order.
- Use one highlight color for the key series.
- Put units in labels or subtitles.
- Prefer direct labels over legends.
- Add source and assumptions in footer.
- Never invent precise data. If data is qualitative, label it as "illustrative" or "directional".

## Directional / Qualitative Charts

When the article has no numeric dataset, create clearly labeled directional exhibits:
- `High / medium / low` heatmap
- `Relative exposure` bar chart
- `Task suitability` scorecard
- `Impact vs readiness` matrix
- `Now / next / later` roadmap

Mark these as:
`Source: SmartDecks synthesis based on provided article`

## HTML Implementation Notes

For HTML slides:
- Prefer CSS/SVG charts for crisp rendering.
- Keep chart labels inside the slide boundary.
- Use fixed chart container dimensions.
- Test chart-heavy slides at 16:9 and common browser widths.

For PPTX slides:
- Prefer editable charts or vector shapes when practical.
- Use embedded images only when fidelity matters more than editability.
