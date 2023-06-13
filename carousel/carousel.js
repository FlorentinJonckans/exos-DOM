'use strict';

// Carousel **_Vous devrez créer une page web contenant un petit carousel basique. La page devra contenir au moins :
// * Des divs avec un background color ou des balises img avec de vraies images * 1 bouton suivant * Optionnel : un bouton précédent, une mise en forme améliorée / SASS

const datas = [
    "https://www.francetvinfo.fr/pictures/SOapJNqC4oAvgNcLEHk9OZXSyN8/0x216:2312x1517/640x360/filters:format(webp)/2023/05/24/646de5a4f3641_angelique-bouin.jpg",
    "https://www.francetvinfo.fr/pictures/os9Lb3p59z3BsvIazy7sXhVOKAw/0x270:5196x3193/640x360/filters:format(webp)/2023/05/24/646e37d735e9e_alsaber.jpg",
    "https://www.francetvinfo.fr/pictures/_E_BRx6_fQ_P5nBgCKAGufUVU2o/0x150:1600x1050/640x360/filters:format(webp)/2023/05/23/646d3476225aa_easyjet-embarquement-passagers.jpeg",
    "https://www.francetvinfo.fr/pictures/NRf3GFsqwDHtmcRIlvwVqXzKq8k/0x26:652x393/640x360/filters:format(webp)/2023/05/23/646d167a0de01_futur.png"
];

// Création de la div principale de mon body - nom de classe : main-content
const mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.classList.add("main-content");

// Création d'une balise img - enfant de ma div principale de mon body 
const img = mainDiv.appendChild(document.createElement("img"));

// Par défaut, la première image dans la variable 'datas'
img.id = datas.indexOf("https://www.francetvinfo.fr/pictures/SOapJNqC4oAvgNcLEHk9OZXSyN8/0x216:2312x1517/640x360/filters:format(webp)/2023/05/24/646de5a4f3641_angelique-bouin.jpg");
img.src += datas[0];

let count = 1;

function nextUrlImg(){  
    if( img.id >= datas.length-1 ){
        count = 0;
        img.src = datas[count];
        img.id = count;
    }
    img.src = datas[count];
    img.id = count;
    count++;
}