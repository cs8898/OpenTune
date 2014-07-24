$(document).ready(befuelleInstrumentenVorlageListe);
//$(document).ready(befuelleBesetzung);

//Befüllen der Instrumentenvorlage-Liste
function befuelleInstrumentenVorlageListe() {
	var liste = $("#instrumentVorlagen");
	for (var i = 0; i < besetzungen.length; i++) {
		var type = besetzungen[i].typ
		var insName = instrumentVorlagen[i].name;
		var insMax = instrumentVorlagen[i].maxAnzahl;
		var insAnzahl = instrumentVorlagen[i].anzahl;
		var insId = "anzahl_" + instrumentVorlagen[i].type; //z.B. "anzahl_baritone"
		var s = '<div><span>' + insName + '</span> <input class="checkboxC" type="number" id="' + insId + '" min="0" max="' + insMax + '" value="' + insAnzahl + '"/></div><br />';
		$(liste).append(s);
	}
}

/*var besetung = §("besetzung");
switch(besetzung.value())
case 'Eigene Auswahl':

break;
case: 'Bigband'

break;
case: 'Blasorchester'

break;*/

/*function befuelleBesetzung() {
	alert("hi");
}*/
