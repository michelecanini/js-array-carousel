"use strict";

//PROBLEMA: Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

/* 
PARTE 1 DICHIARAZIONE DELLE VARIABILI
*/

// VARIABILE ARRAY ELENCO IMMAGINI
let image_slider = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
]

// VARIABILE DI COLLEGAMENTO ALLE IMMAGINI SLIDE
let sliderElement = document.querySelector('.row_slide');


// VARIABILE VUOTA PER AGGIUNGERE UN CONTENUTO DEL CAROSELLO
let slider_container = "";

// CICLO FOR DI SCORRIMENTO SLIDER
for(let i = 0; i < image_slider.length; i++){

    console.log(image_slider[i]);

    // VARIABILE DI RIFERIMENTO
    let current_image = image_slider[i];
    slider_container += `
        <div class="col_slide">
            <img src="${current_image}" alt="image_one" class="image_one">
        </div>
    `
    
}

console.log(slider_container);