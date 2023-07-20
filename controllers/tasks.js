const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})   
    }
}

const createNewTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})   
    } catch (error) {
        res.status(500).json({msg:error}) 
    }
}

const getSingleTask = async (req, res) => {
    try {
        const taskID = req.params.id
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            return res.status(404).json({msg: `No Task with id ${taskID}`})
        } else {
            res.status(200).json({task})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const modifyTask = async (req, res) => {
    try {
        const taskID = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new: true, runValidators: true})
        if (!task) {
            return res.status(404).json({msg: `No Task with id ${taskID}`})
        } else {
            res.status(200).json({task})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskID = req.params.id
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) {
            return res.status(404).json({msg: `No Task with id ${taskID}`})
        } else {
            res.status(200).json({task})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports = {getAllTasks, createNewTask, getSingleTask, modifyTask, deleteTask}