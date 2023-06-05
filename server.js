// Import express and other dependecies
const express = require('express');
const path = require('path');
const fs = require("fs");
const db = require('./db/db.json');

// Create Port for express server to run on
const PORT = process.env.port || 3001;

// Initilzes instance of express.js
const app = express();

// Middleware for JSON parsing and urlencoding data
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Static middleware points to public folder
app.use(express.static('public'));

app.use('/api', api);

// GET route for homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

//
app.route('/api/notes')
    //
    .get( function (req,res) {res.json(db)})

    //
    .post(function (req,res) {
        let dbPath = path.join(__dirname, './db/db.json');
        let notes = req.body;

        let maxNote = 100;

        for (let i=0; i < db.length; i++) {
            let note = db[i];
            if (note.id >)
        }
    })




// Listener for connections on specified port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);