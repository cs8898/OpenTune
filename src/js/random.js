function generate_randomTuneing(){
	var s = schwierigkeiten[spielStatus.schwierigkeit];
	var anzahlSteps = (s.startTuningRange * 2) / s.step + 1;
	for (var i = 0; i < instrumente.length; i++){
		var rnd_step = Math.floor(Math.random()*anzahlSteps)-Math.floor(anzahlSteps/2);
		instrumente[i].starttuning = rnd_step*s.step; //random tuneing
	}
}