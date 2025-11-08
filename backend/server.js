import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import bookingRoutes from "./routes/bookings.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


// Routes
app.use("/api/bookings", bookingRoutes);

// Test endpoint
app.get("/", (req, res) => res.send("Backend is running"));

// Sync DB and start server
sequelize.sync().then(() => console.log("Database synced"));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

