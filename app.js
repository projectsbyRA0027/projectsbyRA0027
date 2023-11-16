const addbtn = document.getElementById('add')
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}

addbtn.addEventListener('click',()=>addNewNote())