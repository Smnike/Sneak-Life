const express         = require("express")
// const hbs             = require("express-handlebars")
const app             = express()

app.set("port", process.env.PORT || 3004)

app.get("/", (req, res) => {
    res.send("Hello, World!")
}) 

app.listen(app.get("port"), () => {
    console.log(`It's aliiivve ${app.get("port")}`)
})
