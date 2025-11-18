import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Setting', {
    key: { type: DataTypes.STRING, primaryKey: true },
    value: { type: DataTypes.TEXT }
  }, { tableName: 'settings', timestamps: false });
};
