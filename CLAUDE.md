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
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React

### Key Directories (TypeScript)
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Reusable React components
- `/src/types/` - TypeScript type definitions
- `/src/utils/` - Constants and utility functions

### Core Dependencies (TypeScript)
- `next` - React framework with SSR/SSG
- `react` & `react-dom` - React library
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework

### Component Architecture (TypeScript)
- **Layout Components**: Header, Footer, Layout wrapper
- **Interactive Components**: StatementBox, ExpandableCard, ProjectCard, TimelineCard
- **Animation Components**: AnimatedSection, StaggeredChildren, CountUp, Typewriter
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
- Target: Modern web hosting (Vercel, Netlify, etc.)
- Build command: `npm run build`
- Static export or server-side rendering

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

### Performance Optimizations
- **Next.js optimizations**: Automatic code splitting and lazy loading
- **Image optimization**: Next.js Image component with responsive images
- **Type safety**: Full TypeScript coverage
- **Modern CSS**: Tailwind for optimal bundle size