// First and foremost, our controller has to recognize what model
const TodoTask = require('../models/todotask')

module.exports = {
    
    getEdit : (req, res) => {
        const id = req.params.id
        TodoTask.find({}, (err, tasks) => {
            res.render('edit.ejs', {
                todoTasks:tasks, idTask: id})
            })
    },

    deleteTask : (req, res) => {
        const id = req.params.id
        TodoTask.findByIdAndRemove(id, err => { //remove instead of delete to avoid writing client side js (ie. fetch methods)
            if (err) return res.status(500).send(err)
            res.redirect('/')
         })
    },

    updateTask : (req, res) => {//post instead of put because forms DONOT support put requests. Elimates having to write clientside js.
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
    }
}