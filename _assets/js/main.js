/*

Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/

// Array oggetti
const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }, 
];

// path immagini
let directoryImage = "./_assets/_resources/imgs/";

// Seleziono dal DOM il container degli ITEMS
const containerItems = document.querySelector(".items");

// Variabile con indice di partenza
let currentIndex = 0;

// Seleziono dal DOM i button
const prev = document.querySelector(".handelPrev");
const next = document.querySelector(".handelNext");

// Al click del button Next
next.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        // Avanza di uno
        currentIndex++;
        setActiveImage(currentIndex);
    } else {
        currentIndex = 0;
    }
    setActiveImage(currentIndex)
});

// Al click del button Prev
prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        // Diminuisce di uno
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    setActiveImage(currentIndex)
});

// Arrow Function per impostare l'immagine corrente come attiva e le altre come non attiva
const setActiveImage = (index) => {
    containerItems.querySelectorAll(".item").forEach((item, itemIndex) => {
        if (itemIndex === index) {
            // Aggiunge la classe Active
            item.classList.add("active");
        } else {
            // Rimuove la classe Active
            item.classList.remove("active");
        }
    });
};

// ForEach
images.forEach((element, index) => {

    // Creao una costante per gli elementi
    const image = element.image
    const title = element.title
    const text = element.text

    // operatore Ternario per assegnare alla variabile "isActive" il valore Active se l'index corrente è uguale all'index dell'immagine corrente
    let isActive = index === currentIndex ? "active" : "";

    // Aggiungi la classe first al primo item
    if (index === 0) {
        isActive += " first";
        // Aggiungi la classe last all' ultimo item
    } else if (index === images.length - 1) {
        isActive += "last";
    }

    console.log(image, index)

    containerItems.innerHTML += `
    <div class="item ${isActive}">
        <img src="${directoryImage}${image}" alt="${title}">
        <div class="overlay">
            <h2 class="title">${title}</h2>
            <p class="description">${text}</p>
        </div>
    </div>
    `;

});