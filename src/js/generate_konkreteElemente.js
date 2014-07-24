var VarInstrumentListe = $("#instrumentVorlagen div");

for ( var i = 0; i < VarInstrumentListe.length; i++){
	name = $(VarInstrumentListe[i]).find("span").text();
	count = parseInt($(VarInstrumentListe[i]).find($("input[type='number']")).val());
	alert(name+"|"+count);
}