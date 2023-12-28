const { DataTypes, Model } = require("sequelize"); //import Datatypes and Model(class) from Sequelize
let dbConnect = require("../dbConnect.js"); // import this to connect to database

const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance, // We pass the connection instance here
    modelName: "likes", // use lowercase plural format
    timestamps: true, // enable timestamping
    freezeTableName: true, //table name = model name
  }
);

module.exports = Like;
