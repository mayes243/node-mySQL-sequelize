const { addUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require("../controllers/userController");

const router = require("express").Router();

// add new user | get all existing user
router.route("/")
    .post(addUser)
    .get(getAllUsers);

// get user | update user | delete user
router.route("/:id")
    .get(getSingleUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;