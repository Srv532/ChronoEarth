# 🌍 ChronoEarth — A Journey Through Deep Time

**4.5 Billion Years in Every Scroll**

ChronoEarth is an educational web project that takes users on an interactive journey through the complete geological history of Earth — from a molten ball of rock to the Anthropocene. Built entirely with HTML, CSS, and JavaScript.

> B.Tech CSE Project — Amrita Vishwa Vidyapeetham

---

## 👥 Team

| Name | Role |
|------|------|
| **Malavya** | Project Architect & Integration |
| **Divya** | Content Lead & Research |
| **Sravan** | Visual Design & UX |
| **Aravind** | Interactivity & Logic |

---

## 🗂️ Project Structure

```
chronoearth-master/
├── index.html              ← Main landing page with timeline overview
├── assets/
│   └── images/             ← Visual assets (Phase 2)
├── components/             ← Reusable HTML components (Phase 2)
├── css/                    ← Stylesheets (Phase 2)
├── js/                     ← Scripts (Phase 3)
└── pages/                  ← 21 content pages
    ├── formation.html          Formation of the Earth
    ├── moon-formation.html     Moon Formation (Giant Impact)
    ├── hadean.html             Hadean Eon
    ├── archean.html            Archean Eon & Origin of Life
    ├── great-oxidation.html    Great Oxidation Event
    ├── proterozoic.html        Proterozoic Eon
    ├── snowball-earth.html     Snowball Earth
    ├── cambrian.html           Cambrian Explosion
    ├── ordovician-silurian.html  Ordovician & Silurian Periods
    ├── devonian.html           Devonian Period
    ├── carboniferous.html      Carboniferous Period
    ├── permian-extinction.html The Great Dying
    ├── mesozoic.html           Mesozoic Era (Age of Reptiles)
    ├── kpg-extinction.html     K-Pg Extinction (Chicxulub)
    ├── cenozoic.html           Cenozoic Era (Age of Mammals)
    ├── human-evolution.html    Human Evolution
    ├── anthropocene.html       The Anthropocene
    ├── plate-tectonics.html    Plate Tectonics (Deep Dive)
    ├── mass-extinctions.html   The Big Five Extinctions (Deep Dive)
    ├── atmosphere.html         Evolution of the Atmosphere (Deep Dive)
    └── quiz.html               Interactive Quiz (Phase 3)
```

---

## 📋 Development Phases & Progress

### Phase 1 — HTML Structure & Content ✅ Complete

- [x] Main landing page (`index.html`) with full semantic structure
- [x] 17 timeline pages with comprehensive educational content
- [x] 3 deep-dive pages (Plate Tectonics, Mass Extinctions, Atmosphere)
- [x] Quiz page UI skeleton (`quiz.html`)
- [x] Consistent navigation (prev/next) across all timeline pages
- [x] Semantic HTML5 elements throughout (`<article>`, `<section>`, `<nav>`, `<aside>`, `<main>`)

### Phase 2 — CSS Styling & Visual Design 🔲 Not Started

- [ ] Design system (color palette, typography, spacing tokens)
- [ ] Global stylesheet (`css/main.css`)
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] Era-specific color themes
- [ ] Timeline visualization on the landing page
- [ ] Image assets for each geological era
- [ ] Animations and transitions

### Phase 3 — JavaScript & Interactivity 🔲 Not Started

- [ ] Interactive geological clock (hero section)
- [ ] Quiz engine with branching logic (`js/quiz.js`, `js/quiz-data.js`)
- [ ] Rotating "Did You Know?" fact carousel
- [ ] Dinosaur size comparator (Mesozoic page)
- [ ] Scroll-triggered timeline sync
- [ ] Smooth page transitions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (Phase 2) |
| Interactivity | Vanilla JavaScript (Phase 3) |
| Frameworks | None — pure frontend |
| Build Tools | None — no dependencies |

---

## 🚀 How to Run

No build step required. Simply open `index.html` in any modern browser:

```bash
# Clone the repository
git clone https://github.com/Srv532/ChronoEarth.git

# Open in browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

---

## 📚 Content Coverage

The project covers Earth's history across **17 chronological pages** and **3 cross-cutting deep dives**:

| Era / Theme | Time Span | Pages |
|-------------|-----------|-------|
| **Precambrian** | 4.6 Ga – 541 Ma | Formation, Moon, Hadean, Archean, Great Oxidation, Proterozoic, Snowball Earth |
| **Paleozoic** | 541 – 252 Ma | Cambrian, Ordovician-Silurian, Devonian, Carboniferous, Permian Extinction |
| **Mesozoic** | 252 – 66 Ma | Mesozoic Era, K-Pg Extinction |
| **Cenozoic** | 66 Ma – Present | Cenozoic Era, Human Evolution, Anthropocene |
| **Deep Dives** | Cross-era | Plate Tectonics, Big Five Extinctions, Atmosphere Evolution |

---

## 📄 License

Academic project — Amrita Vishwa Vidyapeetham, B.Tech CSE.

All geological data verified against peer-reviewed sources.
