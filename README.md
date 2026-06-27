# LOOP MARKETING — Premium Marketing Agency Website

A production-ready, vibrant, interactive marketing agency website built with Next.js, React, Framer Motion, and Tailwind CSS.

## 🎨 Design Features

- **Premium Dark Theme** — Sophisticated `#070B16` primary background with vibrant accents
- **Animated Particle Background** — Floating particles in hero section
- **Glassmorphism Effects** — Frosted glass UI components
- **Gradient Animations** — Dynamic color transitions (Blue → Purple → Cyan)
- **Smooth Interactions** — Hover effects, card expansion, animated counters
- **Fully Responsive** — Mobile-first design, works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MuhammadSaaib/loop-marketing.git
cd loop-marketing

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit **http://localhost:3000** to see the live website.

## 📁 Project Structure

```
loop-marketing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with particle background
│   ├── Services.tsx        # Horizontal scrolling service cards
│   ├── About.tsx           # About section with animated counters
│   ├── Process.tsx         # Interactive timeline/process
│   ├── Portfolio.tsx       # Case study cards
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer with links
│   └── ParticleBackground.tsx  # Canvas particle animation
├── tailwind.config.ts      # Tailwind configuration with custom colors
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Color System

```
Primary Background:  #070B16
Secondary Surface:   #111827
Accent Blue:         #3B82F6
Accent Cyan:         #00E5FF
Accent Purple:       #8B5CF6
Accent Pink:         #FF4FD8
Text Primary:        #F8FAFC
Text Muted:          #B6C2D9
```

## 📚 Sections

1. **Hero** — Full-screen animated introduction with particle effects
2. **Services** — Horizontal scrolling cards with 7 service offerings
3. **About** — Split layout with team info and animated stats
4. **Process** — Interactive 6-stage timeline/loop
5. **Portfolio** — 4 case study cards with results
6. **CTA** — Full-width call-to-action section
7. **Footer** — Navigation, socials, and links

## 🛠️ Tech Stack

- **Next.js 14** — React framework with server-side rendering
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library
- **Lucide React** — Icon library

## ✨ Features

✅ Smooth scrolling animations  
✅ Card hover effects and expansion  
✅ Animated gradient text  
✅ Horizontal snap scroll (services)  
✅ Animated counter components  
✅ Interactive timeline  
✅ Glassmorphism effects  
✅ Particle system  
✅ Mobile responsive  
✅ Dark mode premium aesthetic  

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
# Simply push to GitHub and connect to Vercel
```

## 🎯 Customization

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  accent: {
    blue: '#3B82F6',  // Change these
    cyan: '#00E5FF',
    purple: '#8B5CF6',
    pink: '#FF4FD8',
  }
}
```

### Edit Content
- Hero: `components/Hero.tsx`
- Services: `components/Services.tsx` (update `services` array)
- Portfolio: `components/Portfolio.tsx` (update `caseStudies` array)

## 📝 License

Private — LOOP MARKETING

## 👥 Built By

LOOP MARKETING  
Small team. Global ambition.

---

**Ready to deploy?** Push to GitHub and connect to [Vercel](https://vercel.com) for instant deployment! 🚀
