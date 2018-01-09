const express         = require("express")
const hbs             = require("express-handlebars")
const app             = express()

app.set("port", process.env.PORT || 3004)

app.set("view engine", "hbs")
app.engine(
    ".hbs",
    hbs({
        extname: ".hbs",
        partialsDir: "views/",
        layoutsDir: "views/",
        defaultLayout: "layout-main"
    })
)

app.get("/", (req, res) => {
    res.render("app-home")
}) 

app.listen(app.get("port"), () => {
    console.log(`It's aliiivve ${app.get("port")} ...or is it?`)
})
