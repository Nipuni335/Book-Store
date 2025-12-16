import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import authRoute from "./routes/authRoute.js";
import booksRoute from "./routes/booksRoute.js";

// ✅ CREATE APP FIRST
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to MERN Book Store API");
});

// 🔥 Place routes AFTER creating app
app.use("/auth", authRoute);
app.use("/books", booksRoute);

// MongoDB connect + start server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });