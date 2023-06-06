const notes = require('express').Router();
const fs = require('fs');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

// GET route for retrieving all notes
notes.get('/', (req, res) => {
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

// DELETE route for notes
notes.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    if (id) {
        fs.readFile('db/db.json', 'utf8',  (err, data) => {
        
            const parsedData = JSON.parse(data);

            if(parsedData.some(data => data.id === id)) {

                console.log('notes:', parsedData);

                const filteredNotes = parsedData.filter(note => note.id !== id);

                console.log('filteredNotes:', filteredNotes);

                fs.writeFile('db/db.json', JSON.stringify(filteredNotes), (err) => {
                    err ? console.log(err) : console.log('Note deleted')
                });
                res.json(db);
            } else {
                res.json({message: 'Note can\'t found'});
            }
        
        });
    } else {
        res.json({message: 'Error in deleting note'});
    }    
})

module.exports = notes;