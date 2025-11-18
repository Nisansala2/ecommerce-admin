const { sequelize, testConnection } = require('./config/database');

testConnection().then(() => {
  console.log('Database test successful!');
  process.exit(0);
});