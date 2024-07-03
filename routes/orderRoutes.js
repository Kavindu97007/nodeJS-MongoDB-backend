const express = require('express');
const router = express.Router();
const userController = require('../controllers/orderController');

// Route to create a new order
router.post('/order', userController.createUser);

// Route to get all order
router.get('/order', userController.getUsers);

// Route to get a single order by ID
router.get('/order/:id', userController.getUser);

// Route to update a order by ID
router.put('/order/:id', userController.updateUser);

// Route to delete a order by ID
router.delete('/order/:id', userController.deleteUser);

module.exports = router;
