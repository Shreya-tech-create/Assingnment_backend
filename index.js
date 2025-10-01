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

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // React ka port
    credentials: true                // cookies allow karne ke liye
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
