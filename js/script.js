"use strict";
//PROBLEMA: Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

/* 
PARTE 1 DICHIARAZIONE DELLE VARIABILI
*/

// COSTANTE ARRAY CON ELENCO DELLE IMMAGINI
const image_slider = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
]

// COSTANTI DI COLLEGAMENTO ALLE CLASSI CSS NEL DOM DI RECUPERO DEL PRIMO ELEMENTO
const row_slide = document.querySelector('.row_slide');
const controls = document.querySelector('.controls');

// VARIABILI VUOTE PER CONTENERE IL CONTENUTO DELLE IMMAGINI
let row_slide_container = "";
let controls_container = "";

// VARIABILE DELL'IMMAGINE ATTIVA
let active_slide = 0;

/* 
PARTE 2 LOGICA DEL PROGRAMMA
*/

// CICLO FOR PER LO SCORRIMENTO DI TUTTI GLI ELEMENTI DELL'ARRAY (ELENCO IMMAGINI)
for(let i=0; i<images.length; i++){
    row_slide_container += `<div class="col_slide">
                                <img src="./${images[i]}" alt="image_one" class="image_one">
                            </div>`
    controls_container += `<div class="control">
                            <img src="./${images[i]}" alt="image_one" class="image_one">
                            </div>`

    // INIEZIONE IN COL_SLIDE E CONTROL DELL' L'HTML CREATO
    row_slide.innerHTML = row_slide_container;
    controls.innerHTML = controls_container;

    
}

//sliderElement.innerHTML = slider_container;

//let all_slide = document.getElementsByClassName('col_slide')


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



