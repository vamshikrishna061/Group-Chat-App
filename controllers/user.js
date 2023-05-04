const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.postUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      res.status(201).json({ message: "User already Exists, Please Login" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        await User.create({ name, email, password: hash, number });
        return res.status(201).json({ message: "User signup sucessful" });
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
