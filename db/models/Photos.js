//require dependencies

const mongoose = require("../../db/connection");  
const Schema = mongoose.Schema;

//require subschemas models
let UserSchema = require("./User").schema




//create Photo Schema

let PhotoSchema = new Schema ({
    width: Number,
    height: Number,
    likes: Number,
    description: String,
    user: {UserSchema},
    url: {
        raw: String   
    },
    tag: String
});


//export module
module.exports = mongoose.model("Photo", PhotoSchema) ;