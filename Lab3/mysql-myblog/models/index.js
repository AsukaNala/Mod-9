"use strict";

const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");
const Like = require("./likes");

async function init() {
  //create relationship between models

  User.hasMany(Post, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });
  Post.belongsTo(User, {
    foreignKey: "userId",
    allowNull: false,
  });

  User.hasMany(Comment, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });
  Comment.belongsTo(User, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });

  User.hasMany(Like, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });
  Like.belongsTo(User, {
    foreignKey: {
      name: "userId",
      allowNull: false,
    },
  });

  Post.hasMany(Comment, {
    foreignKey: {
      name: "postId",
      allowNull: false,
    },
  });
  Comment.belongsTo(Post, {
    foreignKey: {
      name: "postId",
      allowNull: false,
    },
  });

  Post.hasMany(Like, {
    foreignKey: "postId",
    allowNull: false,
  });
  Like.belongsTo(Post, {
    foreignKey: "postId",
    allowNull: false,
  });

  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
