//this file is to connect to MongoDB

"use strict";
const Mongoose = require("mongoose");

// if the connection fails. try 127.0.0.1 instead of localhost below
const uri = process.env.DB_URI || "mongodb://127.0.0.1/myFirstDatabase"; // URI = Uniform Resource Identifier: <DB_TYPE>://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/DATABASE_NAME>

//connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected!"))
  .catch((error) => console.log("MongoDB Error: " + error.message));

//get the default connection
const db = Mongoose.connection;

//bind connection to error event(to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.Mongoose = Mongoose;

//'module.exports' ->オブジェクト全体を置き換えてモジュールをエキスポート

//'exports.' ->'module.exports'の参照として機能。'exports'に直接値を代入すると、module.exports　を指す参照から独立したオブジェクトになりその値がエクスポートされる

//exports.Mongoose = Mongoose; の形式は、exports オブジェクトに Mongoose プロパティを追加しているだけで、exports そのものを新しいオブジェクトに差し替えているわけではありません。一方で、module.exports = Mongoose; の形式は、module.exports を新しいオブジェクトに差し替えています
