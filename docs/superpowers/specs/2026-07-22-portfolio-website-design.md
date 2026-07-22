# Portfolio Website Design

Date: 2026-07-22
Owner: Jithin Varghese
Status: Approved (ready for implementation planning)

## 1. Purpose

A personal portfolio website that helps Jithin land Product Manager roles. It is recruiter-first: the primary audience is recruiters and hiring managers evaluating him for PM positions. A secondary goal is personal brand building, tying together his professional profile and his two Substack publications into one coherent identity.

## 2. Audience and success criteria

Primary audience: PM recruiters and hiring managers.

The site succeeds if a recruiter can, in under 60 seconds:
1. Understand who Jithin is and that he is a Product Manager.
2. Download his resume.
3. See proof of how he thinks (work highlights plus writing).
4. Reach him or his profiles (LinkedIn, email).

Secondary: readers discover his Substacks and follow his writing.

## 3. Scope

In scope:
- A single-page scrolling website with anchor navigation.
- Six content sections (see section 5).
- A downloadable resume PDF.
- Outbound links to both Substacks, LinkedIn, Instagram, and email.
- Responsive layout (mobile and desktop).
- Hosting on GitHub Pages.

Out of scope (not now):
- An on-site blog or CMS (writing stays on Substack).
- A contact form or any backend.
- Analytics beyond an optional lightweight snippet (deferred).
- A custom domain (may be added later, see section 8).

## 4. Visual direction

Chosen style: "Bold Statement" (Style C from brainstorming).

Design tokens:
- Background: `#14110F` (near-black, warm).
- Primary text: `#F5F1EA` (warm off-white).
- Muted text: `#B8AE9E`; subtle text: `#8B8073`.
- Accent: `#F2B705` (amber). Used sparingly for one CTA per section, links, and the monogram.
- Borders/hairlines: `#2A2620`.
- Typography: system sans-serif stack, heavy weights (700 to 800) for headings, large hero type. No serif.
- Identity mark: a "JV" monogram in amber (no photo is used, per available assets).
- Shape language: small border radius (4 to 8px), generous vertical spacing, thin section dividers.

The single accent color is intentional and should stay consistent across the whole site as a brand signal.

## 5. Page structure

One page, top to bottom, with a sticky top navigation offering jump links.

1. Sticky nav: "JV" monogram on the left; jump links (Work, Writing, About) and an amber "Resume" download link on the right.
2. Hero: eyebrow line (name and location), large headline ("I build products people actually trust"), one-sentence positioning statement, and three calls to action (Download resume [primary/amber], Read my writing, LinkedIn).
3. About: short two to three sentence bio plus a row of skill tags (for example Product Strategy, User Research, Roadmapping, Analytics).
4. Experience: reverse-chronological roles (title, company, dates) sourced from the resume, followed by a "Download full resume (PDF)" link.
5. Selected Work: two work-highlight cards, each following a Problem, Action, Outcome shape. This is the first half of the "proof of ability" mix.
6. Writing: three featured Substack essays as cards, plus chips linking to both publications (Moved by Machines and Jithin's Substack). This is the second half of the proof mix, framed as "How I think about products."
7. Connect (footer): links to LinkedIn, Instagram, both Substacks, and email.

Section order is deliberate: resume and experience lead for recruiters, with writing as supporting proof lower down.

## 6. Content model

Content is authored directly in the HTML (no data files, given the small size). Sources:
- Experience and the resume PDF: from Jithin's existing resume (PDF plus written details he will provide).
- Selected Work: two highlights Jithin will provide (may be lightweight; NDA-safe framing).
- Writing: three chosen essays. Candidates identified during brainstorming: "The Kia Seltos Key: A Tiny Detail, A Big UX Win", "Buying a Car in India Feels Like a Broken UX Problem", "Riding the EV Adoption Curve". Final three to be confirmed.
- Links: 
  - Moved by Machines: https://movedbymachines.substack.com/
  - Jithin's Substack: https://jithinvarghese.substack.com/
  - LinkedIn, Instagram, email: to be provided.

## 7. Technical approach

Hand-crafted static site. No build step, no framework.

Files:
- `index.html`: the single page, all sections.
- `style.css`: all styling and the design tokens as CSS custom properties.
- `main.js` (minimal, optional): smooth-scroll for nav anchors and any small interaction (for example nav shadow on scroll). Kept tiny; the site works without it.
- `resume.pdf`: the downloadable resume.
- Assets folder for favicon and any icons.

Principles:
- Semantic, accessible HTML (landmarks, heading order, alt text, sufficient contrast; the amber-on-dark and off-white-on-dark combinations must meet WCAG AA).
- Mobile-first responsive CSS (single column on phones, comfortable reading width on desktop).
- Fast: no heavy libraries, system fonts, minimal JS.
- SEO basics: title, meta description, Open Graph tags so shared links preview well.

## 8. Hosting and deployment

- Hosted free on GitHub Pages from the repository's default branch.
- Personal GitHub account: `jithin-varghese`. Address: `jithin-varghese.github.io`.
- For a GitHub Pages user site, the repository must be named exactly `jithin-varghese.github.io`.
- Identity separation: this is a personal project and must never use the work git identity (`jithin-darby` / `jithinv@drivewithdarby.com`). The repository sets a local git config that overrides the global work identity: name `Jithin Varghese`, email `jithinvarghese.varghese8@gmail.com`. Verify `git config user.email` is the personal email before every commit and push.
- A custom domain can be layered on later with a `CNAME` file and DNS, without changing the site.
- The repository lives at the local path `portfolio-site`. The brainstorming mockups under `.superpowers/` are ignored via `.gitignore`.

## 9. Non-goals and constraints

- No em dashes in site copy (author preference).
- No backend, no user data collection.
- Keep the accent to a single color; resist adding a second accent.

## 10. Open items to confirm before or during build

1. Confirmed: personal GitHub account `jithin-varghese`, repository `jithin-varghese.github.io`.
2. The three essays to feature.
3. The two Selected Work highlights and their outcome lines.
4. Bio text, skill tags, and the exact hero headline and positioning sentence.
5. LinkedIn URL, Instagram URL, and contact email.
6. Whether to include a lightweight, privacy-friendly analytics snippet.
