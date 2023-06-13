'use strict';

// Score Keeper Vous devrez créer une page web contenant un petit formulaire de score. La page devra contenir au moins :
// * Un score en cours affiché * Un score maximal à atteindre * Trois boutons : `Player 1`, `Player 2` et `Reset` * Optionnel : une mise en forme améliorée / SASS

let valuePlayerOne = 0;
let valuePlayerTwo = 0;

// Création de la div principale de mon body - nom de classe : main-content
const mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.classList.add("main-content");

// Création d'une balise h1 - enfant de ma div principale de mon body 
const h1 = mainDiv.appendChild(document.createElement("h1"));
h1.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;

// Création d'une balise label - enfant de ma div principale de mon body 
const label = mainDiv.appendChild(document.createElement("label"));
label.innerHTML = `Playing to : `;

// Création d'une balise input - enfant de ma div principale de mon body 
const input = mainDiv.appendChild(document.createElement("input"));
input.type = 'number';
input.id = 'input';
input.name = 'name';

// Création de plusieures balises button - enfant de ma div principale de mon body 
const playerOneButton = mainDiv.appendChild(document.createElement("button"));
playerOneButton.innerHTML = 'Player One';

const playerTwoButton = mainDiv.appendChild(document.createElement("button"));
playerTwoButton.innerHTML = 'Player Two';

const resetButton = mainDiv.appendChild(document.createElement("button"));
resetButton.innerHTML = 'Reset';

function updateLabel(){
    if ( document.getElementById("input").value !== null ){
        label.innerHTML = `Playing to : ${document.getElementById("input").value}`;
    }
}

// onclick => incrément de 1 point le joueur 1
function incrValuePlayerOne(event){
    valuePlayerOne++;
    if (valuePlayerOne < +(document.getElementById("input").value)){
        h1.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;
        event.preventDefault();
    } else if( (valuePlayerOne === +(document.getElementById("input").value)) ){
        h1.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;
        alert("Player One win !");
        event.preventDefault();
        playerOneButton.removeEventListener('click',incrValuePlayerOne);
        playerTwoButton.removeEventListener('click',incrValuePlayerTwo);

    }
}

// onclick => incrément de 1 point le joueur 2
function incrValuePlayerTwo(event){
    valuePlayerTwo++;
    if (valuePlayerTwo < +(document.getElementById("input").value)){
        h1.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;
        event.preventDefault();
    } else if( (valuePlayerTwo === +(document.getElementById("input").value)) ){
        h1.innerHTML = `${valuePlayerOne} to ${valuePlayerTwo}`;
        alert("Player Two win !");
        event.preventDefault();
        playerOneButton.removeEventListener('click',incrValuePlayerOne);
        playerTwoButton.removeEventListener('click',incrValuePlayerTwo);
    }
}

// onclick => reload la page html
function resetValue(){
    location.reload();
}

input.addEventListener('change',updateLabel);
playerOneButton.addEventListener('click', incrValuePlayerOne);
playerTwoButton.addEventListener('click',incrValuePlayerTwo);
resetButton.addEventListener('click',resetValue);