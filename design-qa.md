# OneLaser Homepage Design QA

## Comparison target

- Overall source visual truth: `/Users/yongyuan/.codex/generated_images/01a032c2-4b43-7912-848c-37760ec1eb31/exec-cc036295-7872-4d18-9023-1d92f772311c.png`
- Product-grid override: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/onelaser-official-product-grid-reference.png`
- Design-system source: `/Users/yongyuan/Documents/XRF Gen2 网页/UI-SPEC.md`
- Desktop implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-final-desktop-top.png` and `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-final-desktop-bottom.png`
- Mobile implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-mobile-xrf-system.png` and `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-mobile-end.png`
- Combined source and implementation comparison: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/design-qa-combined.png`
- Dense-gallery source/implementation comparison: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-gallery-density-comparison.png`
- Product-hover implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-product-hover-final.png`
- Generated WHY image evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-why-image2-final.png` and `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-why-image2-mobile-final.png`
- Image 2 audience assets: `public/assets/home-industry-makers-v2.jpg`, `public/assets/home-industry-business-v2.jpg`, and `public/assets/home-industry-education-v2.jpg`.

## Viewport and normalization

- Overall source pixels: 727 × 2162.
- Product-grid source pixels: 2678 × 2288.
- Brochure performance source crop: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/brochure-rf-core-crop.png`.
- Brochure-led WHY implementation evidence: `/Users/yongyuan/Documents/XRF Gen2 网页/references/incoming/homepage-brochure-why-desktop.png`.
- Desktop implementation pixels: 1440 × 4096 for each upper/lower checkpoint; CSS viewport 1440 × 4096; device scale factor 1.
- Mobile implementation pixels: 390 × 844; CSS viewport 390 × 844; device scale factor 1.
- The combined comparison normalizes source and implementation to equal column widths and top alignment. Focused mobile evidence is reviewed at native 390 px width.
- State: homepage, XRF campaign hero, default product grid. Additional interaction states cover carousel navigation, open/closed YouTube modal, and open/closed mobile navigation.

## Full-view comparison evidence

The combined comparison confirms the selected hierarchy from header through footer: white navigation, adaptive 3840 × 1200 campaign carousel, an `Engrave the Future` introduction and four-machine 2 × 2 campaign grid, brochure-led WHY ONELASER proof, a full-viewport finished-project rail, a full-viewport editorial YouTube rail, three separate maker/business/education panels, the required three-part brand promise, and the official-content dark footer. The former results banner, engineering-story stack, three-step workflow, duplicate support rail, payment-logo row, and final CTA were intentionally removed following direct user feedback.

The implementation uses the official OneLaser product card order, images, labels, copy, parameter pills, and Explore Now actions from the later user-supplied product-grid override. This later source intentionally supersedes the simpler product cards shown in the original generated mock.

## Focused comparison evidence

- Product grid: the official override and implementation are shown together in `home-products-refinement-combined.png`. Card order, labels, copy, parameters, machine identity, and text actions match. The latest user-supplied Cobra, XRF, Hydra Gen2, and VertiGo renders replace the earlier files. OneLaser red, 24 px radii, Certia typography, and mobile single-column behavior follow the XRF Gen2 UI specification.
- Hero: the exact three supplied 3840 × 1200 campaign artworks remain intact and uncropped at desktop inside the required 600 px stage.
- WHY ONELASER: the brochure-led module now uses one dominant RF engineering image beside six distinct, numbered advantages. The image, statement, outcome copy, and technical proof remain separate information levels rather than being merged into generic cards. The module follows ENDLESS POSSIBILITIES as requested.
- Product families: the clean machine render remains the default state. On fine-pointer hover and keyboard focus, each card crossfades to its supplied real-world machine scene with a controlled dark gradient, white technical copy, and no layout shift; touch devices retain the stable default card.
- Finished projects: nineteen real engraving outputs form an edge-to-edge horizontal scroll-snap gallery: three dense rows on desktop and two rows on mobile. Each card owns its image and material label, opens an accessible enlarged-image viewer with a consistent image-stage height, and uses no synthetic placeholder or code-drawn asset.
- Videos: four real local YouTube covers replace generic placeholders in an edge-to-edge horizontal rail. The video story now follows THE ONELASER STANDARD as requested. Iframes are absent until interaction, and removed on close.
- Mobile: native 390 px captures confirm no document overflow, readable copy, a 12 px minimum visible text floor, single-column product cards, intentional horizontal media rails, a working navigation drawer, and a complete two-column-to-single-column footer adaptation.

## Findings

- No actionable P0, P1, or P2 fidelity issues remain.
- Fonts and typography: Certia is used throughout; editorial headings are 48 px desktop and 32 px mobile; card and body hierarchy follows `UI-SPEC.md`; visible text floor is 12 px.
- Spacing and layout rhythm: 12–16 px card grouping, 24–28 px product radii, 48 px desktop / 32 px mobile section boundaries, one shared 1280 px editorial axis, and an aspect-correct Hero capped at 600 px are consistent with the XRF Gen2 system. Product, project, WHY, audience, brand, video, and footer content begin at the same 180 px desktop / 18 px mobile axis at the tested viewports.
- Colors and visual tokens: surfaces are `#FFFFFF` / `#F5F5F7`, text uses black / `#6B6B70`, borders use XRF gray tokens, brand accents use `#E7310E`, and primary actions use `#D92D0D`.
- Image quality and asset fidelity: all production images load with real natural dimensions. The Maker, Business, and Education panels use three 1536 × 1024 Image 2 photographs centered on people and finished work, with no machine or equipment visible. No machine render, logo, video cover, or photographic module uses a placeholder or code-drawn approximation.
- Copy and content: the product grid uses live official OneLaser copy verified from `https://www.1laser.com/`; the WHY module uses the supplied brochure copy directly; the closing brand statements use the user's text verbatim; header and footer information follow the current official homepage.
- Browser checks: zero broken or pending images, zero document overflow at desktop and 390 px, and a 12 px mobile text floor. The project and video rails advance, the project lightbox moves between images and restores page scrolling on close, the lazy video modal inserts exactly one iframe and removes it on close, and the mobile navigation opens and closes correctly.
- Footer checks: the full dark footer uses the same content axis as the section above. Its desktop demo action and subscription form are both exactly 48 px high; the mobile form intentionally stacks for touch usability without overflow.

## Comparison history

1. Initial product cards lacked the official labels, specification pills, and CTA anatomy. Fixed by verifying the live OneLaser homepage and rebuilding the 2 × 2 grid with the supplied official reference. Post-fix evidence: `homepage-final-desktop-top.png` and `homepage-mobile-xrf-system.png`.
2. Initial audience panels allowed embedded banner copy to overlap the new overlay copy. Fixed by using the approved right-side image crop. Post-fix evidence: `homepage-final-desktop-bottom.png`.
3. Initial homepage tokens drifted from the XRF Gen2 system in card radius, accent red, heading sizes, play-control scale, and mobile card layout. Fixed with 24 px product radii, `#E7310E` / `#D92D0D`, 48/32 px editorial headings, 72/58 px play controls, and single-column mobile product cards. Post-fix evidence: desktop and 390 px captures above.
4. A trial full-bleed Hero crop clipped the banner's left-side message at 1440 px. Reverted to uncropped `contain` rendering inside the exact 600 px stage. Post-fix evidence: `homepage-final-desktop-top.png`.
5. The first WHY ONELASER draft combined unrelated brochure statements into one narrative. Rebuilt it as three discrete brochure claims with one outcome and proof set per card. Post-fix evidence: `homepage-brochure-why-desktop.png`.
6. The homepage lacked the requested breadth of finished-work evidence. Added a nineteen-item, three-row desktop gallery with full-viewport horizontal movement, two-row mobile adaptation, and an accessible fixed-height enlarged-image viewer.
7. The prior footer and navigation were simplified approximations. Rebuilt both from the current official OneLaser information architecture while retaining the XRF Gen2 white/light-gray visual system.
8. The first carousel indicator used framed dots and did not communicate timing. Replaced it with borderless 52 px progress bars whose active fill mirrors the 6.5-second banner cycle, with a reduced-motion fallback.
9. The product grid initially communicated only isolated machines. Added four supplied real-world scene images as progressive hover/focus states while preserving the uncluttered white default and mobile behavior.
10. The WHY media mixed brochure artwork and inconsistent visual languages. Replaced all three images with purpose-generated 3:2 industrial photography tied one-to-one to the approved RF precision, vision intelligence, and speed claims.
11. Footer and media rails used different horizontal calculations. Unified every major heading, body, first card, footer lead, footer columns, and footer bottom rule to the XRF Gen2 1280 px content axis.
12. The product specifications read as plain ruled rows. Rebuilt them as compact 10 px rounded rectangles on desktop and 9 px on mobile, with a translucent dark hover treatment over the machine scenes.
13. The three-card WHY layout felt like separate campaign tiles rather than the supplied brochure. Rebuilt it as one technical image plus a structured six-point editorial introduction.
14. The audience panels still showed laser machines. Replaced all three with purpose-generated Maker, Business, and Education scenes showing only people, engraved outcomes, business fulfillment, and hands-on STEM work.

## Primary interactions tested

- Hero autoplay structure, direct slide-dot selection, keyboard arrows, and swipe handlers.
- YouTube cover opens the accessible lazy modal; close removes the iframe; overlay and Escape close are implemented.
- Mobile menu opens, exposes navigation, and closes after navigation.
- Product, demo, YouTube, support, email, telephone, footer, and internal XRF links have real destinations.
- Fine-pointer hover transitions reveal each product's corresponding scene; moving away restores the original machine render without affecting card geometry.

## Follow-up polish

- P3: re-evaluate line breaks at intermediate tablet widths after future localization or copy changes.

final result: passed

## XRF shared Accessories navigation QA — 2026-10-16

- Source of truth: `/var/folders/vd/kws8fm5509l6b9hnywhd8yfr0000gn/T/codex-clipboard-a3c209b3-6762-46bf-a5d6-c801654741fb.png` and the current V3 Accessories-page `HomeNavigation` implementation.
- Scope: independent XRF listing header only. The V3 homepage and Accessories page were not modified.
- Desktop at 1440 × 1000: the header matches the Accessories-page information architecture and spacing, with `Laser Machines`, `Accessories`, `Clearance`, `Support`, `Community`, and `Contact`, plus search, cart, and account actions.
- Desktop interaction: no mega menu is present before interaction; hovering or focusing `Accessories` opens the centered two-card panel, matching the V3 Accessories page.
- Desktop destinations: OneLaser logo → V3 homepage; Laser Machines → V3 collections; Accessories and Laser Accessories → V3 Accessories page; Materials → the official OneLaser materials collection.
- Menu images: both cards loaded successfully at their natural 1448 × 1086 dimensions.
- Mobile at 390 × 844: the full-screen navigation opens below the announcement/header, locks document scrolling, exposes the same six top-level destinations, and expands Accessories to `Laser Accessories` and `Materials`.
- Layout: document horizontal overflow is 0 px at both tested widths.
- Console: no page-origin errors or warnings. The only warnings came from the installed browser-extension content script and are unrelated to the page.
- Build: `npm run verify` passed after the navigation replacement and hover activation adjustment.

final result: passed
