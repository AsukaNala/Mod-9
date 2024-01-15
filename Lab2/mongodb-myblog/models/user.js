const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
