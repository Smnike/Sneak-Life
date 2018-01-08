var mongoose   = require("../models/shoes")
var seedData   = require("./seeds")

var Shoes = mongoose.model("Shoes")

Shoe.remove({}).then(function(){
    Shoes.collection.insert(seedData).then(function(){
        process.exit()
    })
})
