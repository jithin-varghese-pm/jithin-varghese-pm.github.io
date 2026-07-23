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
- Identity mark: a real photo of Jithin (from his LinkedIn DP) in the hero, with a "JV" amber monogram used for the favicon.
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

## 10. Open items (remaining)

1. GoatCounter account and site code (Jithin to create; snippet placeholder marked in HTML).
2. GitHub account `jithin-varghese` ready and authenticated for push at deploy time.
3. Final copy review of the drafted bio and Selected Work cards.

## 11. Finalized content (intake 2026-07-23)

Identity:
- Name: Jithin Varghese. Title: Product Manager, Cloud, SaaS and Platform Products. Location: Bengaluru, India.
- Contact email (displayed): jithinvarghese.varghese8@gmail.com. Phone (optional, may omit): +91 8943657704.
- Photo: `assets/jithin.jpg`. Favicon: "JV" amber monogram.

Hero:
- Headline: "I turn complex platforms into products people rely on."
- Positioning line: "Product Manager for cloud, SaaS and platform products. 6+ years turning data into 30%+ gains in adoption and efficiency."
- CTAs: Download resume (primary), Read my writing, LinkedIn.

About / skills (from resume):
- Bio: drafted from the resume professional summary (2 to 3 sentences), author to review.
- Skill tags: Product Strategy and Roadmaps, Technical Architecture Collaboration, NFR Definition, OKRs and KPIs, Agile (Scrum/Kanban), API and Platform Products, Data-Driven Decision Making, Stakeholder Management.
- Tools (optional secondary row): Azure, REST APIs, SQL, Power BI, Figma, Notion, ClickUp.

Experience (reverse chronological, from resume):
1. Product Manager, Darby Telematics, Bengaluru, Dec 2023 to Present.
2. Product Manager, Spektra Systems, Bengaluru, Jan 2020 to Nov 2023.
3. Cloud Solutions Consultant, Spektra Systems, Bengaluru, Jun 2016 to Dec 2019.
- Education: Product Management Program, Duke Corporate Education via upGrad (2020 to 2021); B.Tech CSE, College of Engineering Chengannur (2012 to 2016). May appear as a compact line under Experience.

Selected Work (2 cards, Problem / Action / Outcome):
- A. OTA software update platform: led ideation to launch; aligned engineering on system design and tradeoffs; shipped reliably at scale across 500,000+ vehicles.
- B. API-driven automation platform: led build-vs-buy with architecture; delivered 200%+ process efficiency gains.

Writing (3 featured essays, all on Moved by Machines):
1. Riding the EV Adoption Curve: https://movedbymachines.substack.com/p/riding-the-ev-adoption-curve-why
2. The Kia Seltos Key: A Tiny Detail, A Big UX Win: https://movedbymachines.substack.com/p/the-kia-seltos-key-a-tiny-detail-2c9
3. Buying a Car in India Feels Like a Broken UX Problem: https://movedbymachines.substack.com/p/buying-a-car-in-india-feels-like
- Substack chips: Moved by Machines (https://movedbymachines.substack.com/) and Jithin's Substack (https://jithinvarghese.substack.com/).

Links (Connect):
- LinkedIn: https://www.linkedin.com/in/jithin-varghese-pm/
- Both Substacks (above), email (above). Instagram: omitted by choice.

Analytics:
- GoatCounter, privacy-friendly, no cookies. Script placeholder in HTML with a clearly marked spot for Jithin's site code.

Social share and favicon:
- Favicon: "JV" monogram, amber on dark, provided as SVG (and PNG fallback).
- Open Graph / social image: 1200x630, dark and amber, featuring the photo, name, and headline.
