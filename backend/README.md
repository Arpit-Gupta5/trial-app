# Trial App Backend

Spring Boot REST API backend for Trial App React frontend.

## Prerequisites

- Java 17+
- Maven 3.6+

## Getting Started

### 1. Install Dependencies
```bash
cd backend
mvn clean install
```

### 2. Run the Application
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

## Available Endpoints

### 1. Hello Endpoint
```bash
GET /api/hello
```
Response:
```json
{
  "message": "Hello from Spring Boot Backend!",
  "status": "success"
}
```

### 2. Get Data
```bash
GET /api/data
```
Response:
```json
{
  "id": 1,
  "title": "Sample Data from Backend",
  "description": "This data is served by Spring Boot API",
  "timestamp": 1234567890
}
```

### 3. Get Items
```bash
GET /api/items
```
Response:
```json
{
  "items": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description for item 1"
    },
    ...
  ],
  "total": 3
}
```

### 4. Echo Data (POST)
```bash
POST /api/echo
Content-Type: application/json

{
  "message": "Hello"
}
```

## Connecting to Frontend

Update your React app's environment variables:

```env
REACT_APP_API_URL=http://localhost:8080
```

Then in your React components:
```javascript
const API_URL = process.env.REACT_APP_API_URL;

fetch(`${API_URL}/api/data`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (local development)
- `https://your-site.netlify.app` (production)

Update `TrialAppApplication.java` with your actual Netlify URL when deploying.

## Building for Production

```bash
mvn clean package
```

This creates a JAR file in `target/trial-app-backend-1.0.0.jar`

Run it:
```bash
java -jar target/trial-app-backend-1.0.0.jar
```

## Deployment

Deploy to Railway, Render, or any cloud platform that supports Java/Spring Boot:
- Set `server.port` environment variable to the port provided by your host
- Push this `backend/` folder to your repository
- Platform will auto-detect `pom.xml` and build accordingly

## Troubleshooting

**Port already in use?**
```bash
mvn spring-boot:run -Dspring-boot.run.arguments="--server.port=8081"
```

**CORS errors?**
Make sure your frontend URL is in the `allowedOrigins` list in `TrialAppApplication.java`
