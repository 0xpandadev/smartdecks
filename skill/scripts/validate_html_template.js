#!/usr/bin/env node
const fs = require("fs");

const [file, templateArg] = process.argv.slice(2);
if (!file || !templateArg) {
  console.error("Usage: node validate_html_template.js <deck.html> <template-name-or-number>");
  process.exit(2);
}

const html = fs.readFileSync(file, "utf8");
const normalizedTemplate = String(templateArg).toLowerCase();
const errors = [];

function count(pattern) {
  const matches = html.match(pattern);
  return matches ? matches.length : 0;
}

function has(pattern) {
  return pattern.test(html);
}

if (normalizedTemplate === "3" || normalizedTemplate.includes("evidence-grid")) {
  const requiredSignals = [
    [/Evidence Grid Precision|evidence-grid-precision|data-template=["']evidence-grid-precision["']/i, "Missing Evidence Grid Precision identity marker"],
    [/hairline|ledger|evidence-cell|evidence-grid|system-node|kpi-block|timeline-rail|relation-line|rule-x|rule-y|content-grid|metric-grid|data-role=/i, "Missing evidence/grid component signals"],
  ];

  for (const [pattern, message] of requiredSignals) {
    if (!has(pattern)) errors.push(message);
  }

  const forbidden = [
    [/box-shadow\s*:\s*[^;]*(?:\d+px\s+\d+px|var\(--shadow\))/i, "Chunky drop shadows are not allowed in Evidence Grid Precision"],
    [/border-radius\s*:\s*(?:[3-9]|\d{2,})px/i, "Rounded major modules are not allowed in Evidence Grid Precision"],
    [/\b(?:pill|capsule|bubble|brutal)\b|class=["'][^"']*\bsoft\b/i, "Soft/capsule/brutalist component language is not allowed in Evidence Grid Precision"],
    [/--(?:mint|sky|pink|lime|cream|orange|green|danger)\s*:/i, "Pastel multi-color palette detected; Evidence Grid Precision should use one anchor color"],
  ];

  for (const [pattern, message] of forbidden) {
    if (has(pattern)) errors.push(message);
  }

  if (count(/\bclass=["'][^"']*\bcard\b/gi) > 4) {
    errors.push("Repeated generic card layout detected; use evidence cells, ledgers, charts, matrices, or system maps instead");
  }

  if (count(/\bclass=["'][^"']*\bpill\b/gi) > 0) {
    errors.push("Pill-heavy UI detected; Evidence Grid Precision uses labels, ledger rows, and evidence cells instead");
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`OK: ${file} matches ${templateArg}`);
