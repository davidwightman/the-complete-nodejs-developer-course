// import validator from 'validator';
// import { getNotes } from 'notes';
const getNotes = require('./notes.js')

var validator = require('validator');

const notes = getNotes();
console.log(notes)

console.log(validator.isURL('https://www.davi.com'))