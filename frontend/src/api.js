// src/api.js
export const API_BASE = "http://localhost:5050/api";

export async function getBookings() {
  const res = await fetch(`${API_BASE}/bookings`);
  if (!res.ok) throw new Error("Failed to fetch bookings");
  return res.json();
}
