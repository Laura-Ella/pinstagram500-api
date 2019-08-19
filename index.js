const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(parser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.redirect()
})

app.set("port")

app.listen(app.get)