//Declare variables
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

//Middleware 
app.set('view engine', 'ejs')
app.use(express.static('public')) //tells express to use styling sheets
app.use(express.urlencoded({extended: true}))

//Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


//EDIT OR UPDATE METHOD
app
    .route('/edit/:id')
    .get((req, res) => {
        const id = req.params.id
        TodoTask.find({}, (err,tasks) => {
            res.render('edit.ejs', {
                todoTasks:tasks, idTask: id})
            })
    })
    .post((req, res) => {//post instead of put because forms DONOT support put requests. Elimates having to write clientside js.
        const id = req.params.id
        TodoTask.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect('/')
            }
        )
    })

//DELETE
app
    .route('/remove/:id')
    .get((req, res) => {
        const id = req.params.id
        TodoTask.findByIdAndRemove(id, err => { //remove instead of delete to avoid writing client side js (ie. fetch methods)
            if (err) return res.status(500).send(err)
            res.redirect('/')
         })
    })
app.listen(process.env.PORT || PORT, () => console.log(`Server is running!`))