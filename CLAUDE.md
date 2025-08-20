# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two implementations of the trigub.tech website:

1. **TypeScript/React Version (Root Directory)** - Modern Next.js web application with mobile-first design
2. **Flutter Version (flutter/ Directory)** - Original Flutter web application with responsive design

The primary development focus is on the TypeScript version in the root directory.

## Repository Structure

```
trigubtech/
├── src/                    # TypeScript/React application (PRIMARY)
├── flutter/               # Flutter application (LEGACY)
├── images/               # Shared image assets
├── fonts/               # Shared font files
└── deployment_commands.txt # Deployment instructions
```

## TypeScript/React Development (Primary)

### Development Commands
- `npm install` or `pnpm install` - Install dependencies
- `npm run dev` - Start Vite development server
- `npm run build` - TypeScript compile and Vite build for production
- `npm run serve` - Preview production build locally
- `npm run lint` - Run ESLint

### Architecture
- **Framework**: Vite + React with React Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Email**: EmailJS for contact forms

### Key Directories (TypeScript)
- `/src/` - Main application source code
- `/src/components/` - Reusable React components
- `/src/types/` - TypeScript type definitions
- `/src/utils/` - Constants and utility functions
- `/src/main.tsx` - React application entry point
- `/src/App.tsx` - Main App component with routing
- `index.html` - Vite entry point (root level)
- `vite.config.mts` - Vite configuration
- `dist/` - Built output directory (generated)

### Core Dependencies (TypeScript)
- `vite` - Fast build tool and dev server
- `react` & `react-dom` - React library
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework
- `@emailjs/browser` - Email service integration

### Component Architecture (TypeScript)
- **Layout Components**: Header, Footer, Layout wrapper
- **Interactive Components**: StatementBox, ExpandableCard, ProjectCard, TimelineCard, ServiceCard
- **Animation Components**: AnimatedSection, StaggeredChildren, CountUp, Typewriter
- **Section Components**: HeroSection, ModernIntroSection, ModernServicesSection, AboutSection, ContactCTASection
- **Form Components**: ContactForm with EmailJS integration
- **Page Components**: Mobile-first responsive design

## Flutter Development (Legacy)

### Development Commands (from flutter/ directory)
- `flutter pub get` - Install dependencies
- `flutter analyze` - Run static analysis
- `flutter test` - Run tests
- `flutter build web --release` - Build for production
- `flutter run -d web-server --web-hostname 0.0.0.0 --web-port 8080` - Run development server

### Flutter Architecture
- **Framework**: Stacked MVVM architecture
- **Responsive**: Separate mobile/desktop layouts
- **Navigation**: Auto-generated routing
- **State Management**: Stacked services and dependency injection

### Key Directories (Flutter)
- `/flutter/lib/ui/views/` - Main application views
- `/flutter/lib/ui/common/` - Shared UI components and constants
- `/flutter/lib/ui/widgets/` - Reusable widget components
- `/flutter/lib/extensions/` - Flutter widget extensions
- `/flutter/lib/utils/` - Utility functions

## Shared Assets

### Images
- Located in `/images/` directory (shared between both implementations)
- Multiple size variants available in subdirectories
- Service images: `services_*.jpg`
- Project images: Various project and PoC images
- Profile images: `me1.jpg`, `eng1.jpg`, `eng2.jpg`

### Fonts
- Located in `/fonts/` directory
- Dosis font family (multiple weights)
- Used consistently across both implementations

## Deployment

### TypeScript Deployment
- Target: Static hosting (Vercel, Netlify, GitHub Pages, etc.)
- Build command: `npm run build`
- Output: Static files in `dist/` directory
- Preview: `npm run serve` for local testing

### Flutter Deployment (Legacy)
- Target: DreamHost via SSH
- Build and deployment:
```bash
cd flutter && flutter build web --release && cd build/web && scp -r ./* dh_kn6hnk@pdx1-shared-a1-44.dreamhost.com:trigub.tech
```

## Development Workflow

1. **Primary Development**: Work in TypeScript/React version (root directory)
2. **Legacy Maintenance**: Flutter version available for reference in `flutter/` directory
3. **Asset Management**: Update shared assets in `/images/` and `/fonts/` as needed
4. **Modern Features**: All new features should be implemented in TypeScript version

## Key Features (TypeScript Version)

### Mobile-First Design
- Responsive breakpoints from mobile up
- Touch-friendly interactions
- Modern navigation with slide-out drawer
- Optimized typography and spacing

### Interactive Components
- **StatementBox**: Hover effects with smooth animations
- **ExpandableCard**: Click-to-expand content with height transitions
- **ProjectCard**: Interactive project showcases with structured data
- **TimelineCard**: Timeline visualization for about section

### Animation System
- **Scroll-triggered animations**: Components animate in when visible
- **Hover interactions**: Scale, color, and shadow transitions
- **Page transitions**: Smooth navigation between routes
- **Staggered reveals**: Sequential animation of multiple elements

### Vite Development Benefits
- **Lightning-fast HMR**: Instant hot module replacement during development
- **Native ESM**: Uses ES modules for faster development server startup
- **TypeScript support**: First-class TypeScript support out of the box
- **CSS preprocessing**: Built-in support for Tailwind and PostCSS
- **Path aliases**: `@/` alias configured for clean imports

### Performance Optimizations
- **Vite optimizations**: Fast HMR and optimized production builds
- **Code splitting**: Automatic with Vite and React lazy loading
- **Bundle optimization**: Tree shaking and minification
- **Type safety**: Full TypeScript coverage
- **Modern CSS**: Tailwind for optimal bundle size
- **Static generation**: Pure static site for fast loading