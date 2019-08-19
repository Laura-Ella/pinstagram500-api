const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()

// const controller1 = require("path")
// const controller2 = require("path")

app.use(parser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.redirect()
})

app.set("port")

app.listen(4000, () => console.log('Server running on port 4000!'))