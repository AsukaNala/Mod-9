// this file is to create some API endpoints to add  a user to database and retrieve the users from database

let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

//adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

//adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
