let express = require("express");
const { signup, login } = require("../controller/auth.controller");

let authrouter = express.Router()

authrouter.post("/signup",signup);

authrouter.post("/login",login)

module.exports = authrouter;
