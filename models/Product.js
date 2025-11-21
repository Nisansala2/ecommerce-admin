import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Product', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT },
    categoryId: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'products' });
};
