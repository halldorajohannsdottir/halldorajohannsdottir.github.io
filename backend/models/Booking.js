import { DataTypes, Op } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Resource from "./Resource.js";

const Booking = sequelize.define(
  "Booking",
  {
    start_time: { type: DataTypes.DATE, allowNull: false },
    end_time: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "pending" },
  },
  {
    tableName: "Bookings", // <- explicit table name
    timestamps: true,
  }
);


Booking.belongsTo(User);
Booking.belongsTo(Resource);

export default Booking;
