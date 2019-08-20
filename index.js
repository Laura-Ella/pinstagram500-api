const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(parser.json())
app.use(cors())

app.use("/collection", require("./db/routes/collections"))
app.use("/photo", require("./db/routes/photos"))

const PORT = process.env.PORT || 3000

app.listen(PORT,() => console.info(`${PORT}`))