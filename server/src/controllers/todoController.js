const todoController = {

}

const task = require("../models/task")

todoController.render = async (req, res) => {
    const alltasks = await task.find()
    return res.json(alltasks)
}


todoController.newTask = async (req,res) => {
    const io = req.app.get('io')
    const {titulo, descripcion} = req.body
    const newTask = {titulo, descripcion}
    
    
    const newTodo = new task(newTask)

    

    const taskAdded = await newTodo.save()
    io.emit('newTaskAdded')

    return res.json(taskAdded)
}


module.exports = todoController