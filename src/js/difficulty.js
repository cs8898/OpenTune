function fill_difficulty_sel(){
	$("#difficulty_sel").text("");
	for (var i = 0; i < schwierigkeiten.length; i++){
		$("#difficulty_sel").append(new Option(schwierigkeiten[i].name,i));
	}
	$("#difficulty_sel").change(select_difficulty_sel);
}

function select_difficulty_sel(){
	spielStatus.schwierigkeit = parseInt($("#difficulty_sel").val());
}