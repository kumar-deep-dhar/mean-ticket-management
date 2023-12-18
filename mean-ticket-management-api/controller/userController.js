const User = require("../models/user.model");
exports.register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const token = newUser.generateAuthToken();
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const token = user.generateAuthToken();
    res.json({ user, token });
  } catch (error) {}
};
