//require dependencies

const mongoose = require("../../db/connection"); 
const Schema = mongoose.Schema;


//create User Schema

let UserSchema = new Schema ({
    username: String
   
});

//export module
module.exports = mongoose.model("User", UserSchema) ;