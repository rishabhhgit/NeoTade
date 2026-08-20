# NeoTrade

A stock trading simulator where you can practice trading with virtual money using real-time market data from NSE and BSE exchanges.

## Features

- **Real-time Market Data** — Live stock prices from Yahoo Finance
- **Virtual Trading** — Buy and sell stocks with ₹10,000 starting balance
- **Portfolio Dashboard** — Track holdings, P&L, and sector diversification
- **Historical Charts** — View stock price history with interactive charts
- **Risk Analysis** — Volatility, beta, and diversification metrics
- **User Authentication** — Secure JWT-based login/signup
- **Multi-Exchange** — Browse stocks from NSE and BSE

## Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router
- Recharts (charts)
- Lucide React (icons)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Yahoo Finance API
- JWT Authentication
- bcrypt (password hashing)

## Getting Started

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd Frontend
npm install
npm run dev
```

## Environment Variables

**Backend** (`.env`):
- `PORT` — Server port (default: 3001)
- `MONGODB_URI` — MongoDB connection string
- `JWT_SECRET` — Secret key for JWT tokens

**Frontend** (`.env`):
- `VITE_API_URL` — Backend API URL
