function javascript() {
	var dati = document.getElementById("calcolo").value;
    var xhr = new XMLHttpRequest(); //XMLHttpRequest è usato per richiedere dati da un server web
    xhr.onreadystatechange = function() { //onreadystatechange definisce una funzione che deve essere eseguita quando readyState cambia. readyState mantiene lo stato di XMLHttpRequest
        if (this.readyState == 4 && this.status == 200) { //readyState = 4 significa che la richiesta è andata a buon fine e che la risposta è pronta
            document.getElementById("risultato").innerHTML = "Risultato: " + this.responseText; //responseText ritorna come stringa il corpo del server
        }else{
			document.getElementById("risultato").innerHTML = "Errore";
		}
    };
    xhr.open("GET", "http://api.mathjs.org/v4/?expr=" + dati, false);
    xhr.send();
}


function jquery() {
	var dati = document.getElementById("calcolo").value;
    $(document).ready(function() {
        $.ajax({
            url: "http://api.mathjs.org/v4/?expr=" + dati,
            success: function(result) {
                $("#risultatoq").html("Risultato: " + result);
            },
			error: function() {
				$("#risultatoq").html("Errore");
			}
        });
    });
}