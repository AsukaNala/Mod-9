const { DataTypes, Model } = require("sequelize"); //import Datatypes and Model(class) from Sequelize
let dbConnect = require("../dbConnect.js"); // import this to connect to database

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {} //define User class inheriting  from Sequelize Model --> User class inherit the function as database model

//Sequelize will create this table if it doesn't exsit on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance, // We pass the connection instance here
    modelName: "posts", // use lowercase plural format
    timestamps: true, // enable timestamping
    freezeTableName: true, //table name = model name
  }
);

module.exports = Post;
