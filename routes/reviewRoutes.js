const express = require('express');
const router = express.Router();
const userController = require('../controllers/reviewController');

// Route to create a new review
router.post('/review', userController.createUser);

// Route to get all review
router.get('/review', userController.getUsers);

// Route to get a single review by ID
router.get('/review/:id', userController.getUser);

// Route to update a review by ID
router.put('/review/:id', userController.updateUser);

// Route to delete a review by ID
router.delete('/review/:id', userController.deleteUser);

module.exports = router;
