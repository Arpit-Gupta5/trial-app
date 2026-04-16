# Deployment Guide for Trial App

This guide will walk you through deploying your React application to various hosting platforms.

## Prerequisites

Before deploying, make sure you have:
- Node.js and npm installed
- The `build` folder generated (run `npm run build`)
- A GitHub account (optional, for some platforms)

## Building for Production

First, create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized, minified files ready for deployment.

---

## Deployment Options

### 1. **Vercel** (Recommended for React)

Vercel is the creator of Next.js and provides excellent React hosting with automatic CI/CD.

#### Option A: Using Git

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect it's a React app
5. Click "Deploy"
6. Your app will be live at `your-project-name.vercel.app`

#### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your app will be deployed instantly.

**Pros:**
- Free tier with generous limits
- Automatic deployments on git push
- Custom domain support
- Built-in analytics
- Zero-config setup

---

### 2. **Netlify**

Netlify is another excellent platform for static sites and React apps.

#### Option A: GitHub Integration

1. Push your code to GitHub
2. Go to [https://netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Select your repository
5. Set Build Command: `npm run build`
6. Set Publish directory: `build`
7. Click "Deploy site"

#### Option B: Manual Upload

```bash
npm run build
```

Then drag and drop the `build` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop)

#### Option C: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
```

**Pros:**
- Free tier with excellent features
- Easy drag-and-drop deployment
- Great performance
- Built-in analytics
- Automatic HTTPS

---

### 3. **GitHub Pages**

Host your React app for free using GitHub Pages.

#### Setup

1. Add this to `package.json`:
```json
"homepage": "https://yourusername.github.io/trial-app"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Go to repository Settings → Pages → set source to `gh-pages` branch

Your app will be live at `https://yourusername.github.io/trial-app`

**Pros:**
- Completely free
- No server costs
- Integrated with GitHub

**Cons:**
- Basic domain name
- Custom domain costs extra

---

### 4. **AWS S3 + CloudFront**

Best for scalable, high-performance hosting.

#### Steps

1. **Create S3 Bucket:**
   - Go to AWS S3 console
   - Create a new bucket
   - Enable static website hosting
   - Upload contents of `build` folder

2. **Set Bucket Policy** (replace `your-bucket-name`):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

3. **Set Index Document:** `index.html`
4. **Set Error Document:** `index.html` (for SPA routing)

5. **Create CloudFront Distribution:**
   - Origin Domain: Your S3 bucket
   - Default Root Object: `index.html`
   - Viewer Policy: Redirect HTTP to HTTPS
   - Deploy

Your app will be live at your CloudFront URL.

**Pros:**
- Excellent performance
- Global CDN
- Real-time analytics
- Usage-based pricing

---

### 5. **Firebase Hosting**

Google's hosting platform with great features.

#### Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Configure:
- Public directory: `build`
- Single page app: `Yes` (rewrite all URLs to index.html)

4. Deploy:
```bash
npm run build
firebase deploy
```

Your app will be live at `your-project-id.web.app`

**Pros:**
- Free tier with 10GB storage
- Fast global CDN
- Integrated with Google services
- Real-time database option

---

### 6. **Heroku** (Paid Option)

Traditional application hosting platform.

#### Setup

1. Create `Procfile` in root:
```
web: npm start
```

2. Create `.env` (optional):
```
NODE_ENV=production
```

3. Install Heroku CLI and deploy:
```bash
npm install -g heroku
heroku login
heroku create your-app-name
git push heroku main
```

Your app will be live at `your-app-name.herokuapp.com`

**Note:** Heroku is the most expensive option and pay-to-use now.

---

### 7. **Railway**

Modern alternative to Heroku with generous free tier.

#### Setup

1. Go to [https://railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Set environment: `NODE_ENV=production`
6. Deploy

Your app will be live at the provided Railway URL.

---

## Comparison Table

| Platform | Free Tier | Custom Domain | CI/CD | Performance |
|----------|-----------|---------------|-------|-------------|
| Vercel | ✅ Yes | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ |
| Netlify | ✅ Yes | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ |
| GitHub Pages | ✅ Yes | ⚠️ Extra $ | ✅ Yes | ⭐⭐⭐⭐ |
| AWS S3 | ✅ Yes* | ✅ Yes | ⚠️ Manual | ⭐⭐⭐⭐⭐ |
| Firebase | ✅ Yes | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ |
| Heroku | ❌ No | ✅ Yes | ✅ Yes | ⭐⭐⭐ |
| Railway | ✅ Yes | ⚠️ Extra $ | ✅ Yes | ⭐⭐⭐⭐ |

*AWS free tier has limits

---

## Recommended Setup for Beginners

**For fastest setup:** Use **Vercel**
- Connect your GitHub repo
- Automatic deployments on push
- Custom domain setup
- Zero configuration

**For maximum features:** Use **Netlify**
- Easy drag-and-drop
- Great analytics
- Serverless functions available

**For fastest performance:** Use **AWS S3 + CloudFront**
- Global CDN
- Excellent performance
- Best for high-traffic apps

---

## Environment Variables

If your app needs environment variables:

1. Create `.env.local`:
```
REACT_APP_API_URL=https://api.example.com
```

2. Build will include these in the bundle:
```bash
npm run build
```

3. On hosting platforms, set environment variables in settings:
   - Vercel: Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - AWS: S3 metadata or CloudFront functions

---

## Custom Domain Setup

### For Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel will show instructions)

### For Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Update DNS records

### For GitHub Pages
1. Add to `package.json`:
```json
"homepage": "https://yourdomain.com"
```
2. Create file `public/CNAME`:
```
yourdomain.com
```

---

## Performance Optimization

After deployment, optimize performance:

1. **Enable Gzip on server** (checked by default on most platforms)
2. **Use CDN caching** (automatic on Vercel, Netlify, AWS)
3. **Lazy load routes** (use React.lazy)
4. **Optimize images** (use next-gen formats)
5. **Minify code** (automatic with `npm run build`)

---

## Troubleshooting

### Blank page after deployment
- Check browser console for errors
- Ensure `public/index.html` is deployed
- Check `homepage` setting in package.json

### Build fails
- Run `npm install` locally first
- Check Node version matches requirements
- Review build logs on hosting platform

### Routing not working
- Ensure `index.html` is served for 404 errors
- Configure SPA rewrites in hosting settings

---

## Next Steps

1. Deploy your app to your chosen platform
2. Get your live URL
3. Share with others!
4. Add custom domain
5. Monitor analytics
6. Set up CI/CD for automatic deployments

---

## Support Resources

- [React Documentation](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [AWS Documentation](https://aws.amazon.com/documentation)
- [Firebase Docs](https://firebase.google.com/docs)

---

**Ready to deploy? Choose your platform and follow the instructions above!**
