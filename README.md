# Sumukh Gadavilli — Product, Design & Play

**[Explore the portfolio](https://eskstrom.github.io/)** · [All projects](PROJECTS.md) · [LinkedIn](https://www.linkedin.com/in/sumukh-gadavilli/)

A portfolio of healthcare workflows, product and service design, new feature concepts, and tools worth playing with. Six selected projects lead into a complete collection organized by category.

## Start with the work

| Project | What to explore |
| --- | --- |
| [AI Workflow Review](https://eskstrom.github.io/projects/ai-workflow-review/) | Evidence, confirmation, and recovery in healthcare automation |
| [Moment Comments](https://eskstrom.github.io/projects/moment-comments/) | A feature concept connecting comments to video moments |
| [Watch & Unlock](https://eskstrom.github.io/projects/watch-and-unlock/) | Optional engagement and a 28-screen wireframe prototype |
| [CMU Court Reservations](https://eskstrom.github.io/projects/cmu-court-reservations/) | Mobile booking and a smartwatch companion |
| [FastMail Kiosk](https://eskstrom.github.io/projects/fastmail-kiosk/) | Guided shipping, clear estimates, and recovery |
| [Con Alma Partnerships](https://eskstrom.github.io/projects/con-alma/) | A service blueprint and ecosystem maps |

## Repository structure

```text
src/
  site.mjs       Identity and categories
  projects.mjs   Project catalog and case-study content
  assets/        Styles, behavior, favicon, and public project images
scripts/         Build, link checks, and local preview
docs/            Generated GitHub Pages output; published from main /docs
notes/           Maintenance, references, and audit results
PROJECTS.md      Generated complete project index
```

Original design artifacts remain in [figma-portfolio-checkpoint](https://github.com/Eskstrom/figma-portfolio-checkpoint). Independently runnable projects keep their own repositories. The healthcare case study links to its public source.

## Update and preview

Requires Node.js 20 or newer. No application dependencies need installing.

```sh
npm run build
npm run check
npm run preview
```

Edit `src/projects.mjs` for content and `src/assets/styles.css` for styling. Rebuild, verify, and commit generated `docs/` output with the source. Preview at `http://127.0.0.1:4173`. The root `index.html` redirects to `docs/` for local compatibility; GitHub Pages serves `docs/` directly.

The site remains readable without JavaScript; JavaScript adds category filtering. Public images are hosted locally. Fonts fall back to system fonts if the external service is unavailable.

Every project displays its artifact status. Concepts are proposals; implementations contain source code. Neither implies validated outcomes. Healthcare visuals use synthetic information and illustrative metrics.

See [repository organization](notes/REPOSITORY-ORGANIZATION.md) and [sanity-check report](notes/PROJECT-AUDIT.md).

<!-- portfolio-future-plans:start -->
## Future plans and PRD direction

*Planning review: 24 September 2026. These are proposed next steps, not completed work or measured outcomes.*

**Priority recommendation:** Maintain the canonical portfolio.

Use four to six selected cases to present a coherent healthcare, AI and growth narrative.

### Next scope

- [ ] Lead with healthcare workflow review and add shareable AI product/evaluation evidence when ready.
- [ ] Select one growth story; move unimplemented concepts into a secondary library.
- [ ] Before retiring a linked repo, update src/projects.mjs and the project index, rebuild generated pages, and check links.

### Validation and decision criteria

Run the existing build and link checks when changing site content. A reader should be able to identify the user problem, personal contribution, product decision, evidence and next question for each featured case.
<!-- portfolio-future-plans:end -->
