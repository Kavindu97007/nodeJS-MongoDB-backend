const User = require('../models/reviewModel');
//const Counter = require('../models/counterModel');


// Service to create a new review
exports.createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
  };

// Service to get all review
exports.getUsers = async () => {
  const users = await User.find();
  return users;
};

// Service to get a single review by ID
exports.getUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

// Service to update a review by ID
exports.updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(id, userData, { new: true });
  return user;
};

// Service to delete a review by ID
exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};
