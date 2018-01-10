const mongoose   = require("../db/connection")
const Shoes      = mongoose.model("Shoes")
const Router     = require("express").Router()

Router.get("/", (req, res) => {
    Shoes
    .find({})
    .then(sneakers => {
        res.render("sneakers-index", { sneakers })
    })
})

Router.get("/:brand/:name", (req, res) => {
    Shoes
    .findOne({brand: req.params.brand})
    .findOne({ name: req.params.name })
    .then(shoe => {
        res.render("sneakers-show", { shoe })
    })
})

// Router.get("/:name", (req, res) => {
//     Shoes
//     .find({})
//     .then(sneakers => {
//         res.render("sneakers-index", { sneakers })
//     })
// })

// Router.get("/:brand/:name", (req, res) => {
//     Shoes
//     .findOne({brand: req.params.brand} && {name: req.params.name} && {price: req.params.price})
//     .then(shoes => {
//         res.render("sneakers-show", { sneakers })
//     })
// })

Router.post("/sneakers", (req, res) => {
    Shoes
    .create(req.body.shoes)
    .then(shoes => {
        res.redirect(`/sneakers/${shoes.brand}/${shoes.name}`)
    })
})

Router.delete("/sneakers/:name", (req, res) => {
    Shoes
    .findOneAndRemove({brand: req.params.brand}/{name: req.params.name}/{price: req.params.price})
    .then(() => {
        res.redirect("/sneakers")
    })
})

// Router.put("/:name", (req, res) => {
//     Shoes
//     .findOneAndUpdate({brand: req.params.brand} && {name: req.params.name} && {price: req.params.price}, req.body.shoes, {new: true})
//     .then(shoes => {
//         res.redirect(`/sneakers/${shoes.brand} && ${shoes.name} && ${shoes.price}`)
//     })
// })

module.exports = Router
