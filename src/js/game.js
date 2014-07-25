function startGame(){
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
	spielStatus.status = "spiel";
	generate_konkreteElemente();
	generate_randomTuneing();
	berechneTime();
	draw_instrument_frames();
	berechneHilfe();
	startGameTimer();
}
