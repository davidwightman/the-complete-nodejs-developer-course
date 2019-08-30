const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateCheck = notes.filter(item => {
        if (title === item.title) {
            return true
        } else { false }
    })
    if (duplicateCheck.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(`new note added`)
    } else {
        console.log('title is already taken. please select a new title')
    }

}

const removeNote = function (title) {
    try {
        const notes = loadNotes()
    const titleCheck = notes.filter((item, index) => {
        if (item.title === title) {
            notes.splice(index, 1); 
        }
    })
       console.log(notes)
    } catch (e) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
