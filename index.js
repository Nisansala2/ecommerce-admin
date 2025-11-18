import express from 'express';
import dotenv from 'dotenv';
import { sequelize, User } from './models/index.js';
import buildAdmin from './admin.js';
import routes from './routes.js';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

//build admin interface
buildAdmin(app);

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
}

// simple route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

start();
