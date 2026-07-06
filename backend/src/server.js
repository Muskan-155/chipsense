const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in environment variables.");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET is missing in environment variables.");
  process.exit(1);
}

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🌳 Welcome to ChipSense Backend API",
    version: "v1.0.0",
    status: "Running",
  });
});

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 ChipSense API is running successfully!",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=====================================");
  console.log("🌳 ChipSense Backend Started");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("=====================================");
});