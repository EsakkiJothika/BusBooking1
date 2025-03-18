let express = require("express");
const { addbus, findbus } = require("../controller/bus.controller");
const protectedRoute = require("../Middleware/middleware");

let busrouter = express.Router();

busrouter.post("/addbus",addbus)
busrouter.post("/findbus",protectedRoute,findbus)

module.exports = busrouter;