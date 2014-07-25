function startGame(){
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
	spielStatus.status = "spiel";
	generate_konkreteElemente();
	generate_randomTuneing();
	draw_instrument_frames();
	berechneTime();
	startGameTimer();
}