# Abdullah Unaiz - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Setup Instructions

### 1. Initialize Git Repository
```bash
cd c:\Users\ENG.YAHYA\Desktop\projects\my-portfolio-website
git init
```

### 2. Create GitHub Repository
- Go to [github.com/new](https://github.com/new)
- Repository name: `my-portfolio-website`
- Choose **Public**
- Click **Create repository**
- **Copy the repository URL** (looks like: `https://github.com/YOUR_USERNAME/my-portfolio-website.git`)

### 3. Push Your Code to GitHub
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [PASTE_YOUR_REPOSITORY_URL_HERE]
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your GitHub repository (https://github.com/YOUR_USERNAME/my-portfolio-website)
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This will automatically deploy your site whenever you push to main

### 5. Your Live Website
Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/my-portfolio-website/
```

## Local Development

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/my-portfolio-website/](http://localhost:5173/my-portfolio-website/)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
my-portfolio-website/
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
├── package.json         # Dependencies
└── .github/workflows/   # GitHub Actions CI/CD
```

## Technologies Used
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## Customization

Edit [src/App.jsx](src/App.jsx) to customize:
- Your name and title
- About section
- Projects and skills
- Contact information
- Colors and animations

## Troubleshooting

**Issue:** GitHub Actions deployment fails
- **Solution:** Ensure your repository is public and the workflow file exists in `.github/workflows/deploy.yml`

**Issue:** Styles not loading
- **Solution:** Make sure Tailwind CSS is properly configured in `tailwind.config.js`

**Issue:** Local dev server not starting
- **Solution:** Run `npm install` to ensure all dependencies are installed

## Support
For more help, visit:
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
