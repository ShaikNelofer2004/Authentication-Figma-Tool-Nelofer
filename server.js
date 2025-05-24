const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Configure CORS to allow requests only from your React frontend
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,  // if you want to allow cookies/auth headers
}));

app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.log(err));