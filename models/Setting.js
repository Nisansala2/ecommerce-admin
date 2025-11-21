// models/Setting.js

import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Setting = sequelize.define("Setting", {
    siteName: DataTypes.STRING,
    siteDescription: DataTypes.TEXT,
    currency: DataTypes.STRING,
    taxRate: DataTypes.FLOAT,
    shippingCost: DataTypes.FLOAT,
    supportEmail: DataTypes.STRING,
    maintenanceMode: DataTypes.BOOLEAN
  });

  return Setting;
};
