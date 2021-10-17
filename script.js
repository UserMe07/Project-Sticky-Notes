const addButton = document.querySelector('.add-note');
const saveButton = document.querySelector('.save');
const cancelButton = document.querySelector('.cancel');
const deleteButton = document.getElementsByClassName('delete-note');
const deleteAllButton = document.querySelector('.delete-notes');

const noteField = document.querySelector('.note-field');
const notePopup = document.querySelector('.note-popup');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openWindow = () => {
    notePopup.style.display = 'flex';
}

const closeWindow = () => {
    notePopup.style.display = 'none';
    error.style.visibility = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">Note#${cardID}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${textarea.value}
        </div>  
    `

    noteField.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = 0;
    notePopup.style.display = 'none';
    checkColor(newNote);
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Shopping':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Work':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Others':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
        case 'Covid-19':
            note.style.backgroundColor = 'rgb(0,0,0)';
            break;    
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteField.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    noteField.textContent = ''
}

addButton.addEventListener('click', openWindow);
cancelButton.addEventListener('click', closeWindow);
saveButton.addEventListener('click', addNote);
deleteAllButton.addEventListener('click', deleteAllNotes);
