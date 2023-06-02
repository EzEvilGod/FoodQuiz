// Array di domande
var domande = [
    "Quanto ti piace la carne?",
    "Preferisci i piatti dolci o salati?",
    "Ti piacciono le verdure?",
    "Quanto ami i cibi piccanti?",
    "Preferisci mangiare al fast food o in un ristorante?"
  ];
  
  // Array di risposte possibili
  var risposte = [
    ["Molto", "Poco", "Per niente"],
    ["Dolci", "Salati", "Entrambi"],
    ["Sì", "No"],
    ["Molto", "Poco", "Per niente"],
    ["fast food", "ristorante"]
  ];
  
  // Array di risultati possibili
  var risultati = [
    "sei proprio un Ragù alla Bolognese",
    "Sei un bellissimo e dolcissimo Panckake!",
    "Fa strano ma sei un amante del Minestrone",
    "Sei un gustosa Pizza Piccante",
    "Sei un tipo da kebab (Sciao biello, con o senza scipolla)"
  ];
  
  // Funzione per calcolare il risultato
  function calcolaRisultato() {
    var punteggi = [0, 0, 0, 0, 0];
  
    // Ottieni le risposte selezionate
    var selezioni = document.querySelectorAll("input[type=radio]:checked");
  
    // Calcola il punteggio per ogni domanda
    for (var i = 0; i < selezioni.length; i++) {
      var valore = parseInt(selezioni[i].value);
      punteggi[i] = valore;
    }
  
    // Calcola il punteggio totale
    var punteggioTotale = punteggi.reduce((a, b) => a + b, 0);
  
    // Ottieni l'indice del risultato corrispondente al punteggio totale
    var indiceRisultato = punteggioTotale % risultati.length;
  
    // Mostra il risultato
    var risultato = document.getElementById("risultato");
    risultato.innerHTML = risultati[indiceRisultato];
  }
  
  // Funzione per creare il test
  function creaTest() {
    var form = document.getElementById("test");
  
    for (var i = 0; i < domande.length; i++) {
      // Crea il titolo della domanda
      var titolo = document.createElement("h3");
      titolo.innerHTML = domande[i];
      form.appendChild(titolo);
  
      // Crea le risposte possibili come radio button
      for (var j = 0; j < risposte[i].length; j++) {
        var label = document.createElement("label");
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "domanda" + i);
        radio.setAttribute("value", j + 1);
        label.appendChild(radio);
        label.appendChild(document.createTextNode(risposte[i][j]));
        form.appendChild(label);
      }
  
      // Aggiungi un separatore tra le domande
      form.appendChild(document.createElement("hr"));
    }
  
    // Crea il pulsante di invio
    var submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("value", "Mostra risultato");
    submit.addEventListener("click", calcolaRisultato);
    form.appendChild(submit);
  
    // Crea il div per mostrare il risultato
    var risultatoDiv = document.createElement("div");
    risultatoDiv.setAttribute("id", "risultato");
    form.appendChild(risultatoDiv);
  }
  
  // Chiamata alla funzione per creare il test
  creaTest();
  