# 🛒 E-Commerce Web Application (MERN Stack)

This is a Full Stack E-Commerce Web Application built using:

Frontend  : React.js  
Backend   : Node.js + Express.js  
Database  : MongoDB  
Database Tool : MongoDB Compass  

------------------------------------------------------------

📁 PROJECT STRUCTURE

project-folder
│
├── frontend   → React Application
├── backend    → Node + Express API
└── MongoDB    → Database

------------------------------------------------------------

⚛️ FRONTEND (React)

The frontend is built using Create React App.

Location:
frontend/

To Run Frontend:

1. cd frontend
2. npm install
3. npm start

Application runs on:
http://localhost:3000

Frontend Features:
- User Registration
- User Login (JWT Authentication)
- Add Products to Cart
- Remove Items from Cart
- Enter Delivery Address
- Place Order
- View My Orders
- Protected Routes

------------------------------------------------------------

🟢 BACKEND (Node.js + Express)

The backend handles:

- User Authentication API
- Cart API
- Orders API
- MongoDB Connection

Location:
backend/

To Run Backend:

1. cd backend
2. npm install
3. npm start

Backend runs on:
http://localhost:5000

------------------------------------------------------------

🍃 DATABASE (MongoDB + Compass)

Database Used:
MongoDB

Database GUI Tool:
MongoDB Compass

To Connect in Compass:

1. Open MongoDB Compass
2. Connect to:
   mongodb://localhost:27017
3. Select Database:
   ecommerce

Collections Used:
- users
- products
- cart
- orders

------------------------------------------------------------

🔐 AUTHENTICATION

- JWT Token Based Login
- Token stored in LocalStorage
- Protected routes using React Router
- Only logged-in users can access Cart, Profile, Orders

------------------------------------------------------------

📦 ORDER FLOW

1. User registers or logs in
2. Adds products to cart
3. Clicks Place Order
4. Enters delivery address
5. Order saved in database
6. Cart gets cleared
7. User can view order in My Orders page

------------------------------------------------------------

🧰 TECHNOLOGIES USED

Frontend:
- React
- React Router DOM
- Axios
- Bootstrap

Backend:
- Node.js
- Express.js
- Mongoose
- JWT
- bcrypt

Database:
- MongoDB
- MongoDB Compass

------------------------------------------------------------

🚀 HOW TO RUN FULL PROJECT

Step 1:
Start MongoDB service

Step 2:
Run Backend
cd backend
npm install
npm start

Step 3:
Run Frontend
cd frontend
npm install
npm start

------------------------------------------------------------

👨‍💻 Developed Using MERN Stack

------------------------------------------------------------
