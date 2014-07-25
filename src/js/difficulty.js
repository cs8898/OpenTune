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
		$("#timePBar").progressbar({"min": 0, "max": spielStatus.time});
		SecondTimer = setInterval(onTimerStep, 1000);
	}
}

function onTimerEnd(){
	Auswertungausfuehren();
	clearInterval(SecondTimer);
}

function onTimerStep(){
	spielStatus.time -= 1;
	$("#timePBar").progressbar({"value":spielStatus.time});
	if (spielStatus.time <= 0)
		onTimerEnd();
}

function berechneTime(){
	var s = schwierigkeiten[spielStatus.schwierigkeit];
	spielStatus.time = Math.round(s.time * instrumente.length);
}