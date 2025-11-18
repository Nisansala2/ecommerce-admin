// admin.js
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import bcrypt from 'bcrypt';
import { sequelize, User, Category, Product, Order, OrderItem, Setting } from './models/index.js';


AdminJS.registerAdapter(AdminJSSequelize);

function buildAdmin(app) {
    const admin = new AdminJS({
        databases: [sequelize],
        rootPath: '/admin',
        resources: [
            { resource: User },
            { resource: Category },
            { resource: Product },
            { resource: Order },
            { resource: OrderItem },
            { resource: Setting }
        ]
    });

    const router = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, router);
}

export default buildAdmin;   // ✔ Important

