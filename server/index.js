require("dotenv").config();
const express = require("express");
const { json } = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { signup, login } = require("./controllers/users");

const userRoutes = require("./routes/users");
const surveyRoutes = require("./routes/surveys");

const app = express();

app.disable("x-powered-by");

console.log(process.env.MONGODB_URI);

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
