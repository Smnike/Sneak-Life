// const mongoose = require("mongoose")
const mongoose = require("./models/shoe")

mongoose.Promise = Promise

const mongoUri = "mongodb://localhost/sneaklife"

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
} else {
    //Would stick with one formatting convention.
    mongoose
        .connect(mongoUri, {
            useMongoClient: true
        })
        .then(connection =>
            console.log(
                `Connection established to db\n"${connection.db.databaseName}"`
            )
        )
        .catch(connectionError =>
            console.log("Connection failed!", connectionError)
        )
}
module.exports = mongoose
