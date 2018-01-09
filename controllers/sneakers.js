const mongoose   = require("../models/shoes")
const Shoes      = mongoose.model("Shoes")
const Router     = require("express").Router()

Router.get("/", (req, res) => {
    res.render("app-home")
})

Router.get("/sneakers", (req, res) => {
    Shoes
    .find({})
    .then(sneakers => {
        res.render("sneaker-index", { shoes })
    })
})
// Router.get("/sneakers", (req, res) => {
//     Shoes
//     .find({})
//     .then(sneakers => {
//         res.render("sneakers-index", { shoes })
//     }
// })

Router.get("/sneakers/:name", (req, res) => {
    Shoes
    .findOne({name: req.params.name})
    .then(shoe => {
        res.render("sneakers-show", { shoes })
    })
})

Router.post("/sneakers", (req, res) => {
    Shoes
    .create(req.body.candidate)
    .then(candidate => {
        res.redirect(`/sneakers/${shoes.name}`)
    })
})

Router.delete("/sneakers/:name", (req, res) => {
    Shoes
    .findOneAndRemove({name: req.params.name})
    .then(() => {
        res.redirect("/sneakers")
    })
})

Router.put("/sneakers/:name", (req, res) => {
    Shoes
    .findOneAndUpdate({name: req.params.name}, req.body.candidate, {new: true})
    .then(candidate => {
        res.redirect(`/sneakers/${candidate.name}`)
    })
})

module.exports = Router
