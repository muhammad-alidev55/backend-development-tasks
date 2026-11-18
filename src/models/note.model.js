const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = new mongoose.model("note", newSchema)

module.exports = noteModel; 