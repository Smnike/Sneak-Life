const mongoose   = require("../db/connection")
const Shoes      = mongoose.model("Shoes")
const Router     = require("express").Router()

Router.get("/", (req, res) => {
    Shoes
    .find({})
    .then(sneakers => {
        res.render("sneakers-index", { shoes })
    })
})
// Router.get("/sneakers", (req, res) => {
//     Shoes
//     .find({})
//     .then(sneakers => {
//         res.render("sneakers-index", { shoes })
//     }
// })

Router.get("/sneakers/:brand", (req, res) => {
    Shoes
    .findOne({brand: req.params.brand} && {name: req.params.name} && {price: req.params.price})
    .then(shoes => {
        res.render("sneakers-show", { shoes })
    })
})

Router.post("/sneakers", (req, res) => {
    Shoes
    .create(req.body.shoes)
    .then(shoes => {
        res.redirect(`/sneakers/${shoes.brand} && ${shoes.name} && ${shoes.price}`)
    })
})

Router.delete("/sneakers/:name", (req, res) => {
    Shoes
    .findOneAndRemove({brand: req.params.brand} && {name: req.params.name} && {price: req.params.price})
    .then(() => {
        res.redirect("/sneakers")
    })
})

Router.put("/sneakers/:name", (req, res) => {
    Shoes
    .findOneAndUpdate({brand: req.params.brand} && {name: req.params.name} && {price: req.params.price}, req.body.shoes, {new: true})
    .then(shoes => {
        res.redirect(`/sneakers/${shoes.brand} && ${shoes.name} && ${shoes.price}`)
    })
})

module.exports = Router
