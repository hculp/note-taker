const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET route for retrieving all notes
app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new note to be added
notes.post('/', (req, res) => {
    console.log(req.body);
    
    const {title, text, id} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully')
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;