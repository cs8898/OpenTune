function startGame(){
	//Config
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
	spielStatus.modus = $("#modus_sel").val();
	spielStatus.status = "spiel";
	
	//Start
	generate_konkreteElemente();
	generate_randomTuneing();
	berechneTime();
	draw_instrument_frames();
	berechneHilfe();
	zeigeHilfen();
	startGameTimer();
	$("#middle_bottom_div").css("display","inline-block");
}