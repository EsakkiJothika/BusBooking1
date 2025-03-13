let express = require("express");
const { addbus, findbus } = require("../controller/bus.controller");

let busrouter = express.Router();

busrouter.post("/addbus",addbus)
busrouter.post("/findbus",findbus)

module.exports = busrouter;