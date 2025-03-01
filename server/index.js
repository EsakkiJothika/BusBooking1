let express = require("express");
const AR = require("./module/auth.module");
const Connectdb = require("./lib/db.connect");
const LD = require("./module/auth.module");
let cors = require("cors")

let app = express()

app.use(express.json())
app.use(cors())

Connectdb()

app.use("/auth",AR)

app.use("/auth",LD)

app.listen(4000,()=>{

    console.log("server is running at : http://localhost:4000");
    
})