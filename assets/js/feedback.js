'use strict';

let dialog = document.querySelector('#fb');
let iName = document.querySelector('.name');
let iPhone = document.querySelector('.phone');
let iEmail = document.querySelector('.email');
let iMessage = document.querySelector('.message');
let closeDialog = document.querySelector('.fb-close');
let form = document.querySelector('#fb-form');
let validateBtn = form.querySelector('.fb-btn');
let inputs = form.querySelectorAll('.fb-input');

document.querySelector('.fb-link').onclick = function(){
    dialog.classList.remove('disable');
    dialog.classList.add('active');
}

closeDialog.onclick = function(){
    dialog.classList.remove('active');
    dialog.classList.add('disable');
}

iName.onclick = function(){
    iName.classList.remove('empty');
    iName.placeholder = '';
}

iPhone.onclick = function(){
    iPhone.classList.remove('empty');
    iPhone.placeholder = '';
}

iEmail.onclick = function(){
    iEmail.classList.remove('empty');
    iEmail.placeholder = '';
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    let i = 0;
    
    for (let index = 0; index < inputs.length; index++) {
        if (!inputs[index].value) {
            inputs[index].classList.add('empty');
            inputs[index].placeholder = 'Поле обязательно для заполнения';
        } else if (inputs[index].value) {
            inputs[index].classList.remove('empty');
            i++;
        } else {
            inputs[index].classList.remove('empty');
        }
    }

    if (i == 3) {
        dialog.classList.remove('active');
        dialog.classList.add('disable');
    }
});