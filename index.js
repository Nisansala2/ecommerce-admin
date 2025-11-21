import express from 'express';
import dotenv from 'dotenv';
import { sequelize, User } from './models/index.js';
import buildAdmin from './admin.js';
import routes from './routes.js';
import bcrypt from 'bcrypt';
import AdminJSExpress from '@adminjs/express';
import { login, authenticateMiddleware } from "./auth.js";
import path from 'path';


dotenv.config();

const app = express();

app.use(express.json());

//build admin interface
buildAdmin(app);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to Supabase successfully');
  } catch (err) {
    console.error('❌ Cannot connect to Supabase:', err.message);
  }
};

testConnection();



const PORT = process.env.PORT || 4000;
async function start() {
    await sequelize.sync({ alter: true });

 // seed admin if not exists
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if(adminEmail && adminPassword){
    const existing = await User.findOne({ where: { email: adminEmail } });
    if(!existing){
      const hashed = await bcrypt.hash(adminPassword, 10);
      await User.create({ email: adminEmail, name: 'Admin', password: hashed, role: 'admin' });
      console.log('Seeded admin user:', adminEmail);
    }
  }

  // seed test user if not exists
  const testEmail = 'user@example.com';
  const testPassword = 'password123';
  const existingTest = await User.findOne({ where: { email: testEmail } });
  if(!existingTest){
    const hashed = await bcrypt.hash(testPassword, 10);
    await User.create({ email: testEmail, name: 'Test User', password: hashed, role: 'user' });
    console.log('Seeded test user:', testEmail);
  }
}

app.post('/api/login', login);

app.get('/api/admin-data', authenticateMiddleware, (req, res) => {
  res.json({ message: "You are authorized!", user: req.user });
});


// Redirect root to AdminJS login page




// start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

start();
