let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.getPost("/:id", (req, res) => {
  Controllers.postController.getPost(req, res);
});

router.get("/user/:uid", (req, res) => {
  Controllers.postController.getPostByUser(req, res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
