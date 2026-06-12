# Xodeaa Global — Company Website

A sleek, responsive single-page website for **Xodeaa Global Private Limited** (International Manpower & HR Services).

## Files

```
index.html        # All page content & structure
styles.css        # Brand theme (navy + gold), layout, responsive rules
script.js         # Sticky header, mobile menu, scroll reveals, counters
assets/           # Brand image (business card)
```

Everything is plain HTML/CSS/JS — no build step, no dependencies. It works on any static host.

## Preview locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to BigRock hosting

1. Log in to your **BigRock control panel (cPanel)**.
2. Open **File Manager** and go to the `public_html` folder (this is your live web root).
3. Upload **all files**, keeping the structure intact:
   - `index.html`
   - `styles.css`
   - `script.js`
   - the `assets/` folder (with `business-card.jpeg`)
   - (Optional) Tip: zip the folder, upload the zip, then "Extract" in File Manager — faster.
4. Make sure `index.html` is directly inside `public_html` (not in a sub-folder), so it loads at `https://www.xodeaaglobal.com/`.
5. If you use a different domain/subdomain, upload into that domain's document root instead.

## Contact form

The form posts to **FormSubmit** (`https://formsubmit.co/info@xodeaaglobal.com`) — no backend needed.

- The **first time** someone submits, FormSubmit sends a one-time confirmation email to `info@xodeaaglobal.com`. Click the link in it once to activate delivery.
- After activation, all enquiries arrive in that inbox automatically.
- To change the destination, edit the `action="..."` URL on the `<form>` in `index.html`.

## SEO

The site ships search-engine ready:

- Optimized `<title>`, meta description & keywords, canonical URL, theme-color and geo tags.
- **Open Graph + Twitter cards** so links preview nicely on WhatsApp, LinkedIn, Facebook, X.
- **JSON-LD structured data** (`EmploymentAgency`, `WebSite`, `Service` + offer catalog) — helps Google show rich results with your name, address, phone and services.
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), one `<h1>`, proper heading order, descriptive link text and alt/aria labels.
- `robots.txt` and `sitemap.xml` included.
- Fast: no frameworks, fonts preconnected, lightweight assets.

**After deploying, do these once:**
1. Confirm the live domain matches the URLs used in the meta tags and `sitemap.xml`. If you launch on a domain other than `https://www.xodeaaglobal.com/`, find-and-replace that URL in `index.html`, `robots.txt` and `sitemap.xml`.
2. Add the site to **Google Search Console** (search.google.com/search-console) and submit `https://www.xodeaaglobal.com/sitemap.xml`.
3. Add it to **Bing Webmaster Tools** as well.
4. Create a **Google Business Profile** for the New Delhi office (boosts local search).
5. Validate structured data at [search.google.com/test/rich-results](https://search.google.com/test/rich-results).
6. (Optional) Replace the `og:image` with a dedicated 1200×630 px share banner for sharper social previews, and fill the `sameAs` array in the JSON-LD with your LinkedIn/Facebook URLs.

## Editing content

- **Phone / email / address / director** → search the `#contact` and footer sections in `index.html`.
- **Services, countries, process steps** → corresponding `<section>` blocks in `index.html`.
- **Colors** → CSS variables at the top of `styles.css` (`--navy-800`, `--gold`, etc.).
