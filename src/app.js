const express = require("express")

const testRoutes = require("./routes/testRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("API DA LOCADORA FUNCIONANDO!")
})

app.use("/test", testRoutes)

module.exports = app