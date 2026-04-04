# Gunalabs Website

Building tomorrow's technology today. A modern, multi-language corporate website for Gunalabs - a technology company specializing in application development, digitalization solutions, AI integration, hardware products, and digital products.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=flat-square&logo=framer&logoColor=white)

## ✨ Features

- **Multi-language Support** - 11 languages with SEO-friendly URLs
- **Dark/Light Mode** - Persistent theme toggle
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion transitions
- **Modern Tech Stack** - Next.js 16 with App Router

## 🌐 Supported Languages

| Language | Code | URL |
|----------|------|-----|
| English | `en` | `/en` |
| Bahasa Indonesia | `id` | `/id` |
| 中文 (Chinese) | `zh` | `/zh` |
| 日本語 (Japanese) | `ja` | `/ja` |
| ไทย (Thai) | `th` | `/th` |
| Tiếng Việt (Vietnamese) | `vi` | `/vi` |
| Español (Spanish) | `es` | `/es` |
| Deutsch (German) | `de` | `/de` |
| Français (French) | `fr` | `/fr` |
| العربية (Arabic) | `ar` | `/ar` |
| Português (Portuguese) | `pt` | `/pt` |

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Fonts**: Geist Sans/Mono (Next.js)

## 📁 Project Structure

```
gunalabs/
├── src/
│   ├── app/
│   │   └── [locale]/          # Localized routes
│   │       ├── page.tsx         # Home page
│   │       ├── services/         # Services page
│   │       ├── products/         # Products page
│   │       └── contact/         # Contact page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Header, Footer, etc.
│   │   └── sections/           # Page sections
│   ├── messages/                # Translation files
│   ├── data/                    # Static data
│   └── lib/                     # Utilities
├── middleware.ts                # i18n routing
└── next.config.ts              # Next.js config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hellogunawan99/gunalabs.git
cd gunalabs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`) - Hero, services, products, about, testimonials
- **Services** (`/services`) - Detailed service offerings
- **Products** (`/products`) - Product catalog with filters
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Adding New Languages

1. Create a new translation file in `src/messages/` (e.g., `ko.json`)
2. Add the locale to `src/i18n.ts` in the `locales` array
3. Add the locale name in `localeNames`
4. Update `middleware.ts` to include the new locale

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 79 70 229;    /* Indigo */
  --secondary: 6 182 212;  /* Cyan */
  --accent: 249 115 22;  /* Orange */
}
```

## 📝 License

This project is private and proprietary to Gunalabs.

## 👤 Author

**Gunalabs**
- Website: [gunalabs.io](https://gunalabs.io)
- Email: hello@gunalabs.io
