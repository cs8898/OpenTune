var stimm_timeout = null;

$(document).ready(function() {
	//setup
	$("#middle_bottom_div").css("display","none");
	befuelleBesetzung();
	befuelleModus();
	berechneHilfe();
	befuelleInstrumentenVorlageListe();
	//registriere events
	$("#modus_sel").change(function(){
		berechneHilfe();		
	});
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
			var insAnzahl = 0; //instrumentVorlagen[i].anzahl; //wir starten immer mit 0 bei "Eigene Auswahl"
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
	
	//every Second bg-color: #89d7d4
	$(".container div:odd").css("background-color","#89d7d4");
}

function leereInstrumentenVorlageListe() {
	$("#instrumentVorlagen").find("*").remove();	
}

function befuelleBesetzung() {
	$("#besetzungen").append(new Option("Bigband", 0));
	$("#besetzungen").append(new Option("Blasorchester", 1));
	$("#besetzungen").append(new Option("Eigene Auswahl", 2));
}

function befuelleModus() {
	$("#modus_sel").append(new Option("Arcade", "arcade"));
	$("#modus_sel").append(new Option("Training", "training"));
}

function berechneHilfe(){
	if(spielStatus.modus == "arcade")
	{
		var s = schwierigkeiten[spielStatus.schwierigkeit];
		spielStatus.hilfen = Math.round(s.anzahlHilfen * instrumente.length);
		$("#help_div").css("display","inline-block");		
	}else if(spielStatus.modus == "training"){
		spielStatus.hilfen = -1;
		$("#help_div").css("display","none");
	}
}

function zeigeHilfen()
{
		$("#help_counter").text(spielStatus.hilfen);	
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

	//stimmgerät
	if($("#stimmgeraet").css("display") == "block" && (spielStatus.hilfen > 0 || spielStatus.modus == "training"))
	{
		var stimm_element = (ins.tuning/10)+5;
		if (stimm_element <= 0){
			setElement(stimmgeraetProgressID,0,true);
		} else if(stimm_element >= 10) {
			setElement(stimmgeraetProgressID,10,true);
		} else {
			setElement(stimmgeraetProgressID,stimm_element,true);
		}
		clearTimeout(stimm_timeout);
		stimm_timeout = setTimeout(function(){
			setElement(stimmgeraetProgressID,-1,true);
		}, 4000);
		if (spielStatus.modus == "arcade"){
			spielStatus.hilfen -= 1;
			zeigeHilfen();
		}
	}
}


function spieleStimmgabel(id) {
		new Audio("audio/tuningfork442"+ id + ".mp3").play();
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
		var max = 100;
		var delay = (Math.random() * (max - min)) + min;
		//spiele Audiodatei ab										
		spieleAb(ins, delay);	
	}
}

function Auswertungausfuehren() {
	if (instrumente.length == 0) {
		$(".SpielFlaeche").html('<div style="width:100%;text-align:center;padding-top:3em;">Du hast doch noch gar nicht begonnen!</div>');
	}
	else {
		spielStatus.status = "auswertung";
		$(".SpielFlaeche").html('<div style="width:100%;text-align:center;padding-top:3em;">Deine Punktezahl:<br/><br/>' + Math.round(fortschritt() * 100) + ' von 100 Punkten!<br /><br />'+returnAllInstrumentTuneing()+'</div>');
		spieleAlleInstrumenteAb();
	}
}

function returnAllInstrumentTuneing(){
	var temp = "";
	for (var i = 0; i < instrumente.length; i++){
		temp += instrumente[i].type+';'+instrumente[i].tuning+' <br />';
	}
	return temp;
}

function spieleAb(ins, delay) {
	//prüfe, ob audio bereits abgespielt wurde
	if (ins.audio != null)
		ins.audio.pause();
	//AUDIO File Preloaded in ins.audio
    if (ins.audio == null)
        generateAudio(ins);
	//verzögert abspielen
	setTimeout(function() {
		ins.audio.play();
	}, delay);
}

function generateAudio(ins){
    //generiere Audiopfad
	var audio = "audio/" + ins.type;
	if (ins.tuning < 0)
		audio += ins.tuning;
	else if (ins.tuning == 0)
		audio += "-0";
	else
		audio += "+" + ins.tuning;
	audio += ".mp3";
	//datei laden
	ins.audio = new Audio(audio);
    ins.audio.preload = "auto";
}

/*TEST
$(document).ready(function() {
	spieleAb("audio/trombone-0.mp3", 1000);
	spieleAb("audio/tuba+40.mp3", 1800);
});
*/
