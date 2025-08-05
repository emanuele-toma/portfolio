# 🚀 Emanuele Toma - Portfolio Website

> A modern, responsive portfolio website showcasing my journey as a Web Developer and DevOps Engineer.

## ✨ Features

- **🎨 Modern Design** - Clean, minimalist design with smooth animations and gradients
- **� Fully Responsive** - Optimized for all device sizes and screen resolutions
- **🌍 Internationalization** - Multi-language support (English/Italian)
- **⚡ Performance Optimized** - Built with Astro for lightning-fast loading times
- **🎭 Interactive Components** - Smooth scrolling, hover effects, and engaging animations
- **📄 Resume Download** - Easy access to downloadable resume in PDF format
- **🔗 Social Integration** - Direct links to GitHub, LinkedIn, and other professional profiles
- **📧 Contact Form** - Functional contact form for easy communication
- **🎯 SEO Friendly** - Optimized meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend

- **[Astro](https://astro.build/)** - Modern static site generator
- **[React](https://reactjs.org/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Icons & Assets

- **[@iconify/react](https://iconify.design/)** - Comprehensive icon library
- **Custom SVG assets** - Optimized vector graphics

### Development Tools

- **[Prettier](https://prettier.io/)** - Code formatting
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager


## 📜 Available Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start development server at `localhost:4321` |
| `pnpm build`     | Build production site to `./dist/`           |
| `pnpm preview`   | Preview production build locally             |
| `pnpm astro ...` | Run Astro CLI commands                       |

## 🏗️ Project Structure

```
|
├── public/
│   ├── robots.txt                    # SEO robots configuration
│   ├── companies/                    # Company logos and assets
│   ├── files/                        # Downloadable files (resume, etc.)
│   ├── flags/                        # Language flag icons
│   └── images/                       # Project screenshots and images
├── src/
│   ├── assets/                       # Static assets
│   ├── components/
│   │   ├── navigation/
│   │   │   └── Navigation.tsx        # Main navigation component
│   │   ├── sections/
│   │   │   ├── About.tsx            # About section
│   │   │   ├── Contact.tsx          # Contact form section
│   │   │   ├── Experience.tsx       # Work experience timeline
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   ├── Hero.tsx             # Hero/landing section
│   │   │   ├── Projects.tsx         # Featured projects showcase
│   │   │   └── Skills.tsx           # Skills and technologies
│   │   └── ui/
│   │       └── LanguageSelector.tsx  # Language switching component
│   ├── hooks/
│   │   └── useTranslation.ts        # Translation hook
│   ├── layouts/
│   │   └── Layout.astro             # Base layout template
│   ├── locales/
│   │   ├── en/common.json           # English translations
│   │   └── it/common.json           # Italian translations
│   ├── pages/
│   │   └── index.astro              # Main page
│   ├── styles/
│   │   └── global.css               # Global styles and animations
│   └── utils/
│       └── i18n.ts                  # i18n configuration
├── astro.config.mjs                 # Astro configuration
├── tailwind.config.mjs              # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PNPM** (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/emanuele-toma/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the portfolio in action!

## 🌍 Internationalization

This portfolio supports multiple languages:

- **English** (`en`) - Default language
- **Italian** (`it`) - Secondary language

### Adding New Languages

1. Create a new locale folder in `src/locales/`
2. Copy `common.json` from an existing locale
3. Translate all text strings

### Modifying Translations

All text content is stored in JSON files under `src/locales/`. Simply edit the appropriate language file to update content.

## 🎨 Customization

### Colors & Theming

The portfolio uses a custom color scheme built with Tailwind CSS. Main colors include:

- **Primary**: Blue gradient (`from-blue-400 to-blue-600`)
- **Secondary**: Purple gradient (`from-purple-400 to-purple-600`)
- **Accent**: Cyan (`cyan-400`)
- **Background**: Dark theme with slate colors

### Content Updates

1. **Personal Information**: Update `src/locales/en/common.json` and `src/locales/it/common.json`
2. **Projects**: Modify the projects array in the locale files
3. **Experience**: Update the experience items in the locale files
4. **Assets**: Replace images in the `public/` directory

### Styling

- **Global styles**: `src/styles/global.css`
- **Component styles**: Inline Tailwind classes in React components
- **Animations**: Custom CSS animations defined in global styles

## 🚢 Deployment

### Build for Production

```bash
pnpm build
```

The built site will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Emanuele Toma**

- 🌐 Portfolio: [emanuele.toma.gg](https://emanuele.toma.gg)
- 💼 LinkedIn: [linkedin.com/in/emanuele-toma](https://linkedin.com/in/emanuele-toma)
- 🐙 GitHub: [github.com/emanuele-toma](https://github.com/emanuele-toma)
- 📧 Email: [emanuele@toma.gg](mailto:emanuele@toma.gg)

---

⭐ **If you found this portfolio inspiring, please consider giving it a star on GitHub!**

