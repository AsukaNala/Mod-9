let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

router.get("/:id", (req, res) => {
  Controllers.commentController.getComment(req, res);
});

router.get("/post/:pid", (req, res) => {
  Controllers.commentController.getPostComment(req, res);
});

router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
