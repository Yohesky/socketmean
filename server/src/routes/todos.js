const {Router} = require('express')
const router = Router()

const todoController = require("../controllers/todoController")


router.get('/all', todoController.render)

router.post('/newTask', todoController.newTask)

module.exports = router