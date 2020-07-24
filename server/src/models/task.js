const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String
})

const taskModel = mongoose.model('tasks', taskSchema)
module.exports = taskModel