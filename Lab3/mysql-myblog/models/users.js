const { DataTypes, Model } = require("sequelize"); //import Datatypes and Model(class) from Sequelize
let dbConnect = require("../dbConnect.js"); // import this to connect to database

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {} //define User class inheriting  from Sequelize Model --> User class inherit the function as database model

//Sequelize will create this table if it doesn't exsit on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance, // We pass the connection instance here
    modelName: "users", // use lowercase plural format
    timestamps: true, // enable timestamping
    freezeTableName: true, //table name = model name
  }
);

module.exports = User;
