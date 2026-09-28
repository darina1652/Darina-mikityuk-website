# Darina Mikityuk — Artist Portfolio

A minimal, editorial portfolio for visual artist Darina Mikityuk, built with Astro.

## Local development

```sh
npm install
npm run dev
```

The site is structured as a static Astro project and can be built with `npm run build`. All artwork and biography copy currently included in the repository are curated placeholders and should be replaced with final studio materials before publication.

Run `npm run validate` for the dependency-free route and asset-reference check.

## Private preview on an iPad

The simplest preview uses a GitHub Codespace. It does not deploy the website, and
the forwarded preview port is configured as private. A personal GitHub account
includes a limited monthly Codespaces allowance; GitHub shows a confirmation
before any paid usage is enabled.

1. Open this repository on GitHub in Safari on the iPad and sign in.
2. Tap **Code**, then **Codespaces**, then **Create codespace on main**.
3. Wait until the browser editor opens and the automatic `npm install` has
   finished in the terminal.
4. In the terminal, enter:

   ```sh
   npm run dev -- --host 0.0.0.0
   ```

5. When the notification says that port **4321** is available, tap
   **Open in Browser**. The website opens in a new Safari tab.

If the notification disappears, open the **PORTS** tab in the lower panel,
find **Website preview (4321)**, and tap the globe icon. Leave the port
visibility set to **Private**. Keep the terminal command running while viewing
the site; use <kbd>Control</kbd>+<kbd>C</kbd> in the terminal to stop it.

When finished, return to the repository page, tap **Code** and **Codespaces**,
tap the `…` beside the codespace, and choose **Stop codespace**. The same menu
also offers **Delete** when the preview environment is no longer needed.
