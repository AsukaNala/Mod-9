const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/likeController");

router.get("/", (req, res) => {
  LikeController.getLikes(res);
});

router.get("/:id", (req, res) => {
  LikeController.getLike(req.params, id, res);
});

router.get("/include/:id", (req, res) => {
  LikeController.getLikeIncludeAll(req.params.id, res);
});

router.get("/posts/:id", (req, res) => {
  LikeController.getLikesByPost(req.params.id, res);
});

router.get("/users/:id", (req, res) => {
  LikeController.getLikesByUser(req.params.id, res);
});

router.post("/create", (req, res) => {
  LikeController.addLike(req.body, res).createLike(req.body.res);
});

router.put("/:id", (req, res) => {
  LikeController.updateLike(req.params.id, req.body, res);
});

router.delete("/:id", (req, res) => {
  LikeController.deleteLike(req.params.id, res);
});

module.exports = router;
