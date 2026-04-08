# 🚀 Gunalabs

> Building tomorrow's technology today.

A modern, multi-language corporate website built with Next.js 16, featuring cutting-edge animations, responsive design, and seamless internationalization support.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## ✨ Features

### 🌐 Multi-Language Support
- **11 Languages** with SEO-friendly URL routing
- Auto-detection of browser language
- Persistent language preference
- Full translations for all UI elements

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ |
| Bahasa Indonesia | `id` | ✅ |
| 中文 (Chinese) | `zh` | ✅ |
| 日本語 (Japanese) | `ja` | ✅ |
| ไทย (Thai) | `th` | ✅ |
| Tiếng Việt | `vi` | ✅ |
| Español | `es` | ✅ |
| Deutsch | `de` | ✅ |
| Français | `fr` | ✅ |
| العربية | `ar` | ✅ |
| Português | `pt` | ✅ |

### 🎨 Design Features
- **Dark/Light Mode** - Toggle with persistent theme
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Layout** - Mobile-first approach
- **Glassmorphism Effects** - Modern blur and transparency
- **Gradient Accents** - Beautiful color gradients

### ⚡ Performance
- **Next.js 16** with Turbopack
- **Static Generation** for fast page loads
- **Image Optimization** built-in
- **Standalone Docker** deployment ready

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| i18n | next-intl |
| Fonts | Geist Sans/Mono |
| Container | Docker & Docker Compose |

---

## 📁 Project Structure

```
gunalabs/
├── src/
│   ├── app/
│   │   └── [locale]/              # Localized routes
│   │       ├── layout.tsx           # Root layout with i18n
│   │       ├── page.tsx            # Home page
│   │       ├── services/            # Services page
│   │       ├── products/           # Products page
│   │       └── contact/            # Contact page
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── layout/                # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── language-switcher.tsx
│   │   └── sections/              # Page sections
│   │       ├── hero.tsx
│   │       ├── services.tsx
│   │       ├── products.tsx
│   │       ├── about.tsx
│   │       ├── testimonials.tsx
│   │       └── contact-cta.tsx
│   ├── messages/                  # Translation files
│   │   ├── en.json
│   │   ├── id.json
│   │   ├── zh.json
│   │   └── ... (11 languages)
│   ├── data/                      # Static data
│   │   ├── services.ts
│   │   ├── products.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   └── i18n.ts                    # i18n configuration
├── public/                        # Static assets
├── middleware.ts                  # i18n routing middleware
├── next.config.ts                 # Next.js configuration
├── Dockerfile                     # Docker build file
├── docker-compose.yml             # Docker Compose config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Docker & Docker Compose (optional)

### Local Development

```bash
# Clone the repository
git clone https://github.com/hellogunawan99/gunalabs.git
cd gunalabs

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3040
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Stop containers
docker-compose down

# Rebuild containers
docker-compose up -d --build
```

The app will be available at **http://localhost:3040**

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/[locale]` | Hero, services overview, products, about, testimonials |
| Services | `/[locale]/services` | Detailed service offerings with process workflow |
| Products | `/[locale]/products` | Product catalog with category filters |
| Contact | `/[locale]/contact` | Contact form and company information |

---

## 🎨 Customization

### Adding New Languages

1. Create translation file: `src/messages/ko.json`
2. Update `src/i18n.ts`:

```typescript
export const locales = ['en', 'id', ..., 'ko'] as const;
export const localeNames: Record<Locale, string> = {
  // ...existing languages
  ko: '한국어',
};
```

3. Update `middleware.ts` to include the new locale

### Theming

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 79 70 229;      /* Primary brand color */
  --secondary: 6 182 212;     /* Secondary color */
  --accent: 249 115 22;       /* Accent color */
  --background: 255 255 255;   /* Background */
  --foreground: 0 0 0;        /* Text color */
}
```

### Adding New Components

Place new components in appropriate directories:
- `src/components/ui/` - Reusable UI elements
- `src/components/layout/` - Layout components
- `src/components/sections/` - Page section components

---

## 📊 Stats

| Metric | Value |
|--------|-------|
| Languages | 11 |
| Translation Files | 11 |
| Components | 15+ |
| Pages | 4 |
| Docker Ready | ✅ |

---

## 🔗 Links

- **Live Demo**: http://localhost:3040
- **GitHub**: https://github.com/hellogunawan99/gunalabs
- **Website**: https://gunalabs.io
- **Email**: hello@gunalabs.io

---

## 📝 License

Private project. All rights reserved © 2024 Gunalabs.

---

Built with ❤️ using Next.js 16
