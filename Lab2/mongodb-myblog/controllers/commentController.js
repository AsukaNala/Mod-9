"use strict";
let Models = require("../models");

const getComments = (res) => {
  Models.Comment.find({})
    .then((data) =>
      res.send({
        result: 200,
        data: data,
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({
        result: 500,
        error: err.message,
      });
    });
};

const getComment = (req, res) => {
  Models.Comment.findOne(req.params.id)
    .then((data) =>
      res.send({
        result: 200,
        data: data,
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//finds all comments for a given post and populates with post/user details

const getPostComment = (req, res) => {
  Models.Comment.find({
    postId: req.params.pid,
  })
    .populate({ path: "postId" })
    .populate({
      path: "userId",
    })
    .then((data) =>
      res.send({
        result: 200,
        data: data,
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({
        result: 500,
        error: err.message,
      });
    });
};

const createComment = (data, res) => {
  console.log(data),
    new Models.Comment(data)
      .save()
      .then((data) =>
        res.send({
          result: 200,
          data: data,
        })
      )
      .catch((err) => {
        console.log(err);
        res.send({
          result: 500,
          error: err.message,
        });
      });
};

const updateComment = (req, res) => {
  console.log(req.body);
  Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) =>
      res.send({
        result: 200,
        data: data,
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({
        result: 500,
        error: err.message,
      });
    });
};

const deleteComment = (req, res) => {
  Models.Comment.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.send({
        result: 200,
        data: data,
      })
    )
    .catch((err) => {
      console.log(err);
      res.send({
        result: 500,
        error: err.message,
      });
    });
};

module.exports = {
  getComments,
  getComment,
  getPostComment,
  createComment,
  updateComment,
  deleteComment,
};
