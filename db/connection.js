const mongoose = require("mongoose");
mongoose.Promise = Promise;
let mongoURI = "mongodb://localhost:3000";

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})

module.exports = mongoose;