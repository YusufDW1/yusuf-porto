# 🎮 Yusuf Dwi Saputra | Personal Portfolio

A sleek, premium, and interactive **Modern-Retro Portfolio Website** built for showcasing development skills in Frontend Web and Game Development. The design features a blend of nostalgic 8-bit retro vibes with a modern slate-glassmorphism aesthetic, complete with fluid animations, interactive marquee sliders, custom SVG pixel avatar animations, and accordion dropdown details.

🚀 **Live Preview:** [localhost:3000](http://localhost:3000) (when running locally)

---

## ✨ Features

- **🎨 Modern-Retro Aesthetic:** Glassmorphism overlay panels styled with sleek slate color gradients (`--accent-blue`, `--accent-green`, `--accent-gold`, etc.) combined with modern typography.
- **👁️ Interactive Pixel Avatar:** Custom SVGs with eye-blinking micro-animations that respond dynamically.
- **⌨️ Role Typer:** A typewriter animation cycling through professional roles ("Frontend Developer", "Game Developer") with modern glitch-like container shifts.
- **🎡 Dual-Direction Tech Marquee:** An infinite scrolling tech stack marquee. Logo icons move left-to-right (top row) and right-to-left (bottom row) and link directly to official documentation pages.
- **📂 Accordion Dropdowns:** Detailed entries for Projects (including personal contributions and tech tags) and Education (GPA details) organized into interactive dropdown summaries.
- **📩 Interactive Contact Form:** Retro-bordered email contact layout.
- **✨ Particle Background:** Floating retro pixel particles drifting across the background.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS & CSS Modules (`*.module.css`) + PostCSS & [Tailwind CSS v4](https://tailwindcss.com/) integration
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (including FontAwesome, SimpleIcons, and Tabler Icons)

---

## 📂 Project Structure

```text
web-profile/
├── .next/                  # Next.js build output
├── public/                 # Static assets (images, SVGs)
│   ├── favicon.ico
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                # Next.js App Router root pages
│   │   ├── globals.css     # Global variables and main CSS tokens
│   │   ├── layout.tsx      # Main layout component wrapping the app
│   │   ├── page.module.css # Styling specific to the main landing page
│   │   └── page.tsx        # Main homepage entry and sections
│   └── components/         # Reusable React components
│       ├── ContactForm.tsx        # Contact UI panel
│       ├── ContactForm.module.css
│       ├── FloatingPixels.tsx     # Background particle engine
│       ├── FloatingPixels.module.css
│       ├── Navbar.tsx             # Responsive glassmorphism navigation
│       ├── Navbar.module.css
│       ├── PixelAvatar.tsx        # Animated SVG avatar
│       ├── PixelAvatar.module.css
│       ├── RoleTyper.tsx          # Multi-role auto-typing text component
│       ├── RoleTyper.module.css
│       ├── TechMarquee.tsx        # Infinite logo sliding marquee
│       ├── TechMarquee.module.css
│       └── ThemeProvider.tsx      # Application theme context provider
├── eslint.config.mjs       # Linting configurations
├── next.config.ts          # Next.js specific settings
├── package.json            # Script definitions and project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Make sure you have Node.js (version 18+ recommended) installed.

### 1. Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/YusufDW1/yusuf-porto.git
cd yusuf-porto
npm install
```

### 2. Run the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

Compile and optimize the project for production deployment:

```bash
npm run build
```

Start the built production server locally:

```bash
npm run start
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information (if applicable).
