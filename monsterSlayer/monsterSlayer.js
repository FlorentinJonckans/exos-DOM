'use strict';

// Monster Slayer (Optionnel) Vous devrez créer une page web contenant un petit jeu de combat avec un monstre. La page devra contenir au moins :
// * Deux barre de vie dynamique (joueur et monstre) * 4 boutons : attaque, attaque spéciale, soin et abandon * Optionnel : Logs du combats (couleurs différenciées joueur et monstre)

// 2 barre de vie : 100 pdv | bouton 'START A NEW GAME' | 4 boutons (ATTACK, SPECIAL ATTACK, HEAL, GIVE UP)
// ATTACK > aléatoire entre 3 et 10 pdv
// SPECIAL ATTACK > aléatoire entre 10 et 20 pdv
// HEAL > constant de 10 pdv

// Quand un bouton est utilisé, le monstre nous fait des dégats en retour entre 5 et 10 pdv

let hpBarCharacterSpan = 100;
let hpBarEnnemieSpan = 100;

// Création de la div principale de mon body - nom de classe : main-content
const mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.classList.add("main-content");

// Création des éléments concernant mon personnage
const myCharacterDiv = mainDiv.appendChild(document.createElement("div"));
myCharacterDiv.classList.add("myCharacterDiv");
// h1
const h1Character = myCharacterDiv.appendChild(document.createElement("h1"));
h1Character.innerHTML = 'YOU';
// span
const hpBarCharacter = myCharacterDiv.appendChild(document.createElement("span"));
hpBarCharacter.classList.add("hpBarCharacter");
hpBarCharacter.id = "hpBarCharacter";
hpBarCharacter.innerHTML = hpBarCharacterSpan;

// Création des éléments concernant mon ennemie
const myEnnemieDiv = mainDiv.appendChild(document.createElement("div"));
myEnnemieDiv.classList.add("myEnnemieDiv");
// h1
const h1Ennemie = myEnnemieDiv.appendChild(document.createElement("h1"));
h1Ennemie.innerHTML = 'MONSTER';
// span
const hpBarEnnemie = myEnnemieDiv.appendChild(document.createElement("span"));
hpBarEnnemie.classList.add("hpBarEnnemie");
hpBarEnnemie.id = "hpBarEnnemie";
hpBarEnnemie.innerHTML = hpBarEnnemieSpan;

// Création d'une div comportant mes boutons d'actions
const buttonsContainer = document.body.appendChild(document.createElement("div"));
buttonsContainer.classList.add("buttonsContainer");
// bouton 'START NEW GAME'
const startButton = buttonsContainer.appendChild(document.createElement("button"));
startButton.id = "startButton";
startButton.innerHTML = 'START NEW GAME';
startButton.addEventListener('click', startNewGame);

// Création d'une div comportant l'historique des actions effectuées
const actionsContainer = document.body.appendChild(document.createElement("div"));
actionsContainer.classList.add("actionsContainer");
const h2ActionEvents = actionsContainer.appendChild(document.createElement("h2"));
h2ActionEvents.innerHTML = 'DERNIERES ACTIONS EFFECTUEES :';

// Bouton qui commence la partie et génère les boutons comportant les actions de mon personnage
function startNewGame(event){
    document.getElementById("startButton").remove();

    const attackButton = buttonsContainer.appendChild(document.createElement("button"));
    attackButton.id = "attackButton";
    attackButton.innerHTML = 'ATTACK';
    attackButton.addEventListener('click', attackButtonEffect);

    const specialAttackButton = buttonsContainer.appendChild(document.createElement("button"));
    specialAttackButton.id = "specialAttackButton";
    specialAttackButton.innerHTML = 'SPECIAL ATTACK';
    specialAttackButton.addEventListener('click', specialAttackButtonEffect);

    const healButton = buttonsContainer.appendChild(document.createElement("button"));
    healButton.id = "healButton";
    healButton.innerHTML = 'HEAL';
    healButton.addEventListener('click', healButtonEffect);

    const giveUpButton = buttonsContainer.appendChild(document.createElement("button"));
    giveUpButton.id = "giveUpButton";
    giveUpButton.innerHTML = 'GIVE UP';
    giveUpButton.addEventListener('click', giveUpButtonEffect);

    event.preventDefault();
}

// fonction qui retourne un nombre random compris entre deux valeurs (valeurs comprises)
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// fonction qui applique à mon ennemie une diminution de ses pdv
function attackButtonEffect(event){
    // mon action du tour
    let randomNumbCharacter = randomIntFromInterval(3,10);

    document.getElementById("hpBarEnnemie").style.width = (hpBarEnnemie.offsetWidth - randomNumbCharacter*3) + "px";  
    hpBarEnnemieSpan -= randomNumbCharacter;
    hpBarEnnemie.innerHTML = hpBarEnnemieSpan;
    
    // ajout de l'action dans l'historique des actions
    const newActionEventCharacter = actionsContainer.appendChild(document.createElement("p"));
    newActionEventCharacter.classList.add("newActionEventCharacter");
    newActionEventCharacter.innerHTML = 'PLAYER HITS MONSTER FOR ' + `${randomNumbCharacter}`;

    // l'action de l'ennemie 
    attackMonster();

    event.preventDefault();
}

// fonction qui applique à mon ennemie une grande diminution de ses pdv
function specialAttackButtonEffect(event){
    // mon action du tour
    let randomNumbCharacter = randomIntFromInterval(10,20);

    document.getElementById("hpBarEnnemie").style.width = (hpBarEnnemie.offsetWidth - randomNumbCharacter*3) + "px";  
    hpBarEnnemieSpan -= randomNumbCharacter;
    hpBarEnnemie.innerHTML = hpBarEnnemieSpan;
    
    // ajout de l'action dans l'historique des actions
    const newActionEventCharacter = actionsContainer.appendChild(document.createElement("p"));
    newActionEventCharacter.classList.add("newActionEventCharacter");
    newActionEventCharacter.innerHTML = 'PLAYER HITS MONSTER HARD FOR ' + `${randomNumbCharacter}`;

    // l'action de l'ennemie 
    attackMonster();

    event.preventDefault();
}

// fonction qui augmente mes pdv
function healButtonEffect(event){
    // l'action de l'ennemie
    let fixedNumber = 10;

    document.getElementById("hpBarCharacter").style.width = (hpBarCharacter.offsetWidth + fixedNumber*3) + "px";  
    hpBarCharacterSpan += fixedNumber;
    hpBarCharacter.innerHTML = hpBarCharacterSpan;

    // ajout de l'action dans l'historique des actions
    const newActionEventCharacter = actionsContainer.appendChild(document.createElement("p"));
    newActionEventCharacter.classList.add("newActionEventCharacter");
    newActionEventCharacter.innerHTML = 'PLAYER HEALS HIMSELF FOR ' + `${fixedNumber}`;

    // l'action de l'ennemie 
    attackMonster();

    event.preventDefault();
}

// fonction qui fait abandonner mon personnage
function giveUpButtonEffect(event){
    // retire dans la div tous les boutons existants
    document.getElementById("attackButton").remove();
    document.getElementById("specialAttackButton").remove();
    document.getElementById("healButton").remove();
    document.getElementById("giveUpButton").remove();

    // rajoute dans la div le bouton 'START NEW GAME'
    const startButton = buttonsContainer.appendChild(document.createElement("button"));
    startButton.id = "startButton";
    startButton.innerHTML = 'START NEW GAME';
    startButton.addEventListener('click', startNewGame);

    event.preventDefault();
}

// fonction qui applique une attack à mon personnage à chaque fois que mon personnage effectue une action
function attackMonster(){
    // l'action de l'ennemie
    let randomNumbEnnemie = randomIntFromInterval(5,10);

    document.getElementById("hpBarCharacter").style.width = (hpBarCharacter.offsetWidth - randomNumbEnnemie*3) + "px";  
    hpBarCharacterSpan -= randomNumbEnnemie;
    hpBarCharacter.innerHTML = hpBarCharacterSpan;

    // ajout de l'action dans l'historique des actions
    const newActionEventEnnemie = actionsContainer.appendChild(document.createElement("p"));
    newActionEventEnnemie.classList.add("newActionEventEnnemie");
    newActionEventEnnemie.innerHTML = 'MONSTER HITS PLAYER FOR ' + `${randomNumbEnnemie}`;
}