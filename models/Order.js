import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Order', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    userId: { type: DataTypes.UUID, allowNull: false },
    total: { type: DataTypes.FLOAT, defaultValue: 0 }
  }, { tableName: 'orders' });
};
