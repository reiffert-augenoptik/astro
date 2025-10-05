# Reiffert Augenoptik Astro Website

![Main Workflow](https://github.com/reiffert-augenoptik/astro/actions/workflows/main.yml/badge.svg)

## Usage

### Requirements

- [Node.js v24](https://nodejs.org/en)

### Setup

```bash
git clone git@github.com:reiffert-augenoptik/astro.git
cd astro
npm run dev
```

### Changing business details

Some of the business details (e.g. name, adress or opening hours) are maintained centrally in the [`app.config.ts`](/app.config.ts) file. When edited there, they will update across the website.

## TODO

- Basically everything
- Sitemap integration

## Editing

### Markdown frontmatter

Markdown files support what is called a `frontmatter` section. Frontmatter is written in `yaml` syntax, located at the top of the document and annotated with two lines of `---`:

```md
---
# Frontmatter section
---

Markdown content
```

Astro supports a couple of [built-in frontmatter attributes](https://docs.astro.build/en/basics/layouts/#markdown-layouts). On top of that, this page supports additional frontmatter attributes. They are defined in [`src/types.d.ts`](src/types.d.ts).
