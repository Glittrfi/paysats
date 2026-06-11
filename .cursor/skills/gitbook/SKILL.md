---
name: gitbook
description: >-
  Edit PaySats GitBook docs in docs/. Use when changing GitBook content,
  SUMMARY.md, welcome.md, GitBook blocks, or .gitbook.yaml. Follow official
  GitBook skill at https://gitbook.com/docs/skill.md
---

# PaySats GitBook docs

Read the official GitBook skill first: https://gitbook.com/docs/skill.md

Query it dynamically: `GET https://gitbook.com/docs/skill.md?ask=<question>`

## This repo layout

All GitBook content lives under `docs/`:

```
docs/
  .gitbook.yaml          # structure.readme points to welcome.md (not README.md)
  .gitbook/vars.yaml     # space.vars.* expressions
  SUMMARY.md             # sidebar TOC — read this before structural edits
  welcome.md             # homepage: "Welcome to PaySats" (first page)
  introduction/
  integrations/
  getting-started/
  developers/
  reference/
```

## PaySats conventions

* **Homepage:** `docs/welcome.md` — title `# Welcome to PaySats`. Do **not** add `docs/README.md`.
* **First nav item:** `* [Welcome to PaySats](welcome.md)` in `SUMMARY.md`.
* **Developer hub:** `docs/developers/overview.md` (not `developers/README.md`).
* **No em dashes** in copy; use colons, commas, or rephrase.
* **Product framing:** BNB Chain primitives (DCA, borrowing, bank settlement). Lightning/Tether detail stays in `integrations/tether-lightning.md`.
* **Live vs roadmap:** Only bank settlement (IDR) is live; label DCA, borrowing, x402, and new markets as roadmap/planned.

## Before editing

1. Read `docs/SUMMARY.md` for nav hierarchy.
2. Read `docs/.gitbook.yaml` for readme path and redirects.
3. Use relative links: `[text](introduction/primitives.md)`.
4. Space variables: `<code class="expression">space.vars.support_email</code>` from `docs/.gitbook/vars.yaml`.

## Common GitBook blocks

* `{% hint style="info|warning|danger|success" %}`
* `{% stepper %}` / `{% step %}`
* `{% tabs %}` / `{% tab title="..." %}`
* `<table data-view="cards">` for nav cards
* `{% updates format="full" %}` in changelog

## After structural changes

* Update `SUMMARY.md` and `.gitbook.yaml` redirects if pages move.
* Do not reference the same markdown file twice in `SUMMARY.md`.
