#!/usr/bin/env node
const fs = require("fs");

const file = process.argv[2];
if (!file) {
  console.error("Usage: node validate_slide_plan.js <slide_plan.json>");
  process.exit(2);
}

const plan = JSON.parse(fs.readFileSync(file, "utf8"));
const errors = [];

for (const key of ["deck_title", "audience", "output_format", "template", "slides"]) {
  if (!(key in plan)) errors.push(`Missing top-level field: ${key}`);
}

if (!Array.isArray(plan.slides) || plan.slides.length === 0) {
  errors.push("slides must be a non-empty array");
} else {
  plan.slides.forEach((slide, idx) => {
    const n = slide.slide_number || idx + 1;
    for (const key of ["type", "action_title", "message", "exhibit_type", "insight", "information_pattern", "five_second_takeaway", "so_what"]) {
      if (!slide[key]) errors.push(`Slide ${n}: missing ${key}`);
    }
    if (slide.visual_role === "text_summary" && !["executive_summary", "title", "section", "appendix", "closing"].includes(String(slide.type))) {
      errors.push(`Slide ${n}: text_summary is only allowed for summary, title, section, appendix, or closing slides`);
    }
    if (Array.isArray(slide.semantic_icons) && slide.semantic_icons.length && !slide.visual_direction) {
      errors.push(`Slide ${n}: semantic_icons require visual_direction explaining how they encode meaning`);
    }
    if (slide.action_title && slide.action_title.length < 12) {
      errors.push(`Slide ${n}: action_title looks too short`);
    }
    if (slide.action_title && /^[A-Za-z ]{1,30}$/.test(slide.action_title) && !/[.!?]/.test(slide.action_title)) {
      errors.push(`Slide ${n}: action_title may be a topic label, not a conclusion`);
    }
  });
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`OK: ${plan.slides.length} slides`);
