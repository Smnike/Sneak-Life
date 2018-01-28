const mongoose = require("mongoose")

var ShoesSchema = new mongoose.Schema(
    {
        brand: String,
        name: String,
        price: Number,
        athletes: Boolean // I am guessing this is to convey whether or not the shoe is athletic
        // http://mongoosejs.com/docs/4.x/docs/populate.html
        // but If you were thinking of adding a 2nd model Athletes
        // to link link athletes to shoes, check these out:
        // https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
        // https://stackoverflow.com/questions/17244825/mongoose-linking-objects-to-each-other-without-duplicating/17246508
        // https://stackoverflow.com/questions/34985846/mongoose-document-references-with-a-one-to-many-relationship
        // https://stackoverflow.com/questions/40877612/mongoose-should-i-add-refs-to-parent-docs-child-docs-or-both
    }
)

mongoose.model("Shoes", ShoesSchema)

module.exports = mongoose
