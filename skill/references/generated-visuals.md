# Generated Visuals For Slides

Use this reference when the deck would benefit from generated images, concept visuals, infographics, process diagrams, UI situation images, screenshot redesigns, or evidence images.

Generated visuals are allowed only when they help the slide communicate. They are not decoration.

## Decision Rule

Generate or design a visual only if it passes one of these tests:

- It shows a workflow, system, or relationship better than text.
- It turns an abstract concept into a readable diagram.
- It creates evidence/context when no suitable image exists.
- It standardizes a screenshot or UI concept into the deck's visual language.
- It compresses a key metric or comparison.

If it does not pass, do not generate an image.

## Supported Visual Types

| Type | Use for | Typical ratio |
|---|---|---|
| Documentary photo | real-world context, customer, work, place, adoption | 16:9, 16:10, 21:9 |
| Infographic | concept, system, mechanism, market map | 16:9, 16:10 |
| Flow / pipeline | steps, process, transformation, loop | 16:9 |
| Comparison visual | before/after, old/new, option A/B | 16:9 |
| UI situation image | dashboard, workflow, product, workspace | 16:10, 21:9 |
| Data poster | key number, benchmark, signal | 16:9 |
| Evidence grid | screenshots, snippets, examples, artifacts | 21:9, 16:10 |

## Slot-First Workflow

1. Choose slide layout.
2. Choose image slot and aspect ratio.
3. Decide image type.
4. Write a short prompt bound to the slot.
5. Generate image only if the environment supports image generation and the user allows or the task clearly calls for it.
6. Save with semantic name: `{slide-number}-{meaning}.png`.
7. Insert into the planned slot.
8. Run visual QA.

Never generate first and force the slide to fit the image later.

## Codex Image Generation

If Codex has access to GPT-Image, GPT-M, or an equivalent image generation tool, use it as an asset generator for the deck, not as a full-slide generator.

Preferred uses:

- photo-like context images
- compact infographics
- flow or process diagrams
- UI situation images
- evidence grids
- visual metaphors only when they are structurally tied to the argument

If image generation is unavailable, return the exact asset prompts and continue rendering the slide with a placeholder slot or a native HTML/PPTX diagram.

## Universal Prompt Constraints

Append these constraints to generated visual prompts:

```text
The image is an embedded slide asset, not a full slide. Do not include a slide title, header, footer, page number, logo, watermark, author credit, decorative border, or frame. Keep text short and readable. Match the deck language. Use the requested aspect ratio exactly.
```

## Style Mapping

| SmartDecks template | Generated visual direction |
|---|---|
| Executive Analytical Minimalism | clean evidence image, sober infographic, source-friendly chart visual |
| Precision Linework System | thin black line diagram, simple red emphasis, entity/asset/process illustration |
| Evidence Grid Precision | strict-grid infographic, UI situation image, evidence grid, 21:9 hero proof |
| Vector Consulting Linework | professional flat line-art diagram with pistachio accent |
| Quantitative Blueprint System | metric poster, forecast visual, ring/table/assumption diagram |
| Monochrome Signal System | black/white evidence visual, numbered module icon, traction diagram |
| Gradient Grid Editorial | monochrome documentary photo, soft editorial scene, transformation stage image |
| Analog Editorial Collage | documentary photo, paper-note evidence, annotated field material |

## Screenshot Handling

When the user provides a screenshot:

- Preserve it if the screenshot itself is evidence.
- Reframe it into the deck aspect ratio if the image is good but the ratio is wrong.
- Redesign it only when the user asks, the screenshot is too messy, or a conceptual UI scene communicates better.
- Never invent user data, company logos, metrics, or product claims inside a redesigned screenshot.

## QA

Reject or regenerate images that contain:

- fake logos or brand marks
- page numbers or slide chrome
- unreadable labels
- wrong language
- distorted UI
- decorative borders
- unsupported data
- visual details that contradict the slide message
