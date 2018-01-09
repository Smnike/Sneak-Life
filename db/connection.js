// const mongoose = require("mongoose")
const mongoose = require("./models/shoes")

mongoose.Promise = Promise
                    //link from?
const mongoUri = "mongodb://localhost/sneaklife"

mongoose
    .connect(mongoUri, { useMongoClient: true })
    .then(connection =>
        console.log(
            `Connection established to db
"${connection.db.databaseName}"`
        )
    )
    .catch(connectionError =>
        console.log("Connection failed!", connectionError)
    )

module.exports = mongoose
