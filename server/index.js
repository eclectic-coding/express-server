import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { signup, login } from "./controllers/users";

import userRoutes from "./routes/users";
import surveyRoutes from "./routes/surveys";

const app = express();

// app.disable('x-powered-by')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Middleware
app.use(cors());
app.use(json());

app.post("/signup", signup);
app.post("/login", login);

app.use("/api/user", userRoutes);
app.use("/api/surveys", surveyRoutes);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));
  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
