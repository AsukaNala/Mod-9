const { DataTypes, Model } = require("sequelize"); //import Datatypes and Model(class) from Sequelize
let dbConnect = require("../dbConnect.js"); // import this to connect to database

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance, // We pass the connection instance here
    modelName: "comments", // use lowercase plural format
    timestamps: true, // enable timestamping
    freezeTableName: true, //table name = model name
  }
);

module.exports = Comment;
