const express = require('express');
const router = express.Router();
const userController = require('../controllers/employeeController');

// Route to create a new user
router.post('/employee', userController.createUser);

// Route to get all users
router.get('/employee', userController.getUsers);

// Route to get a single user by ID
router.get('/employee/:id', userController.getUser);

// Route to update a user by ID
router.put('/employee/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/employee/:id', userController.deleteUser);

module.exports = router;
