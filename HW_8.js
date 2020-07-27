// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textArea = document.getElementById('textArea');
// textArea.value = localStorage.getItem('text');
// textArea.oninput = (ev) => {
//    localStorage.setItem('text', ev.target.value)
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// const form_1 = document.getElementById('form_1');
// getData(form_1)
// function saveForm(t) {
//     setDataForm(t);
// }

// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked ? tagElement.value = true : tagElement.value = false

//         localStorage.setItem(tagElement.id, tagElement.value)

//     }
// }

// function getData(tag) {
//     for(let i = 0; i < localStorage.length; i++) {
//         if(localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if(tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }



// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), 
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории 
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const text = document.getElementById('text');
const arrow_left = document.getElementById('arrow_left');
const arrow_right = document.getElementById('arrow_right');
const save = document.getElementById('save');

save.onclick = () => {
    localStorage.setItem(localStorage.length+1, text.value)
}

arrow_left.onclick = () => {
    arrow_right.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            if(localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === '1') {
        arrow_left.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(index-1);
}

arrow_right.onclick = () => {
    arrow_left.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            if(localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        arrow_right.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(+index+1);
}





// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта



