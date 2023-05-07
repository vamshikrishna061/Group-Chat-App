const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/user");
const Chat = require("./models/chat");
const Group = require("./models/group");
const Groupmembers = require("./models/grpmembers");

const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");

const sequelize = require("./utli/database");

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

const app = express();
app.use(helmet());
app.use(cors({
    origin: "*",
    //credentials: true,              
    methods: ["GET", "POST"],
  })
);
app.use(morgan('combined', {stream: accessLogStream}));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/message", messageRoutes);



User.hasMany(Chat);
Chat.belongsTo(User);

User.hasMany(Group);
Group.belongsTo(User);

Group.hasMany(Chat);
Chat.belongsTo(Group);

User.hasMany(Groupmembers);
Groupmembers.belongsTo(User);

Group.hasMany(Groupmembers);
Groupmembers.belongsTo(Group);

sequelize
  .sync()
   //.sync({ force: true })
  .then((res) => {
    app.listen(3000, (err) => {
      if (err) console.log(err);
      console.log("Server is listening for requests");
    });
  })

  .catch((err) => {
    console.log(err);
  });
