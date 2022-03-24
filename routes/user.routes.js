const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:uuid", userController.getOneUser);
router.put("/user/:uuid", userController.updateUser);
router.delete("/user/:uuid", userController.deleteUser);

module.exports = router;