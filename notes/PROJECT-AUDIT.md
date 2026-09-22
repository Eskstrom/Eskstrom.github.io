# Portfolio sanity check

Reviewed 21 September 2026. Scope: all 26 public repositories, their file inventories and README entry points, the public project catalog, and the redesigned website. Private repositories were not published or incorporated. This is a portfolio/content audit with targeted execution checks, not a complete security or functional audit of every application.

## Fixed in this revamp

- Replaced the portfolio website's private healthcare-repository link with the public case-study source.
- Replaced the site repository README's nonexistent relative project links and literal escaped line-break text.
- Shortened the GitHub profile README and moved the complete catalog into `PROJECTS.md`.
- Added six standalone showcase pages, a 29-project collection, explicit artifact statuses, and four clear categories.
- Created individual overview folders for CMU Courts, FastMail, Con Alma, and Netflix Shuffle in the design repository.
- Preserved the historical checkpoint under `notes/` and rebased its relative links.
- Standardized 16 concept READMEs: status first, design focus, proposed scope, validation targets, and potential implementation. Preserved development prompts in `notes/IMPLEMENTATION-NOTES.md` where present.
- Kept original project URLs, original design artifacts, existing application architecture, and archived status intact.

## Repository coverage

| Repository | Actual artifact type | Audit treatment |
| --- | --- | --- |
| Eskstrom | Profile | Short README and complete linked index |
| Eskstrom.github.io | Website | New source/output structure and complete showcase |
| figma-portfolio-checkpoint | Design artifacts | Project folders, concise index, retained history |
| moment-comments | Visual feature concept | Featured with four-state SVG; no live AI claim |
| seasonal-campaign-launch-readiness | Illustrative case study | Included under operations with hypothetical status |
| agency-lending-operations-case-study | Case study and synthetic demo | Included; nine existing control tests passed |
| enterprise-llm-model-hub | Product documentation | Listed as a case study, not an implemented model platform |
| ai-deployment-command-center | Concept and supporting plans | README normalized; scope and measurement docs linked |
| candidate-search-eval-lab | Concept and supporting plans | README normalized; no completed retrieval benchmark claimed |
| human-approval-workspace | Concept brief | README normalized |
| case-study-evidence-studio | Concept brief | README normalized |
| clinical-feedback-insight-hub | Concept brief | README normalized |
| workflow-exception-navigator | Concept brief | README normalized |
| ai-data-quality-sentinel | Concept brief | README normalized |
| focusflow-ai-planner | Concept brief | README normalized; kept separate from working FocusFlow |
| return-risk-explainer | Concept brief | README normalized; no real return-rate prediction claimed |
| marketplace-discovery-diagnostic | Concept brief | README normalized |
| governance-guardrails-toolkit | Concept brief | README normalized |
| agent-use-case-prioritizer | Concept brief | README normalized |
| eligibility-reconciliation-workbench | Concept brief | README normalized; synthetic-data scope retained |
| referral-loop-simulator | Concept brief | README normalized; non-diagnostic scope retained |
| claritydesk-rag | Concept brief | README normalized; no completed assistant claimed |
| research-orchestra | Workflow design brief | Explicit implementation status |
| opening-explainer | Archived implementation | Retained as archived reference |
| 2048game | Browser implementation | JavaScript syntax check passed; no gameplay regression suite claimed |
| focusflow | Python implementation | Thirteen existing tests passed |

## Verification

- Static-site check: eight HTML pages, 152 local links/assets, all 29 project entries, unique IDs, valid categories, one main heading per page, and image alt text.
- Local Markdown references checked across the 19 edited repositories, including moved historical notes and concept planning notes.
- Browser inspection of the home page and healthcare case study on desktop; all six case-study pages checked at 390px width with no horizontal overflow or failed loaded images.
- All five project filters checked: 29 total, 9 healthcare/operations, 8 product/service design, 3 new features, 9 tools/play. Keyboard Space activation restored all 29 entries.
- Browser console inspection reported no errors or warnings on the checked portfolio page.
- FocusFlow: all 13 existing tests passed after installing its declared Rich dependency in an isolated test environment. No application code changed.
- Lending demo: all 9 existing synthetic-data control tests passed. No application code changed.
- 2048 and portfolio browser JavaScript passed syntax checks.

## Remaining project work

These are pre-existing project limitations, now visible in the showcase rather than presented as completed features:

- CMU: finish mobile cancellation copy/actions and prototype connections; resolve the watch demo date/court ambiguity; verify secondary paths.
- FastMail: complete keyboard, responsive, and physical-kiosk accessibility evaluation. Historical functional checks are not a usability study.
- Con Alma: consolidate the story, verify references, and separate proposals from observed evidence.
- Netflix Shuffle: develop eligibility, controls, empty states, and research rationale.
- Moment Comments: build and test a connected prototype; the exported board is a concept.
- Watch & Unlock: validate viewer comprehension and economics; complete native Figma work and TV directional-focus behavior.
- FocusFlow and 2048 declare MIT in their READMEs but do not contain standalone LICENSE files in the audited public trees. Licensing terms were not changed in this portfolio revamp.

Figma permissions were not changed or verified through a fresh signed-in design session. Public GitHub case-study documentation and exported previews are the accessible fallback.

## Profile settings requiring account access

The available GitHub browser is signed out. Repository pinning is not exposed by the available GitHub GraphQL mutations. The authenticated CLI token also lacks the `user` scope required to edit the public name, bio, and website fields; the attempted profile update was rejected and did not change them.

Suggested profile values: name **Sumukh Gadavilli**; website **https://eskstrom.github.io/**; bio **Product thinking, thoughtful interfaces, and the human side of AI. Healthcare, product design, new features, and tools.**

Suggested pins are recorded in [repository organization](REPOSITORY-ORGANIZATION.md).
