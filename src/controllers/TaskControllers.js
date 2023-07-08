// controllers/taskController.js

const Task = require('../models/TaskModel');

// Controller function to retrieve tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving tasks from the database');
  }
};



//single task 


const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving task from the database');
  }
};


// Controller function to create a task
const createTask = async (req, res) => {    
  const { title, description } = req.body;

  const newTask = new Task({
    title,
    description,
  });

  try {
    await newTask.save();
    res.status(200).send('Task saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving task to the database');
  }
};
//delete a task 

const deleteTaskById = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (deletedTask) {
      res.status(200).send('Task deleted successfully');
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting task');
  }
};
//update task 


const updateTaskById = async (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description },
      { new: true }
    );

    if (updatedTask) {
      res.status(200).json(updatedTask);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating task');
  }
};
//
module.exports = {
  getTasks,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById
};

