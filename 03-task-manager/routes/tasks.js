const express = require("express")
const router = express.Router()
const {getTask, getTasks, createTask, updateTask, deleteTask} = require('../controllers/tasks')

router.get('/', getTasks)
router.get('/:id', getTask)
router.post('/', createTask)
router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router