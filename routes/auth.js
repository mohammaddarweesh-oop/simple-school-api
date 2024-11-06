const express = require("express");

const router = express.Router();
const { Login, Register } = require("../Controllers/auth");

router.route("/login").post(Login);
router.route("/register").post(Register);

module.exports = router;
