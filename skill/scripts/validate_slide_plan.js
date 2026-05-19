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
    for (const key of ["type", "action_title", "message", "exhibit_type"]) {
      if (!slide[key]) errors.push(`Slide ${n}: missing ${key}`);
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
