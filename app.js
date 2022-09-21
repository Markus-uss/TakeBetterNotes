currentMode = 'lightMode'
savedNotes = [
    {title: 'note one', body: 'some text 1'},
    {title: 'note two', body: 'some text 2'}
]


function themeChange(currentMode) {
    if (currentMode == 'lightMode') {
        darkTheme()
        let currentMode = 'darkMode';
        return currentMode;
    } else if (currentMode == 'darkMode') {
        lightTheme()
        let currentMode = 'lightMode';
        return currentMode;
    }
}


function darkTheme() {
    button = document.getElementsByClassName('button');
    for (element of button) {
        if ((element.outerHTML).includes('background-color: rgb(57, 126, 61)') == true) { ///Changes button elements that are colored green
            element.style.backgroundColor = 'rgb(75, 104, 77)';
        } else if ((element.outerHTML).includes('background-color: rgb(223, 68, 48)') == true) { ///Changes button elements that are colored red
            element.style.backgroundColor = 'rgb(184, 97, 86)';
        }
        if ((element.innerHTML).includes('Dark Theme')) {
            element.innerText = 'Light Theme'
        }
    }
    document.getElementsByClassName('header')[0].style.backgroundColor = 'rgb(32, 32, 32)';
    document.getElementsByClassName('header')[0].style.color = 'rgb(204, 104, 0)';

    document.getElementsByClassName('menu')[0].style.backgroundColor = 'rgb(74, 74, 74)';

    document.getElementsByClassName('content')[0].style.backgroundColor = 'rgb(54, 54, 54)';

    document.getElementsByClassName('footer')[0].style.backgroundColor = 'rgb(32, 32, 32)';
    document.getElementsByClassName('footer')[0].style.color = 'rgb(204, 104, 0)';

    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(64, 64, 64)'

    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'rgb(116, 116, 116)'
}


function lightTheme() {
    button = document.getElementsByClassName('button');
    for (element of button) {
        if ((element.outerHTML).includes('background-color: rgb(75, 104, 77)') == true) { ///Changes button elements that are colored green
            element.style.backgroundColor = 'rgb(57, 126, 61)';
        } else if ((element.outerHTML).includes('background-color: rgb(184, 97, 86)') == true) { ///Changes button elements that are colored red
            element.style.backgroundColor = 'rgb(223, 68, 48)';
        }
        if ((element.innerHTML).includes('Light Theme')) {
            element.innerText = 'Dark Theme'
        }
    }

    document.getElementsByClassName('header')[0].style.backgroundColor = '#613d72';
    document.getElementsByClassName('header')[0].style.color = '#191d1d';

    document.getElementsByClassName('menu')[0].style.backgroundColor = '#f3eeff';

    document.getElementsByClassName('content')[0].style.backgroundColor = '#ac9bc4';

    document.getElementsByClassName('footer')[0].style.backgroundColor = '#605570';
    document.getElementsByClassName('footer')[0].style.color = '#191d1d';

    document.getElementsByTagName('body')[0].style.backgroundColor = '#f3eeff';

    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'white'
}


function cancel() {
    button = document.getElementsByClassName('button');
    for (element of button) {
        if ((element.innerText).includes('Save') || (element.innerText).includes('Cancel') == true) {
            element.classList.toggle('hidden');
            element.disabled = true;
        }
    }
    document.getElementsByTagName('textarea')[0].classList.toggle('hidden');
    document.getElementsByTagName('textarea')[0].disabled = true;
}


function newNote() {
    textArea = document.getElementsByTagName('textarea')[0]
    buttons = document.getElementsByClassName('button')
    if (textArea.disabled == true) {
        textArea.classList.toggle('hidden');
        textArea.disabled = false;
        for (element of buttons) {
            if ((element.innerText).includes('Save') || (element.innerText).includes('Cancel') == true) {
                element.classList.toggle('hidden');
                element.disabled = false;
            }
        }

    } else {
        textArea.value = ''
    }
}


function saveNote() {
    list = document.getElementsByTagName('ul')[0]
    textArea = document.getElementsByTagName('textarea')[0].value.split('\n')
    noteTitle = textArea.shift()
    noteContent = textArea.join('\n')

    let noteExist = false;

    for (note of savedNotes) {
        if (noteTitle == note.title) {
            noteExist = true;
        }
    }

    if (noteExist == false) {
        let newList = document.createElement('li');
        let newText = document.createTextNode(noteTitle);
        newList.appendChild(newText)
        list.appendChild(newList);
    }

    savedNotes.push ({
        title: noteTitle,
        body: noteContent
    })

    for (note of (list.children)) {
        if (note.onclick == null) {
            let newTitle = noteTitle
            note.onclick = function() {loadNote(newTitle)};
        }
    }
}


function loadNote(noteTitle) {
    list = document.getElementsByTagName('ul')[0].children
    for (note of savedNotes) {
        if (note.title == noteTitle) {
            savedTitle = String(note.title) + '\n';
            savedContent = note.body;
        }
    }
    document.getElementsByTagName('textarea')[0].value = savedTitle + savedContent
}