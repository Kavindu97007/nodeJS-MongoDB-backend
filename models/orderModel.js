const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  Customer_name: { type: String, required: true },
  price: { type: Number, required: true },
  //phone: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model('Order', userSchema);
