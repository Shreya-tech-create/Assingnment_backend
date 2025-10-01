import express from 'express';
import cors from 'cors';
import { db } from './dbConfig/db.js';
import userRoute from './route/userRoute.js';
import taskRoute from './route/taskRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// Allowed origins
const allowedOrigins = [
  "https://assingnment-frontend-ujtl.vercel.app",
    "https://assingnment-frontend-heul.vercel.app",
  "http://localhost:3000"
];

// Enable CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running successfully!");
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use("/api/user", userRoute);
app.use("/api", taskRoute);

// Connect DB
db();

// ✅ Instead of app.listen
export default app;
