var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const userController = require("../controllers/userController");

router.get("/", jwt.verifyToken, userController.getAllUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/delete", userController.deleteUser);
router.get("/token", userController.checkToken);

module.exports = router;
