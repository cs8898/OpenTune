$(document).ready(function() {
	//setup
	befuelleBesetzung();
	befuelleInstrumentenVorlageListe();
	//registriere events
	$("#besetzungen").change(function(){
		leereInstrumentenVorlageListe();
		befuelleInstrumentenVorlageListe();
	});
	fill_difficulty_sel();
	$("#stimmung").click(aendereStimmung);
});

//Befüllen der Instrumentenvorlage-Liste
function befuelleInstrumentenVorlageListe() {
	var liste = $("#instrumentVorlagen");	
	var value = $("#besetzungen").val();
	if(value == 2)
	{
		for(var i = 0; i < instrumentVorlagen.length; i++)
		{
			var insName = instrumentVorlagen[i].name;
			var insMax = instrumentVorlagen[i].maxAnzahl;
			var insAnzahl = instrumentVorlagen[i].anzahl;
			var insId = "vorlage_" + instrumentVorlagen[i].type; //z.B. "anzahl_baritone"
			var s = '<div id="' + insId + '"><span>' + insName + '</span> <input class="checkboxC" 				type="number" min="0" max="' + insMax + '" value="' + insAnzahl + '"/></div><br />';
			$(liste).append(s);
		}
	}
	else {
		var art = besetzungen[value];
		for (var i = 0; i < art.instrumente.length; i++)
		{
			var type = art.instrumente[i].type;
			for(var y = 0; y < instrumentVorlagen.length; y++)
			{
				if(type == instrumentVorlagen[y].type)
				{
					instrumentVorlagen[y].anzahl = art.instrumente[i].anzahl;
					var insName = instrumentVorlagen[y].name;
					var insMax = instrumentVorlagen[y].maxAnzahl;
					var insAnzahl = instrumentVorlagen[y].anzahl;
					var insId = "vorlage_" + instrumentVorlagen[y].type; //z.B. "anzahl_baritone"
					var s = '<div id="' + insId + '"><span>' + insName + '</span> <input class="checkboxC" type="number" min="0" max="' + insMax + '" value="' + insAnzahl + '"/></div><br />';
					$(liste).append(s);
				}
			}
		}
	}
}

function leereInstrumentenVorlageListe() {
	$("#instrumentVorlagen").find("*").remove();	
}

function befuelleBesetzung() {
	$("#besetzungen").append(new Option("Bigband", 0));
	$("#besetzungen").append(new Option("Blasorchester", 1));
	$("#besetzungen").append(new Option("Eigene Auswahl", 2));
}

function spieleInstrumentAb(id) {
	var ins;
	for (var i = 0; i < instrumente.length; i++) {
		if (instrumente[i].id == id) {
			ins = instrumente[i];
			break;
		}
	}
	spieleAb(ins, 0);
}

function aendereStimmung()
{
	if($("#stimmgeraet").css("display") == "none")
	{
		$("#stimmgeraet").css("display","block");
	}else{
		$("#stimmgeraet").css("display","none");
	}
}
function spieleAlleInstrumenteAb() {
	for (var i = 0; i < instrumente.length; i++) {
		var ins = instrumente[i];
		//generiere zufällige verzögerung
		var min = 1;
		var max = 200;
		var delay = (Math.random() * (max - min)) + min;
		//spiele Audiodatei ab										
		spieleAb(ins, delay);		
	}
}

function spieleAb(ins, delay) {
	//generiere Audiopfad
	var audio = "audio/" + ins.type;
	if (ins.tuning < 0)
		audio += ins.tuning;
	else if (ins.tuning == 0)
		audio += "-0";
	else
		audio += "+" + ins.tuning;
	audio += ".mp3";
	//verzögert abspielen
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
