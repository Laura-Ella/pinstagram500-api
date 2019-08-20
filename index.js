const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(parser.json())
app.use(cors())



app.use("/collection", require("../pinstagram500-api/db/routes/collections"))
app.use("/", require("../pinstagram500-api/db/routes/photos"))
// app.use("/user", require("../pinstagram500-api/db/routes/user"))


const PORT = process.env.PORT || 3000

app.listen(PORT,() => console.info(`${PORT}`))