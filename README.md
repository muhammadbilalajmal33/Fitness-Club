# 🏋️ Fit Sphere — Fitness Club Website

A modern, responsive fitness club landing page built with **React** and **Vite**.

---

## 📁 Project Structure

```
fitness-club/
├── public/
├── src/
│   ├── assets/
│   │   ├── C.png
│   │   ├── class-1.jpg
│   │   ├── class-2.jpg
│   │   ├── header.png
│   │   ├── join.jpg
│   │   ├── logo.png
│   │   └── member.jpg
│   ├── components/
│   │   ├── Navbar.jsx       # Top navigation with links and CTA button
│   │   ├── Header.jsx       # Hero section with headline and header image
│   │   ├── Explore.jsx      # Program cards (Strength, Fitness, Fat Loss, Weight Gain)
│   │   ├── Classes.jsx      # Classes section with dual image layout
│   │   ├── Join.jsx         # "Why Join Us" section with feature cards
│   │   ├── Pricing.jsx      # Three-tier pricing plan grid
│   │   ├── Review.jsx       # Member testimonial/review section
│   │   └── Footer.jsx       # Footer with links, socials, and copyright
│   ├── App.jsx              # Root component — assembles all sections
│   ├── App.css              # Global styles, CSS variables, and responsive layout
│   ├── index.css            # Base reset styles
│   └── main.jsx             # React entry point (Vite)
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fitness-club.git
cd fitness-club

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with hot module replacement.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder.

### Preview Production Build

```bash
npm run dev
```

---

## 🎨 Design System

Defined via CSS custom properties in `App.css`:

| Variable | Value | Usage |
|---|---|---|
| `--primary-color` | `#111317` | Page background |
| `--primary-color-light` | `#1f2125` | Card backgrounds |
| `--primary-color-extra-light` | `#35373b` | Card hover state |
| `--secondary-color` | `#f9ac54` | Accent / CTA color |
| `--secondary-color-dark` | `#d79447` | Button hover |
| `--text-light` | `#d1d5db` | Body text |
| `--white` | `#ffffff` | Headings |
| `--max-width` | `1200px` | Section max width |

**Font:** [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)  
**Icons:** [Remix Icon](https://remixicon.com/) v3.4.0

---

## 🧩 Components Overview

| Component | Description |
|---|---|
| `Navbar` | Fixed top nav with logo, navigation links, and a "Join Now" button |
| `Header` | Hero section with tagline, headline, body copy, CTA, and a fitness model image |
| `Explore` | Grid of 4 program cards (Strength, Physical Fitness, Fat Loss, Weight Gain) with navigation arrows |
| `Classes` | Split layout showcasing gym classes with overlapping images |
| `Join` | "Why Join Us" section featuring a full-width banner image and 3 feature cards |
| `Pricing` | Three pricing tiers: Basic ($16), Weekly ($25), Monthly ($45) |
| `Review` | Testimonial block with star rating, member photo, and navigation arrows |
| `Footer` | Four-column footer with company info, social links, and page links |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `< 900px` | Nav links hidden, header stacks vertically, explore grid → 2 columns, pricing → 2 columns |
| `< 600px` | Explore grid → 1 column, pricing → 1 column, review and footer stack vertically |

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool and dev server
- **Remix Icon** — Icon library (CDN)
- **Google Fonts (Poppins)** — Typography
- **Pure CSS** — Styling with CSS variables and Grid/Flexbox layout

---

## 📄 License

Copyright © 2025 Muhammad Bilal Ajmal. All rights reserved.
