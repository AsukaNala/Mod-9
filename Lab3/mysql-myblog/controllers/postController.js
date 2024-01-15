"use strict";
const Models = require("../models");

//all posts
const showPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//single post
const showPost = (req, res) => {
  Models.Post.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.massage });
    });
};

//single post include all
const getPostIncludeAll = (req, res) => {
  Models.Post.findOne({ where: { id: req.params.id }, include: { all: true } })
    .then((data) => {
      if (!data) {
        res.sendStatus(404);
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//post by user id
const getPostByUser = (id, res) => {
  Models.Post.findAll({ where: { userId: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error in creating post", err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  showPosts,
  showPost,
  getPostIncludeAll,
  getPostByUser,
  createPost,
  updatePost,
  deletePost,
};
