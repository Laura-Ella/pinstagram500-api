const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(parser.json())
app.use(cors())


app.use("/collection", require("./db/routes/collections"))
app.use("/", require("./db/routes/photos"))
// app.use("/user", require("./"))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});