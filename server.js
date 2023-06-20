const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
// const mongoose = require('mongoose')
// const mysql = require('mysql');
const AccessControl = require('accesscontrol');
app.use(express.json());
app.use(cors())
dotenv.config()

const categoryRouter = require('./Routes/category')
const orderRouter = require('./Routes/order')
const productRouter = require('./Routes/product')
const usersRouter = require('./Routes/users')
const reviewsRouter = require('./Routes/reviews')
const Sequelize = require('sequelize');
 
app.use('/demo/category/',categoryRouter)
app.use('/demo/order/',orderRouter)
app.use('/demo/product/',productRouter)
app.use('/demo/user/',usersRouter)
app.use('/demo/review/',reviewsRouter)
const mysql = require('mysql2');

const sequelize = new Sequelize('mealpass', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});


sequelize.sync()
  .then(() => {
    console.log('Database and tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating database and tables:', error);
  });



  
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'mealpass'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database.');
// });

// Perform database operations...


app.listen(process.env.Port, ()=>{
    console.log(`server is running is on port ${process.env.Port}`)
})