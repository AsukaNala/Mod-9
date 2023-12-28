const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

router.get("/", (req, res) => {
  // console.log("posts");
  PostController.showPosts(res);
});

router.post("/create", (req, res) => {
  PostController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
  PostController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
  PostController.deletePost(req, res);
});

module.exports = router;
