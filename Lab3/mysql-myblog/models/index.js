"use strict";

const User = require("./users");
const Post = require("./posts");
const Comment = require("./comments");
const Like = require("./likes");

async function init() {
  User.hasMany(Post);
  Post.belongsTo(User);

  User.hasMany(Comment);
  Comment.belongsTo(User);

  User.hasMany(Like);
  Like.belongsTo(User);

  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  Post.hasMany(Like);
  Like.belongsTo(Post);
  // these create foreign key automatically in MySQL

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

//Thought.belongsTo(Person, { constraints: true, foreignKeyConstraint:true  } );Person.hasMany(Thought)

//Article.belongsTo(User, {    as: "Author",     onDelete: 'CASCADE',     foreignKey: { name:'author_id', allowNull: false }});
