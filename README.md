# Flex Living Reviews API (Backend)

## Overview

This is the backend service for the Flex Living Reviews Dashboard project.
It provides RESTful APIs for retrieving and normalizing review data from a mock data file (or future database source).

Built with Node.js, Express, and TypeScript, the service is structured around clean architecture principles Controllers, Services, and Routes making it modular, testable, and scalable.

---

### Tech Stack

- Node.js (v18+)
- TypeScript
- Express.js
- dotenv, cors, nodemon
- Architecture: Controller–Service–Route pattern

---

## Folder Structure

````markdown
server/
├── src/
│ ├── controllers/
│ │ └── ReviewController.ts
│ ├── routes/
│ │ └── reviewRoutes.ts
│ ├── services/
│ │ └── ReviewService.ts
│ ├── data/
│ │ └── mockReviews.json
│ ├── types/
└── index.ts
│  
├── .env
├── package.json
└── tsconfig.json

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Tgodmuna/flex-living-reviews-Server.git
cd server
```
````

2.Install dependencies:

```bash
npm install
```

3.Create a `.env` file:

```bash
PORT=5000
```

4.Run the development server:

```bash
npm run dev
```

Server runs at: <http://localhost:5000>

---

## API Endpoints

Base URL:

```
http://localhost:5000/api/v1
```

| Method | Endpoint          | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | /reviews/hostaway | Returns normalized mock reviews from hostaway|
| GET    | /health           | Health check endpoint           |
| GET    | /reviews/hostaway | Returns normalized mock reviews |

---

## Example Response

```json
{
  "status": "success",
  "reviews": [
    {
      "listing": "2B N1 A - 29 Shoreditch Heights",
      "guestName": "Shane Finkelstein",
      "averageRating": 9.67,
      "categories": {
        "cleanliness": 10,
        "communication": 9,
        "respect_house_rules": 10
      },
      "review": "Shane and family are wonderful guests...",
      "date": "2020-08-21",
      "channel": "Hostaway"
    }
  ]
}
```

---

## Core Logic

### ReviewService.ts

- Reads mock data from `/data/mockReviews.json`
- Validates the JSON structure
- Normalizes data:
  - Flattens nested review categories
  - Computes average rating
  - Ensures uniform output format

### ReviewController.ts

- Handles API requests
- Calls the service layer
- Returns formatted responses with appropriate status codes

### reviewRoutes.ts

- Defines all endpoints under `/api/v1/reviews`
- Maps routes to controller methods

---

## Environment Variables

| Variable    | Description                      | Example |
| ----------- | -------------------------------- | ------- |
| PORT        | Port for Express server          | 5000    |
| DATA_SOURCE | Choose MOCK or DB as data source | MOCK    |
| ENV         | PORT=5000                        | PORT    |


---

## Scripts

| Command       | Description                         |
| ------------- | ----------------------------------- |
| npm run dev   | Run development server with nodemon |
| npm run build | Compile TypeScript to JavaScript    |
| npm start     | Run compiled production build       |

---

## Example Usage (Frontend Fetch)

```ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/reviews/hostaway'  ;

async function loadReviews() {
  const res = await axios.get(API_URL);
  console.log(res.data.reviews);
}
```

---

## Design Decisions

- Mock-first approach ensures predictable results without DB dependencies.
- `.env` configuration supports easy data source switching.
- Strict TypeScript configuration for safer refactors.
- Scalable structure allows simple extension to new platforms (e.g., Airbnb).

---

## Future Enhancements

- Connect to MongoDB for persistent review storage
- Add CRUD endpoints for admin moderation
- Include JWT-based authentication
- Add pagination and sorting parameters

---

## Developer

**ThankGod Munachimso Agu**  
Full Stack Developer (Node.js, Express, React, TypeScript)  
Email: <aguthankgod@gmail.com>  
GitHub: <https://github.com/Tgodmuna>  
LinkedIn: <https://linkedin.com/in/tg-agu>
