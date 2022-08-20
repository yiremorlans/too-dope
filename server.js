// Declare variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
const PORT = process.env.PORT
const TodoTask = require('./models/todotask')//require the model variable from the models/todotask.js file we're exporting
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')

connectDB()

// Middleware 
app.set('view engine', 'ejs')
app.use(express.static('public')) //tells express to use styling sheets
app.use(express.urlencoded({extended: true}))

// Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

// Start server
app.listen(process.env.PORT || PORT, () => console.log(`Server is running!`))