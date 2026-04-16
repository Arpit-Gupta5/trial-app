# Trial App - React Simple Webpage

A simple, modern React application ready to be hosted on the internet.

## Features

- **Interactive Counter**: Demonstrates React state management
- **Responsive Design**: Works great on mobile, tablet, and desktop
- **Modern UI**: Beautiful gradient background and smooth animations
- **Easy to Deploy**: Ready for hosting on various platforms

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Runs the test suite.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment Options

### Hosting Platforms

1. **Vercel** (Recommended for React)
   - Deploy for free: [https://vercel.com](https://vercel.com)
   - Connect your GitHub repo and auto-deploy

2. **Netlify**
   - Easy deployment: [https://netlify.com](https://netlify.com)
   - Drag and drop your `build` folder

3. **GitHub Pages**
   - Free hosting through GitHub
   - Update `homepage` in package.json first

4. **Heroku**
   - Traditional hosting option
   - CLI-based deployment

5. **AWS S3 + CloudFront**
   - Scalable static hosting
   - Good for larger applications

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Quick Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `build` folder to [https://drop.netlify.com](https://drop.netlify.com)

## Customization

- Edit `src/App.js` to change content
- Modify `src/App.css` for styling
- Update `public/index.html` for meta tags and title

## Project Structure

```
trial-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Support

For more information about React, visit: [https://react.dev](https://react.dev)

## License

This project is open source and available under the MIT License.
