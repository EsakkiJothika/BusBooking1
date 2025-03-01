let express = require("express");
const { signup, login } = require("../controller/auth.controller");

let authrouter = express()

let AR = authrouter.post("/signup",signup);

let LD = authrouter.post("/login",login)

module.exports = AR;
module.exports = LD;