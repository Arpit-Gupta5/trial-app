# Trial App - Frontend

React-based frontend for Trial App.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm start
```

Frontend runs at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates optimized build in `build/` folder.

## Environment Variables

Create `.env.local` to connect to backend:

```env
REACT_APP_API_URL=http://localhost:8080
```

For production (Netlify):
```env
REACT_APP_API_URL=https://your-backend.railway.app
```

## Using Backend API

```javascript
const API_URL = process.env.REACT_APP_API_URL;

fetch(`${API_URL}/api/data`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## Deployment

Deploy to Netlify - see [../DEPLOYMENT.md](../DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Netlify

```bash
npm run build
```

Then drag `build` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect to GitHub for automatic deployments.
