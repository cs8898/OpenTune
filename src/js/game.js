function startGame(){
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
	generate_konkreteElemente();
	draw_instrument_frames();
}