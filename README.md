# PersonalSite: My Personal Portfolio & Blog

## 🌟 Overview  
Welcome to the repository for my personal portfolio website! This site is designed to showcase my projects, skills, and professional background.

This repository hosts a **purely static website** consisting of **HTML, CSS, and JavaScript**, built using the **ASP.NET Core Empty template** primarily for local development and build tooling, but deployed directly as static files.

The live website is currently hosted on **GitHub Pages** and can be viewed here:  
👉 **[[Live Site](#)](https://caisonlewis.github.io/PersonalSite/)**  
---

## 🛠️ Project Structure

This project is configured to work **without** the standard ASP.NET Core `wwwroot` folder, making the **repository root** the deployment root.

| File/Folder           | Purpose                                                         |
|-----------------------|-----------------------------------------------------------------|
| `index.html`          | Main landing page                                               |
| `about.html`          | Professional background and skills page                         |
| `css/`                | Contains global styles (`site.css`)                             |
| `js/`                 | Contains global JS logic (`site.js`)                            |
| `Program.cs`          | Minimal config for local preview in Visual Studio               |
| `PersonalSite.csproj` | Visual Studio project definition                                |

---

## 🚀 Local Development (Visual Studio)

If you'd like to run the site locally for development or preview:

1. **Clone the repository** to your machine.  
2. **Open Visual Studio** and load `PersonalSite.csproj`.  
3. **Run the project** using **Ctrl + F5** (Run without debugging).  
4. The site will open in your browser at a local address (e.g., `https://localhost:7001/`).

---

## ⚙️ Deployment to GitHub Pages

Deployment is handled automatically via **GitHub Pages**:

- All static files (`.html`, `.css`, `.js`) **must be in the root directory**.  
- Any changes pushed to the **main branch** are deployed automatically.  
- In your repo settings, configure **GitHub Pages** to build from:  
  - **Branch:** `main`  
  - **Folder:** `/` (root)

---

## 🤝 Contribution

This is a personal portfolio, so pull requests for new features aren’t expected.  
However, if you find any **bugs**, **typos**, or issues on the live site, feel free to open an **Issue**!

---

© 2025 Blake Lewis
