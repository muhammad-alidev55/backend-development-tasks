const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://backendDblayer:HSOjyRFfRq6zl77E@backendcltr.ccaciho.mongodb.net/halley")

    console.log("Database is Connected.")
}

module.exports = connectDB;