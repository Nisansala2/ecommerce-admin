// admin.js

import session from 'express-session';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';
import { ComponentLoader } from 'adminjs';
import {
  sequelize, User, Category, Product, Order, OrderItem, Setting
} from './models/index.js';

AdminJS.registerAdapter(AdminJSSequelize);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildAdmin(app) {


  const componentLoader = new ComponentLoader();

  const components = {
    Dashboard: componentLoader.add('Dashboard', path.join(__dirname, 'components', 'Dashboard.jsx')),
    Settings: componentLoader.add('Settings', path.join(__dirname, 'components', 'Settings.jsx')),
  };

  // Bundle custom components
 

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

    // -----------------------------------------
    // 1️⃣ CUSTOM DASHBOARD
    // -----------------------------------------
    dashboard: {

      component:components.Dashboard,
      handler: async () => {
        const totalRevenue = await Order.sum('total') || 0;
        return {
          totalUsers: await User.count(),
          totalProducts: await Product.count(),
          totalOrders: await Order.count(),
          totalRevenue,
        };
      },


    },

    // -----------------------------------------
    // 2️⃣ CUSTOM PAGES (SETTINGS PAGE)
    // -----------------------------------------
    pages: {
      settingsPage: {
        label: "Settings",
        component: components.Settings,
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.role === "admin",

        handler: async (req, res, context) => {
          if (req.method === 'post') {
            const { key, value } = req.payload;
            await Setting.upsert({ key, value });
            return { notice: { message: 'Setting updated successfully', type: 'success' } };
          }

          const settings = await Setting.findAll();
          return { settings };
        },
      }
    },
  });

  // -----------------------------------------
  // 3️⃣ ADMINJS LOGIN AUTHENTICATION
  // -----------------------------------------
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email } });

        if (!user) return false;
        const match = await bcrypt.compare(password, user.password);
        if (!match) return false;

        // Give AdminJS session user object
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


 
  // -----------------------------------------
  // 4️⃣ REGISTER ROUTERnpm
  // -----------------------------------------
  app.use(admin.options.rootPath, adminRouter);

}



export default buildAdmin;
