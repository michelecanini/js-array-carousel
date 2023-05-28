"use strict";

//PROBLEMA: Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

/* 
PARTE 1 DICHIARAZIONE DELLE VARIABILI
*/

// VARIABILE ARRAY ELENCO IMMAGINI
//let image_slider = [
//    './img/01.webp',
//    './img/02.webp',
//    './img/03.webp',
//    './img/04.webp',
//]

// VARIABILE DI COLLEGAMENTO ALLE IMMAGINI SLIDE
let sliderElement = document.querySelector('.row_slide');

// VARIABILE VUOTA PER AGGIUNGERE UN CONTENUTO DEL CAROSELLO
let slider_container = "";

/* 
PARTE 2 UTILIZZO DEL CICLO FOR PER LO SCORRIMENTO DI TUTTI GLI ELEMENTI IN DELL'ARRAY ELENCO IMMAGINI
*/

// CICLO FOR DI SCORRIMENTO
for(let i = 0; i < image_slider.length; i++){

    console.log(image_slider[i]);

    // VARIABILE DI RIFERIMENTO CURRENT IMAGE INTERNA AL CICLO
    let current_image = image_slider[i];

    // AGGIUNTA DEL CONTENITORE DIV HTML ALL'INTERNO DI CURRENT_IMAGE
    slider_container += `
        <div class="col_slide">
            <img src="${current_image}" alt="image_one" class="image_one">
        </div>
    `
}

sliderElement.innerHTML = slider_container;

let all_slide = document.getElementsByClassName('col_slide')


/* 
PARTE 3 COLLEGAMENTO AI BOTTONI PREV E NEXT


all_slide[0].classList.add('active');

let prevButton = document.querySelector('.button_prev');
let nextButton = document.querySelector('.button_next');

prevButton.addEventListener('click', function() {
    console.log("PREV");
})

nextButton.addEventListener('click', function() {
    console.log("NEXT");
}) */



