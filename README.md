 🖥️ Dev Dashboard

A fully interactive GitHub profile dashboard built with pure HTML, CSS, and JavaScript. Fetches live data from the GitHub API and presents it in a modern, terminal-inspired interface — with animated components, tabbed navigation, and a real-time activity heatmap.

 **[View Live Demo](https://forurmah.github.io/dev-dashboard)**

---

##  Features

-  **3-tab layout** — Overview, Repositories, and Stats in one clean interface
-  **Activity heatmap** — GitHub-style contribution grid for the last 6 months
- **Animated terminal widget** — types your profile info like a real dev environment
- **Skill progress bars** — animated bars showing your tech stack breakdown
-  **Language filter buttons** — filter all repos by programming language instantly
-  **Live search** — search bar filters repositories in real time as you type
-  **Dark / Light mode** toggle
-  **Repo cards** — shows stars, forks, language, and time since last update
-  **Loading skeletons** — smooth placeholder animation while data loads
-  **Fully responsive** — works on mobile, tablet, and desktop
-  **Zero dependencies** — no frameworks, no npm, no build step

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and layout |
| CSS3 | Grid, Flexbox, CSS variables, animations, glassmorphism |
| JavaScript ES6+ | Async/await, DOM manipulation, state management |
| GitHub REST API | Live user profile and repository data |
| Google Fonts | JetBrains Mono + Inter typefaces |

---

##  Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/forurmah/dev-dashboard.git

# 2. Open index.html in your browser — no install needed
```

> The dashboard loads your GitHub data automatically. To use it for a different profile, open `index.html` and change the `USERNAME` variable at the top of the `<script>` tag.

---

## Deploy to GitHub Pages

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your live URL: `https://forurmah.github.io/dev-dashboard`

---

## Project Structure

```
dev-dashboard/
├── index.html      # Everything — HTML, CSS, and JS in one file
└── README.md       # You are here
```

---

## What I Learned

- How to work with the **GitHub REST API** using `fetch()` and `async/await`
- Building a **multi-tab UI** and managing active state without any framework
- Using **CSS custom properties** to switch themes dynamically at runtime
- Creating **animated components** — typing effects, shimmer skeletons, progress bars — in pure CSS and JS
- Designing a **heatmap grid** using CSS Grid and seeded pseudo-random data
- Structuring a project so that **all logic lives in one clean file** with no build tools

---

##  Future Improvements
- Fetch real contribution data via GitHub GraphQL API
-  Add pinned repositories section
 -  cards on scroll with Intersection Observer
-  Add a shareable profile card export (download as image)

---

##  Author

**Mahsa Milani**
- GitHub: [@forurmah](https://github.com/forurmah)
- Email: melorinmilani@gmail.com

---

##  License

MIT License — free to use, fork, and build on.
