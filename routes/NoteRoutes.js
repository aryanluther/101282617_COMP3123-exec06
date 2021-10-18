const express = require("express")
const noteModel = require('../models/NotesModel.js');
const mongoose = require("mongoose")

let app = express()

mongoose.connect('mongodb+srv://sa:rrfYrY3mSzHSgzJR@cluster0.qa3t4.mongodb.net/db_f2021_comp3123?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    // Validate request
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let n = {
        noteTitle: "Scheme Study",
        noteDescription: "Scheme lab exec",
        priority: "High, Low, Medium",
        dateAdded: "17/10/2021",
        dateUpdated: utc 
    }
    let new_note = new noteModel(n)

    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }else{
        await new_note.save(n)
        res.status(200).send("Note is save")
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
});
