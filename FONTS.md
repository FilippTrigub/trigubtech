# Font Configuration Guide

Your website now supports three custom fonts with individual control for different text types (titles, body text, accents). Here's how to configure fonts:

## Available Fonts

1. **VCR OSD Mono** (Currently Active)
   - Type: Monospace/Tech
   - Style: Retro, code-like appearance
   - Best for: Tech/gaming aesthetic

2. **Ithaca** 
   - Type: Serif
   - Style: Classical, elegant
   - Best for: Professional, academic look

3. **Medodica**
   - Type: Sans-serif  
   - Style: Modern, clean
   - Best for: Contemporary, minimalist design

## How to Configure Fonts for Different Text Types

### Method 1: Individual Font Control (Recommended)

Edit `/src/utils/constants.ts` and change the `FONT_CONFIG` values:

```typescript
export const FONT_CONFIG = {
  // Main titles and headings (like "I Turn Your Ideas into Bots")
  TITLE_FONT: 'font-medodica',     // Current: Medodica
  // TITLE_FONT: 'font-ithaca',    // Option: Ithaca (elegant)
  // TITLE_FONT: 'font-vcr-osd',   // Option: VCR OSD Mono (tech)
  
  // Body text and descriptions
  BODY_FONT: 'font-vcr-osd',       // Current: VCR OSD Mono
  // BODY_FONT: 'font-medodica',   // Option: Medodica (clean)
  // BODY_FONT: 'font-ithaca',     // Option: Ithaca (classical)
  
  // Accent text and special elements  
  ACCENT_FONT: 'font-ithaca',      // Current: Ithaca
  // ACCENT_FONT: 'font-medodica', // Option: Medodica
  // ACCENT_FONT: 'font-vcr-osd',  // Option: VCR OSD Mono
};
```

### Method 2: Direct Font Classes

You can also use font classes directly in components:
- `font-medodica` - Modern sans-serif
- `font-ithaca` - Classical serif  
- `font-vcr-osd` - Retro monospace

### Method 3: Global Body Font

Edit `/src/app/globals.css` to change the default body font:

```css
body {
  font-family: 'Medodica', sans-serif;     /* Current */
  /* font-family: 'Ithaca', serif;        Alternative: Ithaca */
  /* font-family: 'VCR OSD Mono', monospace; Alternative: VCR OSD */
}
```

## What Gets Updated

With the new font configuration system:

**TITLE_FONT controls:**
- "I Turn Your Ideas into Bots" main heading
- Website title in header/navigation
- Section headings and titles
- Statement box group titles

**BODY_FONT controls:**
- Description text under main heading
- Statement box content
- Body paragraphs and descriptions
- Most regular text content

**ACCENT_FONT controls:**
- Special accent elements
- Decorative text
- Emphasis text

## Current Configuration

- **Titles**: Medodica (modern, clean)
- **Body Text**: VCR OSD Mono (retro, tech)
- **Accents**: Ithaca (classical, elegant)

This gives you a unique mix: modern titles, tech-style body text, and elegant accents!

## Font Files Location

Font files are stored in:
- Source: `/fonts/` directory
- Public (served): `/public/fonts/` directory

## Font Declarations

All fonts are declared in `/src/app/globals.css` with proper fallbacks and loading optimization.

## Testing Fonts

1. Choose your preferred font using Method 1 above
2. Run `npm run dev` to start the development server
3. View the website to see the new font in action
4. If you want to try a different font, repeat the process

## Troubleshooting

- **Font not loading**: Make sure the font file exists in `/public/fonts/`
- **Font looks broken**: Check browser dev tools console for loading errors
- **Changes not showing**: Clear browser cache or hard refresh (Ctrl+F5)

## Example Combinations

**Professional Look:**
```typescript
TITLE_FONT: 'font-ithaca',    // Elegant titles
BODY_FONT: 'font-medodica',   // Clean body text
ACCENT_FONT: 'font-ithaca',   // Consistent accents
```

**Tech/Gaming Style:**
```typescript
TITLE_FONT: 'font-vcr-osd',   // Tech titles
BODY_FONT: 'font-vcr-osd',    // Tech body
ACCENT_FONT: 'font-vcr-osd',  // Consistent tech
```

**Mixed Style (Current):**
```typescript
TITLE_FONT: 'font-medodica',  // Modern titles
BODY_FONT: 'font-vcr-osd',    // Tech body
ACCENT_FONT: 'font-ithaca',   // Elegant accents
```