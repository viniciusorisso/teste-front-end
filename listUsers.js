'use strict';
var values = [];
var code = document.querySelector('div');
fetch("https://reqres.in/api/users?page=1")
    .then(response => {
        return response.json();
    })
    .then(({data, total}) => {
        render(data, total);
    })
    .catch(err => {
    console.error(err);
    });

function render(data, total){
    data.forEach(element => {
        createCard(element.avatar, element.first_name+ ' ' + element.last_name, element.email, length, 10);
    });

    var divFooter = document.createElement('div');
    divFooter.classList.add('container__footerNumber');
    divFooter.appendChild(document.createTextNode('Mostrando ' + data.length + ' de ' + total));

    code.appendChild(divFooter);
}

function createCard(avatar, name, email, dataLength, maxValue){

    var divPai = document.createElement('div');
    divPai.classList.add('container__card');

    var imgPen = document.createElement('img');
    imgPen.classList.add('container__card__pen');
    imgPen.src = './assets/edit-icon.png';
    divPai.appendChild(imgPen);

    var imgAvatar = document.createElement('img');
    imgAvatar.classList.add('container__card__avatar');
    imgAvatar.src = avatar;
    divPai.appendChild(imgAvatar);

    var divNome = document.createElement('div');
    divNome.classList.add('container__card__name');
    divNome.appendChild(document.createTextNode(name));
    divPai.appendChild(divNome);

    var divEmail = document.createElement('div');
    divEmail.classList.add('container__card__email');
    divEmail.appendChild(document.createTextNode(email));
    divPai.appendChild(divEmail);

    code.appendChild(divPai);
}