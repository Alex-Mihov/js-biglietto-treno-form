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
    console.log(nome.value.trim());
    

    // output tipo di sconto applicato
    // SE l'acquirente è minorenne
    if (eta.value <= 17) {
        sconto.innerText = "Ha diritto ad uno sconto del 20% per i minorenni!"
        console.log("ha diritto al 20% di sconto")
    }
    // ALTRIMENTI SE l'acquirente è over 65
    else if (eta.value >= 65) {
        sconto.innerText = "Ha diritto ad uno sconto del 40% per gli over 65!"
        console.log("ha diritto al 40% di sconto")
    }
    // ALTRIMENTI prezzo intero
    else {
        sconto.innerText = "Spiacente, non ha diritto a nessuno sconto."
        console.log("spiacente, non ha diritto a nessuno sconto")
    }
});