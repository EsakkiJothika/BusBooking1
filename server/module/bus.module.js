let express = require("express");
const { addbus, findbus, findsinglebus } = require("../controller/bus.controller");
const protectedRoute = require("../Middleware/middleware");

let busrouter = express.Router();

busrouter.post("/addbus",addbus)
busrouter.post("/findbus",protectedRoute,findbus)
busrouter.get("/singlebus/:id",findsinglebus)

module.exports = busrouter;