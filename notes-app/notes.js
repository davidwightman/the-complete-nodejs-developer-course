const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.bold(`new note added`))
        console.log(notes)
    } else {
        console.log(chalk.bgRed.bold('title is already taken. please select a new title'))
    }

}

const removeNote = (title) => {
    try {
        const notes = loadNotes()
        const originalLength = notes.length
        notes.forEach((item, index) => {
            if (item.title === title) {
                notes.splice(index, 1); 
            }
        })
        saveNotes(notes)

        if (notes.length === originalLength) {
            console.log(chalk.bgRed.bold('note title not found'))
            return []
        } else {
            console.log(chalk.bgGreen.bold('note successfully removed'))
            console.log(notes)
        }
    } catch (e) {
        console.log(chalk.bgRed.bold('note successfully removed'))
        console.log(`remove failed: ${e}`)
        return []
    }
    
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const notes = JSON.parse(dataJSON)
        return notes
    } catch (e) {
        return []
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgGreen('Your Notes'))
    notes.forEach((item) => {
        console.log(`${item.title} ${item.body}`)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => note.title === title)
    if (selectedNote){
        console.log(chalk.bgGreen(selectedNote.title))
        console.log(selectedNote.body)
    } else {
        console.log('unable to find note')
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
