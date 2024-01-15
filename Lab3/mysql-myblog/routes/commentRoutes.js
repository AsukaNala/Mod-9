const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentController");

router.get("/", (req, res) => {
  CommentController.showComments(res);
});

router.get("/:id", (req, res) => {
  CommentController.showComment(req.params.id, res);
});

router.get("/:id/include", (req, res) => {
  CommentController.getCommentIncludeAll(req.params.id, res);
});

router.get("/posts/:id", (req, res) => {
  CommentController.getCommentsByPost(req.params.id, res);
});

router.get("/users/:id", (req, res) => {
  CommentController.getCommentsByUser(req.params.id, res);
});

router.post("/create", (req, res) => {
  CommentController.createComment(req.body, res);
});

router.put("/:id", (req, res) => {
  CommentController.updateComment(req.params.id, req.body, res);
});

router.delete("/:id", (req, res) => {
  CommentController.deleteComment(req.params.id, res);
});

module.exports = router;
