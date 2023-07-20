const express = require('express')
const {getAllTasks, createNewTask, getSingleTask, modifyTask, deleteTask} = require('../controllers/tasks')
const router = express.Router()

router.get('/', getAllTasks)
router.post('/', createNewTask)
router.get('/:id', getSingleTask)
router.patch('/:id', modifyTask)
router.delete('/:id', deleteTask)

module.exports = router