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
    $(document).ready(function() {
		var espressione = $('#calcoloq').val();
		var calc = {
			"expr": [espressione],
			"precision": 14
		};
		
        $.ajax({ 
			url: 'http://api.mathjs.org/v4/',
			type: 'get',
			contentType: 'application/json',
			data: JSON.stringify(calcoloq)
            success: function(data, textStatus, jQxhr) {
                $("#risultatoq").html("Risultato: " + data.result[0]);
            },
			error: function() {
				$("#risultatoq").html("Errore");
			}
        });
    });
}



function javascriptpost() {
	var input = document.getElementById("postcalcolo").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("postrisultato").innerHTML = this.responseText;
		}
	};
	xhttp.open("POST", "http://api.mathjs.org/v4/", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send({
		"expr": [input],
		"precision": 14
	});
}

function jquerypost() {
    var input = $('#postcalcoloq').val();
    var dati = {
        "expr": [input],
        "precision": 14
    };

    $.ajax({
        url: 'https://api.mathjs.org/v4/',
        type: 'POST',
        contenttype: 'application/json',
        data: JSON.stringify(dati),
        success: function(data, textStatus, jQxhr) { $("#risultatojq").html(data.result[0]); }
    });
}
