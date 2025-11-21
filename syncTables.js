import sequelize from './config/database.js';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';
import Setting from './models/Setting.js';

const syncTables = async () => {
  try {
    await sequelize.sync({ alter: true }); // creates tables if they don't exist
    console.log('✅ Tables synced successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
    process.exit(1);
  }
};

syncTables();
