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
    './img/05.webp',
]

// COSTANTI DI COLLEGAMENTO ALLE CLASSI CSS NEL DOM DI RECUPERO DEL PRIMO ELEMENTO
const row_slide = document.querySelector('.row_slide');
const controls = document.querySelector('.controls_content');

// VARIABILI VUOTE PER IL CONTENUTO DELLE IMMAGINI
let row_slide_container = "";
let controls_container = "";

// VARIABILE DELL'IMMAGINE ATTIVA (VALORE ATTIVO)
let active_slide = 0;

/* 
PARTE 2 LOGICA DEL PROGRAMMA
*/

// CICLO FOR PER LO SCORRIMENTO DI TUTTI GLI ELEMENTI DELL'ARRAY (ELENCO IMMAGINI)
for(let i=0; i<image_slider.length; i++){
    row_slide_container += `<div class="col_slide">
                                <img src="./${image_slider[i]}" alt="image_one" class="image_one">
                            </div>`
    controls_container += `<div class="control">
                            <img src="./${image_slider[i]}" alt="image_one" class="image_one">
                            </div>`
}

// INIEZIONE IN COL_SLIDE E CONTROL DELL' L'HTML CREATO
row_slide.innerHTML = row_slide_container;
controls.innerHTML = controls_container;

// APPLICAZIONE DELLE VARIABILI CON IMMAGINE ATTIVA
document.getElementsByClassName('col_slide')[active_slide].classList.add('active');
document.getElementsByClassName('control')[active_slide].classList.add('active');

/* 
PARTE 3 COLLEGAMENTO AI BOTTONI PREV E NEXT
*/

//COSTANTI DEI BOTTONI PREV E NEXT
const prevButton = document.querySelector('.button_prev');
const nextButton = document.querySelector('.button_next');

//CLICK SUL DIV PREV
prevButton.addEventListener('click', function() {
    if(active_slide === 0){
        active_slide = image_slider.length -1;
    }
    else{
        active_slide--;
    }

    document.querySelector('.col_slide.active').classList.remove('active');
    document.getElementsByClassName('col_slide')[active_slide].classList.add('active');

    document.querySelector('.control.active').classList.remove('active');
    document.getElementsByClassName('control')[active_slide].classList.add('active');
});

//CLICK SUL DIV NEXT
nextButton.addEventListener('click', function() {
    if(active_slide === image_slider.length -1){
        active_slide = 0;
    }
    else{
        active_slide++;
    }

    document.querySelector('.col_slide.active').classList.remove('active');
    document.getElementsByClassName('col_slide')[active_slide].classList.add('active');

    document.querySelector('.control.active').classList.remove('active');
    document.getElementsByClassName('control')[active_slide].classList.add('active');
});



