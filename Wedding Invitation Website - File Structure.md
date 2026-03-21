# Wedding Invitation Website - File Structure

## 📁 Project Layout

```
wedding_invitation/
├── client/                          # Frontend code
│   ├── index.html                   # Main HTML file
│   ├── public/                      # Static files
│   │   └── favicon.ico
│   └── src/
│       ├── main.tsx                 # React entry point
│       ├── App.tsx                  # Main app component
│       ├── index.css                # ALL STYLING & ANIMATIONS
│       ├── pages/
│       │   ├── Home.tsx             # Main wedding page
│       │   └── NotFound.tsx         # 404 page
│       ├── components/
│       │   ├── OrnateEnvelope.tsx       # Interactive envelope
│       │   ├── WeddingInfoDeluxe.tsx    # Wedding details sections
│       │   ├── Balloons.tsx             # Floating balloons
│       │   ├── DecorativeDivider.tsx    # Section dividers
│       │   ├── AdvancedParticles.tsx    # Sparkles & effects
│       │   ├── PremiumText.tsx          # Text animations
│       │   ├── PremiumButton.tsx        # Styled buttons
│       │   ├── PremiumCard.tsx          # Card components
│       │   ├── OrnateFrame.tsx          # Decorative frames
│       │   ├── FloatingRibbon.tsx       # Floating banners
│       │   ├── ScrollProgress.tsx       # Progress indicator
│       │   ├── AnimatedBackground.tsx   # Background patterns
│       │   ├── ErrorBoundary.tsx        # Error handling
│       │   └── ui/                      # Pre-built UI components
│       ├── contexts/
│       │   └── ThemeContext.tsx     # Theme management
│       ├── hooks/                   # Custom React hooks
│       └── lib/                     # Utility functions
├── server/
│   └── index.ts                     # Express server (production)
├── shared/
│   └── const.ts                     # Shared constants
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite build config
└── README.md                        # Project documentation
```

---

## 🎯 Key Files to Edit

### 1. **client/src/pages/Home.tsx** (Main Page)
**What it does:** Renders the entire wedding invitation page
**Edit for:**
- Adding/removing sections
- Changing component imports
- Adjusting layout

### 2. **client/src/components/OrnateEnvelope.tsx** (Envelope)
**What it does:** Interactive envelope that opens with animation
**Edit for:**
- Changing envelope colors
- Adjusting animation speed
- Modifying seal design

### 3. **client/src/components/WeddingInfoDeluxe.tsx** (Wedding Details)
**What it does:** Shows couple names, date, location, and closing message
**Edit for:**
- Changing couple names
- Updating date and location
- Modifying section text
- Adjusting floating elements

### 4. **client/src/index.css** (ALL STYLING)
**What it does:** Contains all colors, fonts, and animations
**Edit for:**
- Changing color scheme
- Modifying animation speeds
- Adding new animations
- Adjusting typography

### 5. **client/index.html** (HTML Template)
**What it does:** Base HTML file
**Edit for:**
- Changing page title
- Adding Google Fonts
- Modifying meta tags

---

## 🎨 Component Reference

### Envelope & Opening
- **OrnateEnvelope.tsx** - Main envelope with 3D effects
- **AnimatedEnvelope.tsx** - Alternative simpler envelope

### Wedding Information
- **WeddingInfoDeluxe.tsx** - Full wedding details with animations
- **WeddingInfoEnhanced.tsx** - Alternative version

### Animations & Effects
- **AdvancedParticles.tsx** - Sparkles, bubbles, stars
- **Balloons.tsx** - Floating balloons
- **DecorativeDivider.tsx** - Section dividers (floral, ornate, wave)
- **PremiumText.tsx** - Text effects (glow, shimmer, wave, bounce)

### UI Components
- **PremiumButton.tsx** - Styled buttons with hover effects
- **PremiumCard.tsx** - Card components with borders
- **OrnateFrame.tsx** - Decorative frames
- **FloatingRibbon.tsx** - Floating banner ribbons
- **ScrollProgress.tsx** - Progress bar and scroll indicator
- **AnimatedBackground.tsx** - Background patterns

### Utilities
- **ErrorBoundary.tsx** - Error handling
- **ThemeContext.tsx** - Theme management

---

## 🔧 Configuration Files

### **package.json**
- Lists all dependencies
- Defines build and start scripts
- Configure here if you need to add packages

### **tsconfig.json**
- TypeScript configuration
- Usually don't need to change

### **vite.config.ts**
- Build tool configuration
- Handles React setup

### **client/index.html**
- Main HTML template
- Add Google Fonts here if needed

---

## 🎨 Color Scheme

**Primary Colors:**
- Rose Pink: `#E94B7E`
- Deep Rose: `#D4346B`
- Champagne Gold: `#F4D03F`
- Soft Blush: `#F5D5E3`
- Off-White: `#FAFAF8`

**Find & Replace in `index.css`:**
- Search for color hex codes
- Replace with your preferred colors

---

## 📝 How to Make Changes

### Change Couple Names
1. Open `client/src/pages/Home.tsx`
2. Find the `<WeddingInfoDeluxe>` component
3. Change `brideName` and `groomName` props

### Change Colors
1. Open `client/src/index.css`
2. Search for `#E94B7E` (rose pink)
3. Replace all instances with your color
4. Repeat for other colors

### Change Animations
1. Open the component file (e.g., `OrnateEnvelope.tsx`)
2. Find `animate={}` or `transition={}` properties
3. Modify duration, delay, or animation values

### Add New Section
1. Create new component in `client/src/components/`
2. Import in `client/src/pages/Home.tsx`
3. Add to JSX return statement

---

## 🚀 Build & Deploy Scripts

In `package.json`:

```json
{
  "scripts": {
    "dev": "vite --host",           // Local development
    "build": "vite build",           // Build for production
    "start": "node dist/index.js",   // Start production server
    "preview": "vite preview --host", // Preview build locally
    "check": "tsc --noEmit"          // Check TypeScript errors
  }
}
```

---

## 📦 Dependencies

**Main Libraries:**
- **React 19** - UI framework
- **Framer Motion** - Animations
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Vite** - Build tool
- **shadcn/ui** - Pre-built components

---

## 🔍 Finding Things

### To find all animations:
Search for `animate=` in component files

### To find all colors:
Search for `#E94B7E` or `#F4D03F` in `index.css`

### To find all text:
Search for `{brideName}` or `{groomName}` in components

### To find specific component:
Look in `client/src/components/` folder

---

## ✅ Common Edits Checklist

- [ ] Update couple names in `Home.tsx`
- [ ] Update date in `Home.tsx`
- [ ] Update location in `Home.tsx`
- [ ] Update venue name in `Home.tsx`
- [ ] Change colors in `index.css` if desired
- [ ] Adjust animation speeds in component files
- [ ] Update page title in `index.html`
- [ ] Test all changes locally with `npm run dev`

---

**Happy customizing! 🎉💕**
