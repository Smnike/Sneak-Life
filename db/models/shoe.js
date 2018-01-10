const mongoose = require("mongoose")

var ShoesSchema = new mongoose.Schema(
    {
        brand: String,
        name: String,
        price: Number,
        athletes: Boolean
    }
)

mongoose.model("Shoes", ShoesSchema)

module.exports = mongoose
