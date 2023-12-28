const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");

//parse requests of content-type application
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcom to MySQL application." });
});

//set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
