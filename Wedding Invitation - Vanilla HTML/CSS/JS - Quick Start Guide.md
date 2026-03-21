# Wedding Invitation - Vanilla HTML/CSS/JS - Quick Start Guide

## ✨ What You Have

A complete, ready-to-use wedding invitation website with:
- **Pure HTML/CSS/JavaScript** - No React, no dependencies, no build tools
- **Interactive envelope** - Click to open
- **Scrolling sections** - Couple names, date, location, celebration
- **Advanced animations** - Balloons, confetti, sparkles, particle effects
- **Mobile responsive** - Works on all devices
- **Easy to customize** - Just edit text and colors

## 🚀 Fastest Way to Launch (2 Minutes)

### Step 1: Extract Files
- Unzip `wedding_vanilla_html.zip`
- You'll have 4 files: `index.html`, `styles.css`, `script.js`, `README.md`

### Step 2: Test Locally
- Double-click `index.html` to open in your browser
- Click the envelope to open it
- Scroll down to see all sections
- ✅ Everything works!

### Step 3: Deploy (Choose One)

#### Option A: Vercel (Easiest - 3 minutes)
1. Go to https://vercel.com
2. Click "New Project"
3. Upload the folder
4. Click Deploy
5. You get a live URL instantly

#### Option B: Netlify (Also Easy - 2 minutes)
1. Go to https://netlify.com
2. Drag and drop the folder
3. It deploys automatically
4. You get a live URL instantly

#### Option C: GitHub Pages (Free - 5 minutes)
1. Create a GitHub account (if needed)
2. Create a new repository
3. Upload these files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site is live at: `username.github.io/repo-name`

## 🌐 Connect Your Domain (aimenhanane.online)

### After deploying to Vercel/Netlify:

1. **Go to your hosting dashboard** (Vercel or Netlify)
2. **Find "Domains" or "Custom Domain" section**
3. **Add your domain**: `aimenhanane.online`
4. **Follow their instructions** to update Namecheap DNS
5. **Wait 24-48 hours** for DNS to propagate (usually faster)

### Update Namecheap:

1. Log into https://namecheap.com
2. Go to your domain settings
3. Find "Nameservers" section
4. Replace with the nameservers from Vercel/Netlify
5. Save changes

## ✏️ Customize Your Website

### Change Names & Details

Open `index.html` with any text editor:

**Find this:**
```html
<h1 class="couple-name">Hanane Niat</h1>
```
**Change to:**
```html
<h1 class="couple-name">Your Bride's Name</h1>
```

**Find this:**
```html
<h1 class="couple-name">Adjabi Mohamed Amine</h1>
```
**Change to:**
```html
<h1 class="couple-name">Your Groom's Name</h1>
```

**Find this:**
```html
<p class="date-text">19th September 2026</p>
```
**Change to:**
```html
<p class="date-text">Your Wedding Date</p>
```

**Find this:**
```html
<p class="location-text">Elbouni, Annaba</p>
```
**Change to:**
```html
<p class="location-text">Your City, Your Country</p>
```

**Find this:**
```html
<p class="venue-text">Salle: ######</p>
```
**Change to:**
```html
<p class="venue-text">Salle: Your Venue Name</p>
```

### Change Colors

Open `styles.css` with any text editor and find these color codes:

- `#E94B7E` = Rose Pink (main color)
- `#F4D03F` = Champagne Gold (accent)
- `#D4346B` = Deep Rose (secondary)
- `#F5D5E3` = Soft Blush (background)

Use Find & Replace (Ctrl+H) to change all instances:

**Example:** Replace all `#E94B7E` with `#FF1493` (your color)

## 📱 Test on Mobile

1. **Desktop:** Open `index.html` in your browser
2. **Mobile:** 
   - Open the deployed URL on your phone
   - Or use Chrome DevTools (F12) → Toggle device toolbar
   - Test on iPhone and Android if possible

## 🎯 Testing Checklist

- [ ] Envelope opens when clicked
- [ ] Confetti appears when envelope opens
- [ ] Scroll down to see all sections
- [ ] Balloons float up
- [ ] Animations are smooth
- [ ] Text is readable on mobile
- [ ] Back-to-top button appears when scrolling
- [ ] All names and dates are correct

## 📤 Share with Guests

Once deployed, share this link:
```
https://aimenhanane.online
```

Or the temporary Vercel/Netlify URL if you haven't connected your domain yet.

## 🆘 Troubleshooting

### Envelope doesn't open
- Make sure JavaScript is enabled
- Try a different browser
- Check browser console (F12) for errors

### Colors don't change
- Make sure you saved the file
- Refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache

### Animations are choppy
- Close other browser tabs
- Try a different browser
- Reduce particle count in `script.js` (change `40` to `20`)

### Domain not working
- Wait 24-48 hours for DNS propagation
- Check that nameservers are correct in Namecheap
- Try clearing DNS cache (restart router)

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main page structure (edit names, dates here) |
| `styles.css` | All styling and animations (edit colors here) |
| `script.js` | All interactions (usually don't need to edit) |
| `README.md` | Full documentation |

## 🎨 Customization Examples

### Make Balloons Faster
In `styles.css`, find:
```css
animation: float 6s ease-in infinite;
```
Change `6s` to `4s` (faster) or `8s` (slower)

### Add More Balloons
In `script.js`, find:
```javascript
const balloonCount = 12;
```
Change `12` to `20` for more balloons

### Change Confetti Amount
In `script.js`, find:
```javascript
const confettiCount = 50;
```
Change `50` to more or less confetti pieces

## ✅ Pre-Launch Checklist

- [ ] Extract all files
- [ ] Test locally (double-click index.html)
- [ ] Customize names and details
- [ ] Change colors if desired
- [ ] Deploy to Vercel or Netlify
- [ ] Connect custom domain
- [ ] Test on mobile
- [ ] Share link with guests
- [ ] Celebrate! 🎉

## 🎉 You're All Set!

Your wedding invitation website is ready to impress your guests!

**Questions?** Check the full `README.md` file for more details.

---

**Happy wedding! 💕**

Hanane & Amine - 19.09.2026
