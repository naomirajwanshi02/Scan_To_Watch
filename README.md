# Scan to Watch: one link, many interactions

One web link for one NFC tag. It opens the camera and asks you to scan a picture:

- **Gion Matsuri float picture** → opens [Gion Matsuri Video](https://github.com/naomirajwanshi02/Gion_Matsuri_Video)
- **Pink paper crane picture** → opens [Crane Video AR](https://github.com/naomirajwanshi02/Crane_Video_AR)

This hub holds **no videos**. It only recognises the picture and redirects to that interaction's own live page
(`?from=hub`), so each stays independently editable: change and push it in its own repo and the hub serves the
new version (GitHub Pages refreshes in about a minute). The cross on each interaction brings you back to this scan screen.

| File | What it is |
|---|---|
| `index.html`, `js/app.js`, `js/scan.js` | Camera permission, scanner, redirect |
| `js/festivals.js` | The list (name, page URL, picture, index in `targets.mind`) |
| `targets.mind` | Both pictures compiled together (index 0 Gion Matsuri, 1 Paper Crane) |
| `tools/make-target.html`, `tools/serve.ps1` | Rebuild `targets.mind` from the live pictures |

**Only if a picture (`target.png`) changes, or an interaction is added:** edit `js/festivals.js`,
run `tools/serve.ps1`, open `http://localhost:8150/tools/make-target.html?build=1`, then commit `targets.mind`.
Changes to a video or its look need nothing here.

Phones need HTTPS for the camera (GitHub Pages provides it). `?nogo=1` stays on the found screen instead of redirecting.
Anatomy sepia theme (`vendor/anatomy/`).
