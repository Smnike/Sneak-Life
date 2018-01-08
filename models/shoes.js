const mongoose = require("../db/connection")

var ShoesSchema = new mongoose.Schema(
    {
        type: String,
        brand: String,
        price: Number,
        athletes: Boolean
    }
)

mongoose.model("Shoes", ShoesSchema)

module.exports = mongoose
