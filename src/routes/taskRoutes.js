// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const TaskControllers=require('../controllers/TaskControllers');

// Route for retrieving tasks
router.get('/', TaskControllers.getTasks);

// Route for creating a task
router.post('/', TaskControllers.createTask);
router.get('/:id',TaskControllers.getTaskById);
router.delete('/:id',TaskControllers.deleteTaskById);
router.put('/:id',TaskControllers.updateTaskById);
//user Details




module.exports = router;
