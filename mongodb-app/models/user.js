//this file is for user model schema

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Schema = mongoose.Schema; //assign 'Schema' property of 'mongoose' object to variable 'Schema'

const userSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  emailId: { type: String, trim: true, required: true, unique: true },
  password: { type: String },
  createsAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema); //create the model for MongoDB with 'mongoose.model' method.First argument s the name of model, and second is the schema of its model.

//The 'user' mentioned in the above line should be in lowercase singular form... whereas the actual collection name in mongodb will be in the plural form.

//The first argument is the singular name of your collection. Mongoose automatically loks for the lowercase plural version. (EX) const MyModel = mongoose.model('Ticket', mySchema); then MyModel will use the tickets collection, not the Ticket collection.
