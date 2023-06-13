'use strict';

// Monster Slayer (Optionnel) Vous devrez créer une page web contenant un petit jeu de combat avec un monstre. La page devra contenir au moins :
// * Deux barre de vie dynamique (joueur et monstre) * 4 boutons : attaque, attaque spéciale, soin et abandon * Optionnel : Logs du combats (couleurs différenciées joueur et monstre)

// 2 barre de vie : 100 pdv | bouton 'START A NEW GAME' | 4 boutons (ATTACK, SPECIAL ATTACK, HEAL, GIVE UP)
// ATTACK > aléatoire entre 3 et 10 pdv
// SPECIAL ATTACK > aléatoire entre 10 et 20 pdv
// HEAL > constant de 10 pdv

// Quand un bouton est utilisé, le monstre nous fait des dégats en retour entre 5 et 10 pdv

const mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.classList.add("main-content");

const myCharacterDiv = mainDiv.appendChild(document.createElement("div"));
myCharacterDiv.classList.add("myCharacterDiv");
const h1Character = myCharacterDiv.appendChild(document.createElement("h1"));
h1Character.innerHTML = 'YOU';

const myEnnemieDiv = mainDiv.appendChild(document.createElement("div"));
myEnnemieDiv.classList.add("myEnnemieDiv");
const h1Ennemie = myEnnemieDiv.appendChild(document.createElement("h1"));
h1Ennemie.innerHTML = 'MONSTER';



