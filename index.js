import express from 'express';
import cors from 'cors';
import { db } from './dbConfig/db.js';
import userRoute from './route/userRoute.js';
import taskRoute from './route/taskRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
const Port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cookieParser());

// Allowed origins array - apne frontend ke URLs yahan add kar sakte ho
const allowedOrigins = [
  "https://assingnment-frontend-ujtl.vercel.app",
  "http://localhost:3000"
];

// Enable CORS with dynamic origin check
app.use(
  cors({
    origin: function(origin, callback) {
      // origin can be undefined in case of tools like Postman
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// Root route (GET /)
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running successfully!");
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // No Content
});

app.use("/api/user", userRoute);
app.use("/api", taskRoute);

db().then(() => {
  app.listen(Port, () => {
    console.log(`✅ Server is Started on port ${Port}`);
  });
});
