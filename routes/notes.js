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
        for (let i=0; i < db.length; i++) {
            if (id = db[i].id) {
                db.splice(i,1);
                break;
            }
        }

        fs.writeFileSync(db, JSON.stringify(db), (err) => {
            err ? console.log(err) : console.log('Note deleted')
        });
        res.json(db);
    } else {
        res.json({message: 'Error in deleting note'});
    }
})

module.exports = notes;