import express from "express";
import Booking from "../models/Booking.js";
import { Op } from "sequelize";

const router = express.Router();
console.log("Bookings route loaded");


// GET all bookings
router.get("/", async (req, res) => {
  console.log("GET /api/bookings hit"); // <- log when route is called
  try {
    const bookings = await Booking.findAll();
    console.log("Fetched bookings:", bookings);
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Server error" });
  }
});



// POST create a booking
router.post("/", async (req, res) => {
  const { userId, resourceId, start_time, end_time } = req.body;

  // Check for overlapping bookings
  const conflict = await Booking.findOne({
    where: {
      resourceId,
      start_time: { [Op.lt]: end_time },
      end_time: { [Op.gt]: start_time },
    },
  });

  if (conflict) return res.status(400).json({ message: "Time slot already booked" });

  const booking = await Booking.create({ userId, resourceId, start_time, end_time });
  res.json(booking);
});

export default router;
