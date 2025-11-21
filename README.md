🚀 Role-Based eCommerce Admin Dashboard
Built with AdminJS, Sequelize, Node.js, PostgreSQL & Supabase

A complete, secure, and role-based eCommerce Admin Panel built for managing users, products, orders, categories, and system settings.
This project includes AdminJS authentication, JWT login, role-based access control, customizable dashboards for Admin and User roles, and Supabase cloud database deployment.

✔ Built as part of the assignment “Role-Based eCommerce Admin Dashboard with AdminJS, Sequelize, and PostgreSQL”
✔ Designed to demonstrate enterprise-level backend development skills
✔ Suitable for job interviews, portfolio, and real-world applications

📌 Features
🔑 Authentication

Secure login using bcrypt + JWT

AdminJS authentication with session cookies

Protected routes & middleware

Passwords fully hashed using bcrypt

👥 Role-Based Access Control
Role	Access
Admin	Full access to all resources (Users, Products, Orders, Settings, etc.)
Regular User	Limited dashboard only (profile + recent orders)
Hidden	Users cannot see Settings, other users, or admin-only data

Implemented using:

isAccessible()

isVisible()

Custom AdminJS router authentication

🗂️ AdminJS Integrated Resources

User
Category
Product
Order
OrderItem
Setting
All models connected using Sequelize relations.

📊 Dashboards
Admin Dashboard:
Total Users
Total Products
Total Orders
Total Revenue

Clean card-based UI
Custom AdminJS React Dashboard
User Dashboard:
User profile (name, email)
Recent orders (latest 5)
Simple activity panel

Designed using AdminJS <Box> components only

🧩 Database Models (Sequelize + PostgreSQL)

The project implements:
User(id, name, email, password, role)
Category(id, name)
Product(id, name, stock, price, categoryId)
Order(id, total, userId)
OrderItem(orderId, productId, quantity)

Setting(key, value)
🛠️ Deployment Ready
Backend connected to Supabase PostgreSQL
Frontend deployable on Vercel

Backend deployable on Render/Railway

🏗️ Project Structure
/backend
 ├── admin.js
 ├── server.js
 ├── config/
 │    └── database.js
 ├── models/
 │    ├── User.js
 │    ├── Product.js
 │    ├── Category.js
 │    ├── Order.js
 │    ├── OrderItem.js
 │    └── Setting.js
 ├── components/
 │    └── Dashboard.jsx
 ├── 
 ── syncTables.js
 ── seedAdmin.js
 └── seedUsers.js
 ├── package.json
 └── README.md

⚙️ Installation & Setup
1️⃣ Clone Repo
git clone https://github.com/Nisansala2/ecommerce-admin.git
cd your-repo

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create .env:

DATABASE_URL=your_supabase_postgres_url
JWT_SECRET=your_jwt_secret
PORT=4000
NODE_ENV=development

4️⃣ Sync Database Tables
node syncTables.js

5️⃣ Seed Admin User
node seedAdmin.js

6️⃣ Start Server
npm start


Visit:

http://localhost:4000/admin

🔧 Technologies Used

Node.js
Express.js
AdminJS
Sequelize
PostgreSQL
Supabase
bcrypt
JWT

React (AdminJS Components)

🚀 Deployment Setup
Backend (AdminJS + Node.js):

Deploy on:
Render


Make sure to set:

DATABASE_URL= 
JWT_SECRET=
NODE_ENV=production

Frontend:

Deploy on Vercel
Add:

NEXT_PUBLIC_API_URL=https://your-backend-url.com

🧑‍💻 Author
Nisansala Gamachchige
Bachelor of ICT – University of Jayewardenepura
Skilled in: HTML, CSS, JavaScript, React, Node.js, AdminJS, PostgreSQL, Supabase
