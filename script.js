// Array di domande
var domande = [
    "Quanto ti piace la carne?",
    "Preferisci i piatti dolci o salati?",
    "Ti piacciono le verdure?",
    "Quanto ami i cibi piccanti?",
    "Hai preferenze alimentari particolari (vegetariano, vegano, senza glutine, ecc.)?"
  ];
  
  // Array di risposte possibili
  var risposte = [
    ["Molto", "Poco", "Per niente"],
    ["Dolci", "Salati", "Entrambi"],
    ["Sì", "No"],
    ["Molto", "Poco", "Per niente"],
    ["Sì", "No"]
  ];
  
  // Array di risultati possibili
  var risultati = [
    "Sei un appassionato di bistecche!",
    "Sei un amante dei dolci!",
    "Sei un vegetariano convinto!",
    "Sei un amante dei cibi piccanti!",
    "Hai preferenze alimentari particolari!"
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
  