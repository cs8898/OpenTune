function startGame(){
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
	generate_konkreteElemente();
	generate_randomTuneing();
	draw_instrument_frames();
	berechneHilfe();
}
