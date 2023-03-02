const { addUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require("../controllers/userController");

const router = require("express").Router();

router.route("/").post(addUser).get(getAllUsers);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;