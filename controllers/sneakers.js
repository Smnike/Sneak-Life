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
    .findOne({ brand: req.params.brand })
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
    Shoes.create(req.body.shoe)
    .then(shoe => {
        res.redirect(`/sneakers`)
    })
    .catch((err) => {
        console.log(err)
    })
})
// /${shoe.brand}/${shoe.name}
Router.delete("/:brand/:name", (req, res) => {
    Shoes
    .findOneAndRemove({brand: req.params.brand})
    .findOneAndRemove({name: req.params.name})
    .then(() => {
        res.redirect("/sneakers")
    })
})

Router.put("/:brand/:name", (req, res) => {
    Shoes
    .findOneAndUpdate({brand: req.params.brand}, req.body.shoe, {new: true})
    // .findOneAndUpdate({name: req.params.name}, req.body.shoes, {new: true})
    .then(shoe => {
        res.redirect(`/sneakers/${shoe.brand}/${shoe.name}`)
    })
})
module.exports = Router

