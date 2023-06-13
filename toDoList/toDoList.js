'use strict';

// Liste de courses Vous devrez créer une page web contenant une petite todo liste. La page devra contenir au moins :
// * Un input * 1 bouton ajouter * Optionnel : une possibilité de suppression et/ou d'édition, une mise en forme améliorée / SASS

const toDoList = ['Lait','Pain','Oeufs','Tomates'];

// Création de la div principale de mon body - nom de classe : main-content
const mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.classList.add("main-content");

// Création d'une balise h1 - enfant de ma div principale de mon body 
const h1 = mainDiv.appendChild(document.createElement("h1"));
h1.innerHTML = 'Liste de courses';

// Création d'une balise form - enfant de ma div principale de mon body 
const form = mainDiv.appendChild(document.createElement('form'));

// Création d'une balise label - enfant de ma balise form de mon body 
const label = form.appendChild(document.createElement("label"));
label.innerHTML = "Nom de l'article :";

// Création d'une balise input - enfant de ma balise form de mon body 
const input = form.appendChild(document.createElement("input"));
input.type = 'text';
input.id = 'input';
input.name = 'name';
input.placeholder = 'Ajouter des éléments';

// Création d'une balise button - enfant de ma balise form de mon body 
const button = form.appendChild(document.createElement("button"));
button.innerHTML = 'Ajouter';
button.type = 'button';
button.id = 'button';

// Création d'une balise ul - enfant de ma div principale de mon body 
const ul = mainDiv.appendChild(document.createElement("ul"));

// Création de plusieures balises l1 - enfant de ma balise ul 

for(let element of toDoList){
    let li = ul.appendChild(document.createElement("li"));
    li.innerHTML = element;
}

// Ajout l'input à la fin du tableau toDoList et affiche dans un li ce dernier élément
function addNewElementInToDoList(event){
    if( document.getElementById("input").value === '' ){
        return;
    }
    toDoList.push(document.getElementById("input").value);
    let li = ul.appendChild(document.createElement("li"));
    li.innerHTML = toDoList[toDoList.length-1];
    event.preventDefault();
}

const button1 = document.querySelector('button');
button1.addEventListener('click', addNewElementInToDoList);
form.addEventListener('submit', addNewElementInToDoList);