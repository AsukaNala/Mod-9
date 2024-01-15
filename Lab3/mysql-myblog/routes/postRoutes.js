const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

router.get("/", (req, res) => {
  // console.log("posts");
  PostController.showPosts(res);
});

router.get("/:id", (req, res) => {
  // console.log("posts");
  PostController.showPost(req.params.id, res);
});

router.get("/:id/include", (req, res) => {
  // console.log("posts");
  PostController.getPostIncludeAll(req.params.id, res);
});

router.get("/user/:id/", (req, res) => {
  // console.log("posts");
  PostController.getPostByUser(req.params.id, res);
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
