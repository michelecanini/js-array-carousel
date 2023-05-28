# CAROSELLO MONO ARRAY
## PROBLEMA: Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

### Milestone 1
    1. Creiamo il markup statico costruendo un container.
    2. Inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
    3. Creare dei container per i bottoni avanti ed indietro.
    4. Centrare ed allineare i bottoni.
    5. Inserire le altre slide per testare il funzionamento.
    
### Milestone 2
    1. Rimuoviamo tutto il markup statico delle immagini.
    2. inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
    3. creiamo una variabile di collegamento alle immagini con querySelector
    4. creiamo un ciclo for per lo scorrimento delle immagini
    5. creiamo una variabile stringa vuota per lo scorrimento del contenuto immagine nel carosello
    6. inseriamo i div html nel file js all'interno del ciclo for

### Milestone 3
    1. al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
    2. gestire correttamente l'immagine attiva e quelle disattivate.