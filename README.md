# DupeMe AI — Next.js Landing Page

A pixel-perfect Next.js 14 port of the DupeMe AI landing page.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display + DM Sans

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
dupeme-ai/
├── app/
│   ├── layout.tsx        # Root layout with fonts + metadata
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Global styles, animations, CSS variables
├── components/
│   ├── NeuralCanvas.tsx       # Animated neural network background (canvas)
│   ├── BackgroundGradients.tsx # Fixed radial gradient blobs
│   ├── CustomCursor.tsx       # Custom blush cursor + trailing ring
│   ├── ScrollRevealInit.tsx   # IntersectionObserver scroll reveal
│   ├── useScrollReveal.ts     # Scroll reveal hook
│   ├── Navbar.tsx             # Fixed nav with scroll blur effect
│   ├── Hero.tsx               # Hero section with floating card + orbits
│   ├── Marquee.tsx            # Infinite scrolling text ticker
│   ├── Problem.tsx            # Problem cards grid
│   ├── Solution.tsx           # Sticky solution layout
│   ├── PhoneMockup.tsx        # Animated chat conversation
│   ├── Platforms.tsx          # Platform pills + flow diagram
│   ├── Comparison.tsx         # Pricing comparison table
│   ├── Pricing.tsx            # Pricing cards
│   └── CTAFooter.tsx          # CTA section + footer
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Customisation

- **Colors**: Edit CSS variables in `globals.css` (`:root` block)
- **Fonts**: Change in `app/layout.tsx` and `tailwind.config.ts`
- **Content**: Each section is its own isolated component
- **Animations**: All keyframes defined in `globals.css`

## Notes

- Replace the hero card illustration placeholder with a real image
- Replace the video demo placeholder with an actual `<video>` element
- The "Book a free call" buttons should link to your booking URL (e.g. Calendly)
- Requires an internet connection on first run to fetch Google Fonts
