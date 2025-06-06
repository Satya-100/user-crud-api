const express = require("express");
const {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller.js");
const router = express.Router();

router.route("/")
        .get(getAllUsers)
        .post(createNewUser);

router.route("/:id")
        .get(getUserById)
        .patch(updateUserById)
        .delete(deleteUserById);

module.exports = router;
