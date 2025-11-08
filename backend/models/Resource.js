import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Resource = sequelize.define("Resource", {
  name: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, defaultValue: 1 },
}, { tableName: "Resources", timestamps: true });

export default Resource;
