# Design QA

## Inputs

- Reference: `/Users/chriso/Downloads/ROZTAŃCZONE (notka do3).png`
- Prototype: `http://127.0.0.1:4173/`
- Target: responsive desktop and mobile informational landing page

## Evidence

- Source poster inspected at original resolution: 1414 × 2000 px.
- Production build completed successfully.
- Static page, poster asset, and contract PDF each returned HTTP 200 from the local server.
- Automated worker tests: 4 passed, 0 failed.
- In-app visual capture could not start because the browser runtime rejected the workspace path containing square brackets.

## Review history

1. Implemented poster-led hero, solid cream/yellow/coral/magenta palette, heavy condensed headings, clear schedule cards, price, location, contact, contract PDF, and signing CTA fallback.
2. Added responsive breakpoints for tablet and mobile, visible keyboard focus states, reduced-motion handling, and a working WhatsApp fallback.
3. Added GitHub Pages deployment workflow and relative asset paths for repository subpaths.

## Current result

blocked

Visual comparison of the reference and rendered browser screenshot is pending permission to use local Playwright after the in-app browser failed to initialize.
