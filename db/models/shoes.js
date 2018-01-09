const mongoose = require("mongoose")

var ShoesSchema = new mongoose.Schema(
    {
        type: String,
        price: Number,
        athletes: Boolean
    }
)

mongoose.model("Shoes", ShoesSchema)

module.exports = mongoose
