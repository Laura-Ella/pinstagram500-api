const mongoose = require("mongoose");
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/pinstagram500", {
    useNewUrlParser: true
})

module.exports = mongoose;