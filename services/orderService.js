const User = require('../models/orderModel');
//const Counter = require('../models/counterModel');

// Service to create a new user with an auto-incremented customer ID
// Service to create a new user
exports.createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
  };

// Service to get all users
exports.getUsers = async () => {
  const users = await User.find();
  return users;
};

// Service to get a single user by ID
exports.getUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

// Service to update a user by ID
exports.updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, { new: true });
  return user;
};

// Service to delete a user by ID
exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};
