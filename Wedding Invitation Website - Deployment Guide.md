# Wedding Invitation Website - Deployment Guide

## 📦 What You Have

Your complete wedding invitation website with:
- Interactive envelope opening animation
- Scrolling sections with couple names, date, and location
- Floating balloons, confetti, and particle effects
- Premium animations and decorative elements
- Fully mobile-responsive design
- Beautiful pink and gold color scheme

---

## 🚀 Quick Start (Recommended for Beginners)

### Option 1: Deploy to Vercel (Easiest - Free)

1. **Create a Vercel account** at https://vercel.com
2. **Connect your GitHub** (or upload files directly)
3. **Click "Import Project"** and select this folder
4. **Vercel will auto-detect it's a React app** - just click Deploy
5. **You'll get a live URL** in seconds
6. **Connect your domain** in Vercel settings

**Time: 5 minutes**

---

### Option 2: Deploy to Netlify (Also Easy - Free)

1. **Create a Netlify account** at https://netlify.com
2. **Drag and drop the entire folder** into Netlify
3. **It will auto-build and deploy**
4. **Connect your domain** in Netlify settings

**Time: 3 minutes**

---

### Option 3: Deploy to Railway (Free Tier Available)

1. **Create account** at https://railway.app
2. **Connect your GitHub repo** with these files
3. **Railway auto-detects Node.js project**
4. **Click Deploy**
5. **Connect domain** in Railway dashboard

**Time: 5 minutes**

---

## 🔧 Manual Setup (If Deploying to Your Own Server)

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Steps

1. **Extract the zip file**
   ```bash
   unzip wedding_invitation_files.zip
   cd wedding_invitation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Build the project**
   ```bash
   npm run build
   # or
   pnpm build
   ```

4. **Start the server**
   ```bash
   npm start
   # or
   pnpm start
   ```

5. **Access at** `http://localhost:3000`

---

## 🌐 Connect Your Domain (aimenhanane.online)

### For Vercel/Netlify/Railway:

1. **Go to your hosting dashboard**
2. **Find "Domains" or "Custom Domain" section**
3. **Add your domain**: `aimenhanane.online`
4. **Follow their instructions** to update Namecheap DNS
5. **Wait 24-48 hours** for DNS propagation

### For Namecheap DNS Update:

1. **Log into Namecheap**
2. **Go to your domain settings**
3. **Find "Nameservers"** section
4. **Replace with the nameservers** your hosting provider gives you
5. **Save changes**
6. **Wait for DNS to propagate** (usually 24-48 hours, sometimes minutes)

---

## 📝 Important Files

- **`client/src/pages/Home.tsx`** - Main page with envelope
- **`client/src/components/OrnateEnvelope.tsx`** - Envelope animation
- **`client/src/components/WeddingInfoDeluxe.tsx`** - Wedding details sections
- **`client/src/index.css`** - All styling and animations
- **`package.json`** - Project dependencies

---

## 🎨 Customization

### Change Couple Names & Details

Edit `client/src/pages/Home.tsx`:

```tsx
<WeddingInfoDeluxe
  brideName="Hanane Niat"           // Change this
  groomName="Adjabi Mohamed Amine"  // Change this
  date="19.09.2026"                 // Change this
  location="Elbouni, Annaba"        // Change this
  salleName="######"                // Change this
/>
```

### Change Colors

Edit `client/src/index.css` and find the color definitions:
- `#E94B7E` = Rose Pink (main color)
- `#F4D03F` = Champagne Gold (accent)
- `#F5D5E3` = Soft Blush (background)

Replace with your preferred colors throughout the file.

### Adjust Animations

Edit individual component files in `client/src/components/`:
- Look for `animate={}` properties
- Modify `duration`, `delay`, and `transition` values

---

## 🐛 Troubleshooting

### "npm install" fails
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Build fails
```bash
npm run check  # Check for TypeScript errors
npm run format # Format code
npm run build  # Try building again
```

---

## 📱 Testing

1. **Test on desktop** - Open `http://localhost:3000`
2. **Test on mobile** - Use Chrome DevTools (F12) → Toggle device toolbar
3. **Test the envelope** - Click to open and scroll
4. **Check animations** - Scroll through all sections

---

## ✅ Pre-Deployment Checklist

- [ ] All couple names and details are correct
- [ ] Date is correct (19.09.2026)
- [ ] Location and venue name are correct
- [ ] Tested on desktop and mobile
- [ ] Envelope opens smoothly
- [ ] All animations play correctly
- [ ] Domain is registered and ready

---

## 🎯 Next Steps After Deployment

1. **Share the link** with your guests
2. **Test from different devices** (phones, tablets, desktops)
3. **Consider adding** RSVP form or guest book (requires backend)
4. **Monitor** for any issues

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Railway Docs**: https://railway.app/docs
- **React Docs**: https://react.dev

---

**Your wedding website is ready to wow your guests! 🎉💕**
