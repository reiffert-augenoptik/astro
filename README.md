# Reiffert Augenoptik Astro Website

![Main Workflow](https://github.com/reiffert-augenoptik/astro/actions/workflows/main.yml/badge.svg)
![Version](https://img.shields.io/github/package-json/v/reiffert-augenoptik/astro)

## Usage

### Requirements

- [Node.js v24](https://nodejs.org/en)

### Setup

```bash
git clone git@github.com:reiffert-augenoptik/astro.git
cd astro
npm install
npm run dev
```

### Changing business details

Some of the business details (e.g. name, adress or opening hours) are maintained centrally in the [`app.config.ts`](/app.config.ts) file. When edited there, they will update across the website.

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

## Quality checks

GitHub actions will perform quality checks like linting and formatting before building the page. You can manually perform these checks by running:

```bash
npm run check
```

If the formatting check (prettier) fails, you can automatically format all files using:

```bash
npm run format
```

## Get the built output

Any successful pipeline run on the main branch will build the current version of the website to as well as deploy it to https://reiffert-augenoptik.github.io/astro/.

To get the built artifact, navigate to https://github.com/reiffert-augenoptik/astro/actions/workflows/main.yml,
