$(document).ready(befuelleInstrumentenVorlageListe);

//Befüllen der Instrumentenvorlage-Liste
function befuelleInstrumentenVorlageListe() {
	var liste = $("#instrumentVorlagen");
	for (var i = 0; i < instrumentVorlagen.length; i++) {
		var insName = instrumentVorlagen[i].name;
		var insMax = instrumentVorlagen[i].maxAnzahl;
		var insAnzahl = instrumentVorlagen[i].anzahl;
		var insId = "vorlage_" + instrumentVorlagen[i].type; //z.B. "anzahl_baritone"
		var s = '<div id="' + insId + '"><span>' + insName + '</span> <input class="checkboxC" type="number" min="0" max="' + insMax + '" value="' + insAnzahl + '"/></div><br />';
		$(liste).append(s);
	}
}

function spieleAlleInstrumenteAb() {
	for (var i = 0; i < instrumente.length; i++) {
		var ins = instrumente[i];
		//generiere Audiopfad
		var audio = "audio/" + ins.type;
		if (ins.tuning < 0)
			audio += ins.tuning;
		else if (ins.tuning == 0)
			audio += "-0";
		else
			audio += "+" + ins.tuning;
		audio += ".mp3";
		//generiere zufällige verzögerung
		var min = 1;
		var max = 200;
		var delay = (Math.random() * (max - min)) + min;
		//spiele Audiodatei ab										
		spieleAb(audio, delay);		
	}
}

function spieleAb(audio, delay) {
	setTimeout(function() {
		new Audio(audio).play();
	}, delay);
}

/*TEST
$(document).ready(function() {
	spieleAb("audio/trombone-0.mp3", 1000);
	spieleAb("audio/tuba+40.mp3", 1800);
});

*/