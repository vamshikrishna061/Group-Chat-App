const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/user");

const userRoutes = require("./routes/user");
const sequelize = require("./utli/database");

const app = express();
app.use(
  cors({
    origin: "*",
    //credentials: true,              
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());

app.use("/user", userRoutes);

sequelize
  .sync()
  .then((res) => {
    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("Server is listening for requests");
    });
  })

  .catch((err) => {
    console.log(err);
  });
