"use strict";
const Models = require("../models");

const getLikes = (res) => {
  Models.Like.findAll({}).then((data) => {
    res.send({ result: 200, daya: data });
  });
};

const getLike = (res, req) => {
  Models.Like.findOne({
    where: { id: req.rapams.id },
  }).then((data) => {
    res.send({
      result: 200,
      data: data,
    });
  });
};

const getLikeIncludeAll = (res, req) => {
  Models.Like.findOne({
    where: { id: req.params.id },
    include: { all: true },
  }).then((data) => {
    res.send({ result: 200, data: data });
  });
};

const getLikesByPost = (res, req) => {
  Models.Like.findAll({ where: { postId: req.params.id } }).then((data) => {
    res.send({ result: 200, data: data });
  });
};

const getLikesByUser = (res, req) => {
  Models.Like.findAll({ where: { userId: req.params.id } }).then((data) => {
    res.send({ result: 200, data: data });
  });
};

const createLike = (data, res) => {
  Models.Like.create(data).then((data) => {
    res.send({ result: 200, data: data });
  });
};

const updateLike = (res, req) => {
  Models.Like.update(req.body, { where: { id: req.params.id } }).then(
    (data) => {
      if (!data) {
        res.send({ result: 404, error: "Like not found" });
      }
      res.send({ result: 200, data: data });
    }
  );
};

const deleteLike = (res, req) => {
  Models.Like.destroy({ where: req.params.id }).then((data) => {
    res.send({ result: 200, data: data });
  });
};

module.exports = {
  getLikes,
  getLike,
  getLikeIncludeAll,
  getLikesByPost,
  getLikesByUser,
  createLike,
  updateLike,
  deleteLike,
};
