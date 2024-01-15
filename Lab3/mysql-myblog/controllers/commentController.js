"use strict";
const Models = require("../models");

const showComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const showComment = (req, res) => {
  Models.Comment.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.massage });
    });
};

const getCommentIncludeAll = (req, res) => {
  Models.Comment.findOne({
    where: { id: req.params.id },
    include: { all: true },
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//get comments by postId
const getCommentsByPost = (id, res) => {
  Models.Comment.findAll({ where: { postId: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//get comments by userId
const getCommentsByUser = (id, res) => {
  Models.Comment.findAll({ where: { userId: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComment = (data, res) => {
  Models.Comment.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
  Models.Comment.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.send({ result: 404, error: "Comment not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteComment = (req, res) => {
  Models.getCommentsByUser
    .destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  showComments,
  showComment,
  getCommentIncludeAll,
  getCommentsByPost,
  getCommentsByUser,
  createComment,
  updateComment,
  deleteComment,
};
