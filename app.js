const addButton = document.querySelector('.button-add');
const addInput = document.querySelector('#amigo');
const sortButton = document.querySelector("#sort");
const list = document.querySelector("#listaAmigos");
const result = document.querySelector("#resultado");

let secretList = [];

addButton.addEventListener('click', () => {
    if(addInput.value.trim() === ''){
        alert("Debes ingresar un nombre");
        return;
    }

    const name = document.createElement('p');
    name.classList.add('list-text');
    list.classList.add('list');

    name.textContent = addInput.value;
    list.appendChild(name);
    secretList.push(addInput.value);
    addInput.value = "";
});

sortButton.addEventListener('click', () => {
    if(secretList.length === 0){
        alert("Debes ingresar un nombre");
        return;
    }

    sortList(secretList);
});

function sortList(secretList){
    list.innerHTML = '';
    const randomName = secretList[Math.floor(Math.random() * secretList.length)];
    console.log(randomName);

    const winner = document.createElement('p');
    winner.textContent = `El amigo secreto sorteado es: ${randomName}`;
    result.appendChild(winner);
}