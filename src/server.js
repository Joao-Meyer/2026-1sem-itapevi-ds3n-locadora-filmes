const app = require("./app")

const SERVER_PORT = 3000

app.listen(SERVER_PORT, () => {
    console.log(`API em http://localhost:${SERVER_PORT}`)
})