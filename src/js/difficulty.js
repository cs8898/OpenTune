function fill_difficulty_sel(){
	$("#difficulty_sel").text("");
	for (var i = 0; i < schwierigkeiten.length; i++){
		$("#difficulty_sel").append(new Option(schwierigkeiten[i].name,i));
	}
}