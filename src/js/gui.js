$(document).ready(befuelleInstrumentenVorlageListe);

//Befüllen der Instrumentenvorlage-Liste
function befuelleInstrumentenVorlageListe() {
	var liste = $("#instrumentVorlagen");
	for (var i = 0; i < instrumentVorlagen.length; i++) {
		var insName = instrumentVorlagen[i].name;
		var insMax = instrumentVorlagen[i].maxAnzahl;
		var insAnzahl = instrumentVorlagen[i].anzahl;
		var insId = "vorlage_" + instrumentVorlagen[i].type; //z.B. "vorlage_baritone"
		var s = '<div id="' + insId + '"><span>' + insName + '</span> <input class="checkboxC" type="number" min="0" max="' + insMax + '" value="' + insAnzahl + '"/></div><br />';
		$(liste).append(s);
	}
}