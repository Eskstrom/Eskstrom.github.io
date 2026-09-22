# Repository organization

| Repository | Responsibility | Entry point |
| --- | --- | --- |
| `Eskstrom` | Short profile and complete project index | `README.md` |
| `Eskstrom.github.io` | Website, project presentation, navigation, and styles | `src/projects.mjs` generates `docs/` |
| `figma-portfolio-checkpoint` | Design documentation, public exports, and prototype files | `projects/<project-name>/README.md` |

Independent products, implementations, and concept briefs retain their repositories and URLs. Private work stays outside the public catalog.

## Design folders

The design repository groups `ai-workflow-review`, `watch-and-unlock`, `cmu-court-reservations`, `fastmail-kiosk`, `con-alma`, and `netflix-shuffle` under `projects/`. Moment Comments already has a dedicated repository, so navigation links there instead of duplicating it.

Use `README.md` for an overview, `CASE-STUDY.md` for a substantial narrative, `assets/` for public exports, `stories/` for detailed design stories, and `prototype/` for runnable prototype files. Only create folders when there is real content. Historical working notes live in `notes/`.

Concept-only repositories can legitimately contain one README. Empty source or test folders would imply work that does not exist. Existing application architecture and runnable entry points remain intact.

## Maintaining the catalog

Update `src/projects.mjs`, run `npm run build` and `npm run check`, and synchronize the generated `PROJECTS.md` with the profile repository. Each project has one primary category and a separate maturity status.

The website carries small copies of existing public images for reliable rendering; `src/assets/projects/ATTRIBUTION.md` identifies the original sources.

## Curated GitHub pins

Recommended set: `Eskstrom.github.io`, `figma-portfolio-checkpoint`, `moment-comments`, `agency-lending-operations-case-study`, `focusflow`, and `2048game`.
