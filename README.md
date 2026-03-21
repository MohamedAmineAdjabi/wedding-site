# Wedding Invitation Website - Pure HTML/CSS/JS

A stunning, fully-animated wedding invitation website built with **pure HTML, CSS, and vanilla JavaScript** - no frameworks, no dependencies, no build tools required!

## 🎉 Features

- **Interactive Envelope** - Click to open with smooth 3D animation
- **Scrolling Sections** - Couple names, date, location, and celebration message
- **Advanced Animations** - Floating balloons, confetti, sparkles, and particle effects
- **Premium Styling** - Rose pink and gold color scheme with ornate frames
- **Mobile Responsive** - Perfect on all devices (phones, tablets, desktops)
- **Smooth Interactions** - Hover effects, scroll progress, back-to-top button
- **No Dependencies** - Pure vanilla code, works everywhere

## 📁 Files Included

```
wedding_invitation/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # All JavaScript interactions
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Open Locally (Easiest)
1. Download all files
2. Double-click `index.html` to open in your browser
3. Done! No installation needed

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```
Then open: `http://localhost:8000`

## 🌐 Deploy to Web

### Option A: Vercel (Easiest - Free)
1. Go to https://vercel.com
2. Click "New Project"
3. Upload this folder
4. Click Deploy
5. Connect your domain in settings

### Option B: Netlify (Also Easy - Free)
1. Go to https://netlify.com
2. Drag and drop this folder
3. It deploys automatically
4. Connect your domain in settings

### Option C: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload these files
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Your site is live at `username.github.io/repo-name`

### Option D: Any Web Host
1. Upload all files via FTP
2. Make sure `index.html` is in the root directory
3. Visit your domain

## ✏️ Customization

### Change Couple Names & Details

Open `index.html` and find these lines:

```html
<h1 class="couple-name">Hanane Niat</h1>
<!-- Change to your bride's name -->

<h1 class="couple-name">Adjabi Mohamed Amine</h1>
<!-- Change to your groom's name -->

<p class="date-text">19th September 2026</p>
<!-- Change the date -->

<p class="location-text">Elbouni, Annaba</p>
<!-- Change the location -->

<p class="venue-text">Salle: ######</p>
<!-- Change the venue name -->
```

### Change Colors

Open `styles.css` and find the color definitions:

```css
/* Main color - Rose Pink */
#E94B7E

/* Accent color - Champagne Gold */
#F4D03F

/* Secondary color - Deep Rose */
#D4346B

/* Background - Soft Blush */
#F5D5E3
```

Replace these colors throughout the file with your preferred colors.

### Adjust Animation Speed

In `styles.css`, look for `animation-duration` and `animation-delay` properties:

```css
animation: float 6s ease-in infinite;  /* Change 6s to make balloons faster/slower */
animation-duration: 2s;                /* Change timing */
```

### Add More Balloons

In `script.js`, find this line:

```javascript
const balloonCount = 12;  // Change this number
```

### Customize Confetti

In `script.js`, find the `triggerConfetti()` function:

```javascript
const confettiCount = 50;  // Change number of pieces
```

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly envelope sizing
- Touch support for envelope opening
- Optimized animations for mobile devices
- Reduced particle effects on small screens

## 🔧 Troubleshooting

### Envelope doesn't open
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)
- Try a different browser

### Animations are slow
- Close other browser tabs
- Clear browser cache
- Try a different browser
- Reduce particle count in `script.js`

### Images not loading
- Check that the image URL in `styles.css` is correct
- Make sure you have internet connection
- Try uploading a local image instead

### Domain not connecting
- Wait 24-48 hours for DNS propagation
- Check your domain registrar settings
- Verify nameservers are correct

## 📝 File Descriptions

### index.html
Contains the HTML structure:
- Envelope section
- Wedding information sections
- Containers for animations and effects

### styles.css
Contains all styling:
- Color scheme and typography
- Envelope and frame styling
- All animations and keyframes
- Responsive design rules
- Mobile optimizations

### script.js
Contains all JavaScript:
- Envelope interaction logic
- Balloon and particle generation
- Scroll progress tracking
- Confetti effects
- Mobile touch support
- Performance optimizations

## 🎨 Design Details

**Color Scheme:**
- Rose Pink: `#E94B7E` (primary)
- Champagne Gold: `#F4D03F` (accent)
- Deep Rose: `#D4346B` (secondary)
- Soft Blush: `#F5D5E3` (background)
- Off-White: `#FAFAF8` (light background)

**Typography:**
- Headings: Playfair Display (elegant serif)
- Body: Poppins (modern sans-serif)

**Animations:**
- Envelope opening: 600ms cubic-bezier
- Balloon float: 6-10 seconds
- Confetti fall: 2-3 seconds
- Particle sparkle: 4-8 seconds
- Scroll progress: smooth update

## 🚀 Performance

- **No external dependencies** - Everything is self-contained
- **Lightweight** - Total size ~50KB
- **Fast loading** - No build process needed
- **Optimized animations** - Uses requestAnimationFrame for smooth 60fps
- **Mobile friendly** - Reduced effects on small screens

## 📞 Support

If you encounter issues:

1. **Check browser console** - Press F12, go to Console tab
2. **Try a different browser** - Chrome, Firefox, Safari, Edge
3. **Clear browser cache** - Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
4. **Disable extensions** - Ad blockers can interfere
5. **Check file paths** - Make sure all files are in the same folder

## ✅ Pre-Launch Checklist

- [ ] All couple names are correct
- [ ] Date is correct
- [ ] Location and venue name are correct
- [ ] Colors match your preference
- [ ] Tested on desktop
- [ ] Tested on mobile (iPhone, Android)
- [ ] Tested envelope opening
- [ ] Tested scrolling and animations
- [ ] Domain is connected (if using custom domain)
- [ ] Shared link with guests

## 📄 License

This wedding invitation website is free to use and customize for your special day!

---

**Made with ❤️ for your wedding celebration**

Hanane & Amine - 19.09.2026
Elbouni, Annaba
