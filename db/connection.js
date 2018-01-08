import { Promise } from "mongoose";

const mongoose = require("mongoose")

mongoose.Promise = Promise

module.exports = mongoose
