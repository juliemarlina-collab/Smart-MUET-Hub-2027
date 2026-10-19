# Start here · Smart MUET app

## Open and navigate

Open `index.html` for the central Home page. Use the five buttons at the bottom of every page:

| Button | Purpose |
| --- | --- |
| Home | Study route, chosen skill and resume link |
| Book | 53-page PDF with thumbnails and page tools |
| Learn | Four component guides and four guided labs (CLUE, PREP, SCAN, PEEL) |
| Vault | The four skill labs, book activities and Review again, and the three practice levels: Vault 1 (guided), Vault 2 (less support), Mock 1 (exam conditions) |
| Me | Local reading progress, guide steps, lab results and reflections from all labs |

Suggested study flow: Welcome → Book chapter → matching technique guide → guided activity/lab → reflection → Me. Reading, Listening and Writing guides use six numbered sections. Speaking Lab also uses six numbered steps. Home’s Diagnose stage opens the 10-minute check, which recommends a starting skill and builds a personal 3-week plan shown on Home.

Use “First visit? Start here” for orientation. Use “Continue where I left off” to resume the last learning page in this browser. Home’s skill selector changes its suggested guide; it does not claim to be a diagnostic assessment. From each skill guide, the continuation panel links to the matching PDF chapter and available practice.

## GitHub Pages setup

1. Unzip `Smart-MUET-Complete-App.zip`.
2. Open the `Smart-MUET-Rebuild` folder. Upload **its contents** to a new GitHub repository, preserving all subfolders and `.nojekyll`. Keep the existing V2 repository separate.
3. In repository Settings → Pages, select the branch containing these files and the root folder, then save.
4. Open the generated Pages URL. It should show Home from the root `index.html`.
5. Test Book audio, microphone permission and navigation on a phone. Recording requires HTTPS or localhost.

The package needs no npm installation or build step. To test locally, run `python3 -m http.server 8000` inside `Smart-MUET-Rebuild`, then open `http://localhost:8000`. Direct file opening may restrict PDF loading or microphone use; the book includes an image fallback.

## Included and planned

Included: central Home, Welcome, account preview/adapter, five overview/component guides, PDF eBook and 53 WebP thumbnails/fallback pages, book activity edition, four skill labs (Listening CLUE, Speaking PREP, Reading SCAN, Writing PEEL), Vault gateway and local Me page. Shared fonts, audio, illustrations and local PDF.js are included.

The account defaults to preview mode until the owner configures its documented authentication adapter. Real sign-in, email delivery and cross-device progress do not become active merely by uploading this package.

Planned: Arcade, badge artwork wiring, shared XP/badges and consented spreadsheet syncing. Existing practice records are local; no marks, bands or completed levels are invented.

Audio recordings are managed and downloaded inside the Speaking Lab. Me’s JSON export excludes audio. Learner-marked completion is not proof of mastery. Keep all folders; the app uses relative links so it can run in a GitHub project subdirectory.
