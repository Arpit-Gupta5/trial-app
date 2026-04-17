# Trial App - Full Stack Monorepo

A modern full-stack application with React frontend and Spring Boot backend.

## Project Structure

```
Trial-App/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Spring Boot REST API
│   ├── src/
│   ├── pom.xml
│   └── README.md
├── .gitignore
└── README.md
```

## Features

- **React Frontend**: Interactive UI with modern design
- **Spring Boot Backend**: REST API for data operations
- **CORS Enabled**: Secure frontend-backend communication
- **Monorepo Structure**: Single repo, independent deployments
- **Free Deployment**: Netlify (frontend) + Railway (backend)

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - for frontend
- **Java 17+** - for backend
- No Maven install needed (Maven Wrapper included)

### Installation & Running Locally

#### 1. Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs at [http://localhost:3000](http://localhost:3000)

#### 2. Backend Setup (in another terminal)
```bash
cd backend
mvnw.bat spring-boot:run
```
Backend API runs at [http://localhost:8080](http://localhost:8080)

### Quick API Test

```bash
# In a terminal or using curl
curl http://localhost:8080/api/hello
curl http://localhost:8080/api/data
curl http://localhost:8080/api/items
```

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

## Deployment Strategy

### Frontend → Netlify
1. Push `frontend/` folder to GitHub
2. Connect Netlify to GitHub repo
3. Set build command: `npm install && npm run build`
4. Set publish directory: `build`
5. Add environment variable: `REACT_APP_API_URL=https://your-backend.railway.app`

### Backend → Railway
1. Push `backend/` folder to GitHub
2. Connect Railway to GitHub repo
3. Railway auto-detects Maven and builds automatically
4. Set port environment variable if needed

### Free Hosting Stack
- **Frontend**: Netlify (free tier)
- **Backend**: Railway ($5 free credits/month)
- **Database**: Supabase (optional, free tier)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Returns greeting |
| GET | `/api/data` | Returns sample data |
| GET | `/api/items` | Returns list of items |
| POST | `/api/echo` | Echo back sent data |

See [backend/README.md](backend/README.md) for detailed API documentation.
