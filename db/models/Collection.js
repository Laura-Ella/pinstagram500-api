//require dependencies

const mongoose = require("../../db/connection"); 
const Schema = mongoose.Schema;





//create Collection Schema

let CollectionSchema = new Schema ({
    title: String,
    tag: [{
        title: String
    }],
    preview_photos: [{
        url:{
            raw: String
        }
    }]

});


//export module
module.exports = mongoose.model("Collection", CollectionSchema) ;