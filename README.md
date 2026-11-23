# AVD Silage Solutions Private Limited
### Premium International Agricultural Silage & Livestock Fodder Website

A complete, production-ready, international B2B agricultural website built for **AVD SILAGE SOLUTIONS PRIVATE LIMITED**, based in **Village/Post Bhadugaon, Tehsil Rahetgaon, Timarni, Harda District, Madhya Pradesh – 461228, India**.

Designed with an established global agricultural corporate visual identity, engineered for domestic wholesale generation and international buyer leads across the Middle East, GCC, and South Asia.

---

## 🌾 1. Key Technologies

- **React.js 18** (Component-driven architecture)
- **Vite 6** (Blazing-fast build tool and dev server)
- **Tailwind CSS 3** (Custom agricultural theme, typography & responsive utility styling)
- **Framer Motion** (Smooth animations respecting `prefers-reduced-motion`)
- **React Router DOM 6** (Client-side routing with clean URLs and breadcrumbs)
- **Lucide React** (Agricultural, shipping, and UI icons)

---

## 🎨 2. Brand Identity & Color Palette

The color system is derived from authentic agricultural forage and grain tones:

- **Primary Green (`#0F5132` / `#0B3D25`):** Deep agricultural forest emerald reflecting healthy standing corn crops.
- **Secondary Gold (`#EAB308` / `#CA8A04`):** Golden harvest maize corn representing prime grain maturity.
- **Accent Sprout (`#22C55E` / `#16A34A`):** Fresh vegetative green foliage.
- **Neutral Surface (`#FAFBF7` / `#F4F7F2`):** Clean, premium, light background for international corporate legibility.
- **Dark Charcoal (`#0F172A` / `#1E293B`):** High-contrast typography.

### Logo Configuration:
- The vector SVG brand logo is in `public/images/logo.svg` and `src/components/common/Logo.jsx`.
- To swap with a custom raster PNG/SVG provided by the client, replace `public/images/logo.svg` or drop an image into `public/images/` and update `Logo.jsx`.

---

## 🏢 3. Corporate Verification & Address

- **Entity Name:** AVD Silage Solutions Private Limited
- **CIN:** `U10800MP2026PTC086177`
- **RoC:** RoC-Gwalior
- **Plant & Registered Office:** Khasra No. 168/4, 168/5, Village/Post Bhadugaon, Tehsil Rahetgaon, Timarni, Harda District, Madhya Pradesh – 461228, India.
- **Official Instagram:** [https://www.instagram.com/avd_silage/](https://www.instagram.com/avd_silage/)

---

## 📦 4. Featured Agricultural Products

Each product has a dedicated SEO-friendly product detail page (`/products/:slug`):

1. **Corn Silage** (`/products/corn-silage`) – Whole-plant maize with optimal energy for commercial dairy rations.
2. **Pioneer Corn Silage** (`/products/pioneer-corn-silage`) – High-biomass Pioneer hybrid seed genetics.
3. **Pioneer BMR Corn Silage** (`/products/pioneer-bmr-corn`) – Brown Midrib lower-lignin trait for superior fiber digestibility.
4. **Whole-Crop Maize Silage** (`/products/whole-crop-maize`) – Total-plant balanced roughage.
5. **Hybrid Napier Grass Silage** (`/products/hybrid-napier-grass`) – High-biomass succulent perennial fodder.
6. **Organic Fodder Solutions** (`/products/organic-fodder`) – Naturally cultivated green roughage.
7. **Organic Fertilizer & Soil Enrichment** (`/products/organic-fertilizer`) – Natural soil conditioning and humus builder.

---

## 🛢️ 5. Standard 50 KG Vacuum Packaging Highlight

- Multi-layer co-extruded high-barrier film.
- High UV-inhibitor protection preventing solar heat and light degradation.
- Mechanical vacuum sealing eliminating aerobic face spoilage (0–2% vs. 15–25% in traditional pit bunkers).
- Ergonomic 50 KG modular bags for single-man handling and palletized container shipping.

---

## 🌍 6. Global Business & Export Portal (`/export`)

Targeted international focus hubs (clarified as target markets, with no fabricated claims):
- **Middle East / GCC:** UAE (Jebel Ali), Saudi Arabia (Jeddah / Dammam), Oman (Sohar / Salalah), Qatar (Hamad Port), Kuwait (Shuwaikh).
- **South Asia:** Bangladesh (Chittagong Port), Nepal, and neighboring regions.
- Containerized pallet arrangements in 20ft and 40ft High Cube containers.

---

## 📲 7. Lead Generation & WhatsApp Setup

### Updating WhatsApp Contact:
Open `.env` (or `src/config/siteConfig.js`):
```env
VITE_WHATSAPP_NUMBER=919876543210
VITE_OFFICIAL_EMAIL=inquiry@avdsilage.com
```
*(Use digits only including country code, e.g. `919876543210` for India).*

### Pre-filled WhatsApp Format:
All "Get a Quote" and "WhatsApp" buttons pre-fill:
```text
Hello AVD Silage Solutions,

I am interested in your products.

Name: [Customer Name]
Company: [Company/Farm Name]
Country: [Country]
Product: [Selected Product]
Required Quantity: [Quantity] [Unit]
Delivery Location: [City/Port]

Please share product details and your best quotation.

Thank you.
```

### Lead Capture & Fallback:
1. Validates all inputs (email format, international phone digits, required fields, honeypot protection).
2. Deduplicates rapid repeat submissions.
3. If `VITE_LEAD_API_URL` is configured (Supabase REST or Formspree endpoint), submits via JSON POST.
4. Always persists leads to browser `localStorage` (`avd_silage_leads_v1`) so inquiries are never lost.
5. Provides instant one-tap WhatsApp confirmation link.

---

## 🚀 8. Getting Started

```bash
# 1. Install dependencies
npm run install (or npm.cmd install)

# 2. Start local development server (runs on http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🔍 9. SEO & Schema Infrastructure

- Unique dynamic page titles and meta descriptions via `<SEO />` component.
- Canonical URL management.
- Open Graph and Twitter Card tags.
- Schema.org JSON-LD structured data:
  - `Organization` & `LocalBusiness`
  - `Product` & `AggregateOffer`
  - `ItemList`
  - `WebSite` & `BreadcrumbList`
- `public/sitemap.xml` and `public/robots.txt`.
"# AVDSillage" 
