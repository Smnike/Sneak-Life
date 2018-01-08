var mongoose   = require("../models/shoes")
var seedData   = require("./seeds")

var Shoes = mongoose.model("Shoes")

Shoe.remove({})
.then(() => {
    Shoes.collection.insert(seedData)
    .then(() => {
        process.exit()
    })
})