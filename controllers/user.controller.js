const User = require("../models/user.model.js");

async function getAllUsers(req, res) {
  const allusers = await User.find({});

  return res
    .status(200)
    .json({ users: allusers, message: "All users fetched successfully" });
}

async function createNewUser(req, res) {
  const body = req.body;

  if (
    !body ||
    !(body.username && body.fullname && body.email && body.password)
  ) {
    console.log("All fields are required");
    return res.status(404).json({ message: "All fields are required" });
  }

  const user = await User.create({
    username: body.username,
    fullname: body.fullname,
    email: body.email,
    password: body.password,
  });
  console.log("user created succussfully");

  return res.status(201).json({ user, message: "User created successfully" });
}

async function getUserById(req, res) {

  const user = await User.findById(req.params._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ message: "User fetched successfully", user });
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
};
