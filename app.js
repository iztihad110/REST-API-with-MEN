let express = require("express");
let app = express();
let mongoose = require("mongoose");
let router = require("./Routes/user.route");



let db_url = "mongodb://127.0.0.1:27017/system"

mongoose.connect(db_url)
.then(()=>console.log("Connection with mongodb was successful"))
.catch(()=>console.log("Could not connect to mongodb"));

app.use('/user', router);

module.exports = {
    app
}