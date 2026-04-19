#  Real Estate Portfolio
Visit portfolio : https://real-estate-portfolio-zeta.vercel.app/

An elegant real estate portfolio website built with `Next.js`, `JavaScript`, and `Tailwind CSS`.

It features a premium landing page, animated gallery sections, working property filters, a dedicated properties page, a full gallery page, and frontend forms for both buyers and sellers.

---

## Table of Contents

1. [About](#about)
2. [Preview](#preview)
3. [Features](#features)
4. [Pages](#pages)
5. [Tech Stack](#tech-stack)
6. [Project Structure](#project-structure)
7. [Getting Started](#getting-started)
8. [Scripts](#scripts)
9. [Customization](#customization)
10. [Future Improvements](#future-improvements)

---

## About

`Nellio Real Estate Portfolio` is a modern frontend project designed for showcasing real estate listings in a clean, editorial-style interface.

The project is built around:

- a polished homepage
- reusable React components
- smart property filtering
- gallery-driven browsing
- dedicated routes for properties and gallery
- frontend forms for buying and listing properties

This project is ideal as:

- a real estate portfolio template
- a frontend showcase project
- a base for a full-stack real estate platform

---

## Preview

You can add screenshots in a `docs/` folder and display them here.

Suggested images:

- `docs/homepage.png`
- `docs/properties-page.png`
- `docs/gallery-page.png`
- `docs/forms-section.png`

Example:

```md
![Homepage](docs/homepage.png)
![Properties Page](docs/properties-page.png)
![Gallery Page](docs/gallery-page.png)
![Forms Section](docs/forms-section.png)
```

---

## Features

- Responsive sticky navbar
- Hero section with vertical auto-scrolling image columns
- Clean About section
- Working property filtering by:
  - buy
  - sell
  - price
  - area
  - location
- `View More Property` button with redirect to `/properties`
- Full properties page with filter state support
- Dedicated `/gallery` page with varied image sizes
- Clickable gallery images that redirect to the properties page
- Buyer inquiry frontend form
- Seller property listing frontend form
- Property image upload input with limit up to 5 files
- Reusable component-based architecture
- Footer with navigation and contact details

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/properties` | Full property listings page |
| `/gallery` | Dedicated gallery page |

---

## Tech Stack

| Technology | Usage |
|-----------|-------|
| `Next.js 16` | App framework |
| `React 19` | UI rendering |
| `JavaScript` | Application logic |
| `Tailwind CSS 4` | Styling |
| `ESLint` | Linting |

---

## Project Structure

```bash
src/
  app/
    gallery/
      page.js
    properties/
      page.js
    globals.css
    layout.js
    page.js

  components/
    AboutSection.js
    CtaSection.js
    Footer.js
    GalleryMasonry.js
    GallerySection.js
    HeroSection.js
    Navbar.js
    PropertyExplorer.js

  data/
    gallery.js
    properties.js
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

## Scripts

### `npm run dev`

Runs the development server.

### `npm run build`

Creates the production build.

### `npm run start`

Runs the production server.

### `npm run lint`

Runs ESLint checks.

---

## Customization

You can easily update the project from these files:

- [src/data/properties.js](src/data/properties.js) for property listing data
- [src/data/gallery.js](src/data/gallery.js) for gallery image data
- [src/app/page.js](src/app/page.js) for homepage composition
- `src/components/` for reusable UI sections
- [src/app/globals.css](src/app/globals.css) for global styles

---

## Future Improvements

- Add backend integration for form submission
- Create individual property details pages
- Add image preview thumbnails for uploaded seller images
- Add sorting and keyword search on properties page
- Add lightbox preview on gallery images
- Connect properties to a real database
- Add authentication for admin or agents

---

## Author Note

This project was structured to stay clean, reusable, and easy to extend.  
It can be used as a portfolio template, a learning project, or a starting point for a production real estate platform.
