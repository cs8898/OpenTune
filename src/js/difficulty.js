var SecondTimer = null;

function fill_difficulty_sel(){
	$("#difficulty_sel").text("");
	for (var i = 0; i < schwierigkeiten.length; i++){
		$("#difficulty_sel").append(new Option(schwierigkeiten[i].name,i));
	}
}

function startGameTimer(){
	clearInterval(SecondTimer)
	if (spielStatus.time > 0 && spielStatus.modus == "arcade"){
		$("#timePBar").css("display","block");
		$("#timePBar").progressbar({"min": 0, "max": spielStatus.time});
		$("#timePBar").progressbar({"value":spielStatus.time});
		$("#timePBar_lable").text(spielStatus.time+" Sekunden übrig");
		SecondTimer = setInterval(onTimerStep, 1000);
	} else if( spielStatus.modus == "training" ){
		$("#timePBar").css("display","none");
	}
}

function onTimerEnd(){
	if (spielStatus.status == "spiel")
		Auswertungausfuehren();
	clearInterval(SecondTimer);
}

function onTimerStep(){
	spielStatus.time -= 1;
	$("#timePBar").progressbar({"value":spielStatus.time});
	$("#timePBar_lable").text(spielStatus.time+" Sekunden übrig");
	zeigeHilfen();
	if (spielStatus.time <= 0)
		onTimerEnd();
}

function berechneTime(){
	var s = schwierigkeiten[spielStatus.schwierigkeit];
	spielStatus.time = Math.round(s.time * instrumente.length);
}