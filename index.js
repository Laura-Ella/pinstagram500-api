const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()

// const controller1 = require("path")
// const controller2 = require("path")

app.use(parser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.redirect("/photos")
})

app.use("/collections", require("../pinstagram500-api/db/routes/collections"))
app.use("/photos", require("../pinstagram500-api/db/routes/photos"))
app.use("/user", require("../pinstagram500-api/db/routes/user"))

app.set("port")

app.listen(4000, () => console.log('Server running on port 4000!'))