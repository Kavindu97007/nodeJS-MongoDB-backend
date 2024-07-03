const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  Customer_name: { type: String, required: true },
  //age: { type: Number, required: true },
  review: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model('Review', userSchema);
