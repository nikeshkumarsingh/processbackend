const express = require("express");
const cors = require("cors");
const usercontroller=require("./controller/user.controller");
const app = express();
const bodyparser=require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(cors());
app.use(express.json());

app.use("/users",usercontroller);

module.exports = app;