const User = require('../models/reviewModel');
const userService = require('../services/reviewService');

// Controller to create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST - Create a new user
// const createUser = async (req, res, next) => {
//     try {
//       const { name, age, phone } = req.body;
//       const newUser = new User({ name, age, phone });
//       const savedUser = await newUser.save();
//       res.status(201).json(savedUser);
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   module.exports = {
//     createUser,
//   };

// Controller to get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single user by ID
exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.id);
    if (!user) return res.status(404).json({ message: 'Customer Review is not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: 'Customer Review is not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ message: 'Customer Review is not found' });
    res.status(200).json({ message: 'Customer Review is deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
