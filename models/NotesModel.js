const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority:String,
    dateAdded:Number,
    dateUpdated:Number
})

const Notes = mongoose.model("notes", noteSchema)
module.exports = Notes