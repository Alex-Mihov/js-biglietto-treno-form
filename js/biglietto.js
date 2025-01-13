// selezione elementi di input
const nome = document.getElementById("nome")
const chilometri = document.getElementById("km")
const eta = document.getElementById("eta")
const form = document.querySelector('form');

// selezione elementi output
const acquirente = document.getElementById("acquirente")
const sconto = document.getElementById("sconto")
const prezzoFinale = document.getElementById("prezzo-finale")


// prendiamo i dati del form e li scriviamo nei blocchi

form.addEventListener("submit", (event) => {
    // Blocco l'invio del form
    event.preventDefault();

    // output acquirente
    acquirente.innerText = nome.value.trim();

    // ou
});