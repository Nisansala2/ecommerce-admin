// admin.js

import session from 'express-session';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';

import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';

import {  bundle } from '@adminjs/bundler';
import { ComponentLoader } from 'adminjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  sequelize, User, Category, Product, Order, OrderItem, Setting
} from './models/index.js';

AdminJS.registerAdapter(AdminJSSequelize);

async function buildAdmin(app) {

  const componentLoader = new ComponentLoader();

 

const components = {
  Dashboard: await componentLoader.add(
    'Dashboard',
    path.join(__dirname, 'components', 'Dashboard.jsx')
  ),
};


  const admin = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    componentLoader,

    resources: [
      { resource: User },
      { resource: Category },
      { resource: Product },
      { resource: Order },
      { resource: OrderItem },
      { resource: Setting },
    ],

    dashboard: {
      component: components.Dashboard,
      handler: async () => {
        const totalRevenue = await Order.sum('total') || 0;
        const totalUsers = await User.count();
        const totalProducts = await Product.count();
        const totalOrders = await Order.count();

        

        return {
          totalUsers,
          totalProducts,
          totalOrders,
          totalRevenue,

        };
      },
    },
  });

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email } });
        if (!user) return false;

        const match = await bcrypt.compare(password, user.password);
        if (!match) return false;

        return {
          email: user.email,
          role: user.role,
          id: user.id
        };
      },

      cookiePassword: 'your-super-secret-cookie-key',
      session: {
        resave: false,
        saveUninitialized: false,
      },
    }
  );

  app.use(admin.options.rootPath, adminRouter);

  app.get('/', (req, res) => {
  res.redirect(admin.options.rootPath);
});

}

export default buildAdmin;