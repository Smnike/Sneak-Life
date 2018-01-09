var mongoose   = require("./connection")
var seedData   = require("./seeds")

var Shoes = mongoose.model("Shoes")

Shoes.remove({})
.then(() => {
    Shoes.collection.insert(seedData)
    .then(() => {
        process.exit()
    })
})
