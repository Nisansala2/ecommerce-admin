import { sequelize } from './models/index.js';

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
  process.exit(1);
});

const syncTables = async () => {
  try {
    await sequelize.sync({ alter: true }); // creates tables if they don't exist
    console.log('✅ Tables synced successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
    process.exit(1);
  }
};

syncTables();
 