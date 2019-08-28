// import validator from 'validator';
// import { getNotes } from 'notes';
const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

//const command = process.argv[2]

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('removing the note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'listing out all of the notes',
    handler: function () {
        console.log('listing out all of the notes')
    }
})

// create list command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('reading a note')
    }
})

console.log(process.argv)
yargs.parse()
// if (command === 'add') {
//     console.log('adding note!')
// } else if (command === 'remove') {
//     console.log('removing note')
// }