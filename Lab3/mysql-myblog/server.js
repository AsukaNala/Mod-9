const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");

require("./models");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Blog" });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
