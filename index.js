const express         = require("express")
const hbs             = require("express-handlebars")
const app             = express()
const SneakController = require("./controllers/sneakers")

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
 //Gets the home page
app.get("/", (req, res) => {
    res.render("app-home")
}) 

//Tells app that when it goes to a route that begins with sneakers, use this router
app.use("/sneakers", SneakController)

app.listen(app.get("port"), () => {
    console.log(`It's aliiivve ${app.get("port")} ...or is it?`)
})
