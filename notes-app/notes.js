const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateCheck = notes.filter(item => {
        if (title === item.title) {
            return true
        } else { 
            return false 
        }
    })
    if (duplicateCheck.length === 0) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
