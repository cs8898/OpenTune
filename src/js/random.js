function generate_randomTuneing(){
	var rnd = 0;
	for (var i = 0; i < instrumente.length; i++){
		rnd = ((Math.random()/1)*schwierigkeiten[spielStatus.schwierigkeit].range*2)-schwierigkeiten[spielStatus.schwierigkeit].range;
		instrumente[i].starttuning = rnd;
	}
}