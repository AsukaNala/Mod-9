"use strict";
module.exports = { User: require("./user") };

//1.'require('./user') -> imports the user.js file in the same directry
//2.{ User: require("./user") };- ->creates the object called 'User' property which is assigned to a module exported from user.js
//3. exported as {User:...} so will be imported as {User:...}
//4. can be used like const {User} = require('/')
