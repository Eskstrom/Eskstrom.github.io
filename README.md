# Sumukh Gadavilli | UX and product design portfolio

## Featured case study: AI workflow review

**[Making AI output reviewable — read the complete project](projects/ai-workflow-review/README.md)**

Original healthcare workflow interface design by Sumukh, the sole designer, developed through focused testing, shadowing, and collaboration with hospital technology and operations partners. The complete case study includes three research and design stories: evidence review, confirmation clarity, and verification recovery, alongside ten reconstructed screen states.

[![AI workflow review: source evidence and editable output](projects/ai-workflow-review/assets/03-preview.png)](projects/ai-workflow-review/README.md)

[Case study](projects/ai-workflow-review/CASE-STUDY.md) · [Evidence review](projects/ai-workflow-review/stories/01-evidence-review.md) · [Confirmation clarity](projects/ai-workflow-review/stories/02-review-confirmation.md) · [Verification recovery](projects/ai-workflow-review/stories/03-verification-recovery.md) · [Ten-screen gallery](projects/ai-workflow-review/SCREENS.md) · [Figma board](https://www.figma.com/design/w5MWfIM7Y9mNZwHV0AfDWg?node-id=6-2) · [Public SVG board](projects/ai-workflow-review/assets/workflow-review-public.svg)

Public visuals use synthetic records and document illustrations; metrics are illustrative. Original medical-document screenshots are excluded. These are static reconstructions, and Figma retains its own access permissions. Other projects below retain their existing checkpoint status.

Checkpoint: 12 September 2026. This site presents an ongoing refinement of Sumukh's original Figma projects. It is a work log, not a claim that the portfolio is finished.

## Access the checkpoint

- **[Open the checkpoint website](https://eskstrom.github.io/figma-portfolio-checkpoint/)**: browse project status and open each Figma design.
- **[Read the detailed change log](https://github.com/Eskstrom/figma-portfolio-checkpoint#projects-and-changes)**: inspect changes, frame-level links and verification notes.
- **[See where work resumes](https://github.com/Eskstrom/figma-portfolio-checkpoint#resume-order)**: review the next steps.
- **[Return to my GitHub profile](https://github.com/Eskstrom)**: find this checkpoint alongside my other projects.

The website is public and requires no sign-in. Figma files retain their own access permissions: sign in to Figma when prompted, and request access from the owner if needed. This repository documents the designs; it does not contain exported Figma source files. Status remains **checkpoint / work in progress**.

## Projects and changes

### CMU court reservations: mobile
[Original workbook](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space) · [New portfolio page](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-149)

Preserved the original workbook. Created a separate `Portfolio • Product design` page with seven 390 × 844 frames, Inter typography, CMU red primary actions, consistent cards and explicit sample-data language. The flow now separates discovery, slot choice, review, confirmation, management and cancellation. Imported Simple Design System button components. Repaired body text sizing/auto-height and primary/secondary button label width after creation.

| Frame | Link | Checkpoint |
|---|---|---|
| Find a court | [4606:150](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-150) | Populated; visually inspected |
| Choose a time | [4606:151](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-151) | Populated; visually inspected |
| Review booking | [4606:152](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-152) | Populated; full visual QA pending |
| Booking confirmed | [4606:153](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-153) | Populated; full visual QA pending |
| Your bookings | [4606:154](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-154) | Populated; full visual QA pending |
| Cancel booking | [4606:155](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-155) | Populated; full visual QA pending |
| Booking cancelled | [4606:156](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=4606-156) | Partially completed |

The seventh screen was copied from confirmation. Its headline is now “Booking cancelled.” and subtitle “Your sample slot has been released.” The next-steps card still contains confirmation instructions, and its buttons still read “Manage booking” and “Book another court.” Correct these before presentation. Prototype connections, error/empty/loading states, accessibility checks and complete frame-fit review remain outstanding. Dates and court data are illustrative; no live reservation integration exists.

### CMU court reservations: smartwatch companion
[Smartwatch App Prototype](https://www.figma.com/make/RGAbRr2RprARTQoGvNihJw/Smartwatch-App-Prototype)

Figma Make version 3 generated a multi-step companion: sport selection, date, time, review, booking progress, confirmation, booking management and deliberate cancellation. It also reports duplicate prevention, unavailable-slot simulation, ICS export, invitation copying, reset controls and a portfolio explanation panel. Those additional features require separate verification.

**Verified in the browser:** Table Tennis → Today → 9 AM → Review → Confirm → loading → Confirmed → Manage → Cancel → confirmation → Cancelled. Booking count cleared after cancellation.

**Remaining:** test duplicate/recovery paths, export and sharing, keyboard access and narrow viewports. Replace or explicitly label the fixed October 13, 2025 demo date. Review currently identifies “Table 1-4”; select a specific court for an unambiguous reservation. Combine this companion with the mobile redesign in one case study. No live CMU integration or separately published deployment was created.

### FastMail kiosk
[Fast mail Kiosk](https://www.figma.com/make/gc3I9jqgY0XMzbZ0SOaPKp/Fast-mail-Kiosk)

A refinement prompt generated a new version 3 interface with navy/teal styling, Plus Jakarta Sans typography, clearer package handling and an explicit demo payment context. The generated response reports a ten-step journey: Welcome, Address, Dimensions, Weight, Handling, Pickup, Cost, Review, Payment, Confirmation. It reports address validation, itemized estimates, editable review, simulated payment failure/retry, start-over confirmation and sample/reset controls.

**Verified in version 5:** the saved revision renders; empty address validation appears; package, weight, handling, collection and speed choices are required; the estimate updates from $19.99 to $29.99 when speed changes; review editing preserves other selections; simulated payment decline and retry work; the start-over dialog preserves the order when dismissed and clears it when confirmed. Receipt copy now describes a concept handoff and does not promise an email or live tracking. The full journey still needs keyboard, responsive and physical-kiosk accessibility checks. Generated accessibility and usability assertions are not research results.

### Con Alma: service design
[University Partnership Outreach & Engagement Workflow](https://www.figma.com/board/7XDNtOq84HYRb0v3eGOMAi/University-Partnership-Outreach---Engagement-Workflow)

Inspected the blueprint covering university outreach, coupons, frontstage/backstage activities, POS validation, social amplification, repeat visits and feedback. No edits made. Next: consolidate duplicate blocks, correct labels, align lanes, add a legend and distinguish proposed actions from observed evidence.

[Service Ecosystem Change and Value Flow: A](https://www.figma.com/board/G9y3K23jmz0EpD43RXctbp/Service-Ecosystem-Change-and-Value-Flow) · [Version B](https://www.figma.com/board/LMRIR8W3eCJumZlTxOMsNK/Service-Ecosystem-Change-and-Value-Flow)

Both ecosystem boards were visually inspected and remain unchanged. They cover partnership activation through distribution, redemption, social amplification, loyalty and feedback. Curate these with the blueprint into one case study; preserve alternate versions. Verify bibliographic references before citing them.

### Netflix Shuffle for Comfort Watching
[Concept in original workbook](https://www.figma.com/design/W1i2PizUUUvCtPx4EnxpFx/Sumukh-s-Space?node-id=653-53)

Inspected the concept for randomly choosing episodes from previously watched series. No edits made. Next: clarify the user problem, eligibility and playback behavior, controls, failure states and evidence-supported design rationale.

### Supporting files
Community wireframes, Web to Figma, an arrow icon pack, FigJam basics and the team library were listed but not reviewed as independent case studies. Preserve third-party asset attribution. No additional unique project should be inferred from the workbook prototype name alone.

## Research and presentation context

The owner states these are original projects, involved research/testing with specific user groups, and were presented to professors, capstone evaluators, guides and sometimes professional contributors. Participant counts, methods, findings, quotes, measured outcomes and individual project roles beyond authorship have not been supplied. Add real supporting artifacts before writing detailed research or impact claims. Demonstration interactions above are product checks, not user research.

## Resume order

1. Complete FastMail keyboard, responsive and physical-kiosk accessibility checks.
2. Finish CMU cancellation screen copy/actions; inspect every frame and connect the prototype.
3. Verify smartwatch export, sharing, duplicates and recovery; correct date/court ambiguity.
4. Document any FastMail issues found during accessibility review before further redesign.
5. Consolidate the Con Alma service-design narrative while preserving original boards.
6. Develop the Netflix concept and collect real research artifacts for all case studies.

At checkpoint, Figma Starter MCP calls were exhausted. Figma Make also reported AI credits exhausted until September 30. Browser editing may still be possible; no paid upgrade was initiated. This commit contains documentation and the website, not an export or backup of the Figma source files. Figma links may require sign-in or file permission.

## Website

`docs/index.html` is a dependency-free GitHub Pages progress hub. Publish from the main branch `/docs` directory. The source of record for detailed changes is this README; update both the website and log as remaining work is completed.


