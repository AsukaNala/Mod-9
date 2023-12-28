"use strict";
const { Sequelize } = require("sequelize"); //import Sequelize class

//Sequelize is a package that abstracts out the need to write SQL queries, relying  instead on their models to do it for you

//create Sequelize instance to connect to MySQL database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "mysql" }
); //they are set in .env file

const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Successful connection to MySQL Database ${process.env.DB_NAME}`
    );
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1); //to stop Node.js process when error occures.  this code makes the process end with errorcode 1(it means the program finishes with error)
  }
};

connectMysql();

module.exports = { Sequelize: sequelize };

//Mongoose also works asyncronously but many of its methos can take callback function. so did not need to use async/await
