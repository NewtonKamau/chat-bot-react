const router = require("express").Router();
const AuthController = require("../controllers/AuthController");
router.post("/register", AuthController.register);
//Login route
 router.post("/login", AuthController.login);

module.exports = router;
