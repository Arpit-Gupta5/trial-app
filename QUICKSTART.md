# Quick Start Guide

## 🚀 Full Stack Trial App

A complete, production-ready full-stack application with React frontend and Spring Boot backend.

## What's Included

✅ **React Frontend** - Interactive UI, Counter, Todo List  
✅ **Spring Boot Backend** - REST API with data endpoints  
✅ **Frontend-Backend Integration** - Fully connected and working  
✅ **CORS Enabled** - Secure cross-origin communication  
✅ **Ready for Deployment** - Netlify (frontend) + Railway (backend)  

## Getting Started Locally

### Prerequisites
- Node.js v14+ (for frontend)
- Java 17+ (for backend)
- No Maven install needed (included with backend)

### Start Backend

**Terminal 1:**
```bash
cd backend
mvnw.bat spring-boot:run
```

Backend starts at: `http://localhost:8080`

**Verify it's working:**
```bash
curl http://localhost:8080/api/hello
```

### Start Frontend

**Terminal 2:**
```bash
cd frontend
npm install
npm start
```

Frontend opens at: `http://localhost:3000`

## Using the App

### Available Tabs

1. **📊 Counter** - Interactive counter with buttons
2. **✅ Todo List** - Add, check, and delete todos
3. **🔗 Backend API** - See live data from the backend
4. **ℹ️ About** - App information

### Testing Backend Integration

1. Go to **"🔗 Backend API"** tab
2. Click **"📥 Fetch Data"** - Shows data from `/api/data`
3. Click **"📋 Fetch Items"** - Shows items from `/api/items`
4. Click **"🧪 Test Connection"** - Verifies backend is responding

## API Endpoints

| Endpoint | Method | Returns |
|----------|--------|---------|
| `/api/hello` | GET | Greeting message |
| `/api/data` | GET | Sample data object |
| `/api/items` | GET | Array of 3 items |
| `/api/echo` | POST | Echo back request data |

## Making Changes

### Frontend Changes
- Edit files in `frontend/src/`
- Changes auto-reload in browser

### Backend Changes
- Edit files in `backend/src/main/java/`
- Restart backend with `Ctrl+C` then run `mvnw.bat spring-boot:run` again

## Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```
Creates optimized build in `frontend/build/`

### Backend Build
```bash
cd backend
mvnw.bat package
```
Creates JAR in `backend/target/trial-app-backend-1.0.0.jar`

## Deploy to Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step deployment guide.

**Recommended Stack:**
- Frontend → **Netlify** (free tier, 100 GB/month)
- Backend → **Railway** (free tier, $5 credits/month)
- Total cost: **Free** 🎉

## Project Structure

```
Trial-App/
├── frontend/              # React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.local        # API URL config
├── backend/               # Spring Boot API
│   ├── src/main/java/
│   ├── pom.xml
│   ├── mvnw.bat          # Maven Wrapper
│   └── .mvn/
├── DEPLOYMENT.md         # Production guide
├── README.md             # Full docs
└── QUICKSTART.md         # This file
```

## Troubleshooting

### Backend won't start
- Maven wrapper downloads automatically (1-2 min on first run)
- Ensure Java 17+ is installed: `java -version`

### Frontend shows blank page
- Check browser console (F12)
- Verify backend is running
- Check `.env.local` exists with `REACT_APP_API_URL=http://localhost:8080`

### API tab shows no data
- Click "🧪 Test Connection" to verify backend
- Check browser DevTools Console (F12)
- Restart frontend after backend restart

## Next Steps

1. ✅ Backend running at `http://localhost:8080`
2. ✅ Frontend running at `http://localhost:3000`
3. ✅ API integration working
4. 📤 Deploy to production (see [DEPLOYMENT.md](DEPLOYMENT.md))
5. 💾 (Optional) Add database (PostgreSQL via Supabase)
6. 🔐 (Optional) Add authentication

---

**See also:**
- [Full Documentation](README.md)
- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
- [Deployment Guide](DEPLOYMENT.md)

**Happy coding!** 🎉
