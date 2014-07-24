var instrument_frame_width = 90;
var instrument_frame_height = 80;

function generate_konkreteElemente(){
	var VarInstrumentListe = $("#instrumentVorlagen div");
	var instrcounter = 0;
	
	for ( var i = 0; i < VarInstrumentListe.length; i++){
		type = $(VarInstrumentListe[i]).attr("id").replace("vorlage_",""); 
		name = $(VarInstrumentListe[i]).find("span").text();
		count = parseInt($(VarInstrumentListe[i]).find($("input[type='number']")).val());
		//alert(type+"|"+name+"|"+count);
		
		for (var a = 1; a <= count; i++){
			instrumente.push({
				"id": "instr_"+instrID,
				"type": type,
				"tuning": 0,
				"starttuning": 0,
				"x": getNextInstrumentPosByID("x",instrID),
				"y": getNextInstrumentPosByID("y",instrID)
			});
			instrID++;
		}
	}
}

function getNextInstrumentPosByID(aus,instrID){
	var maxHor = Math.floor($(".SpielFlaeche").width()/instrument_frame_width);
	var HorGap = ($(".SpielFlaeche").width()-(maxHor * instrument_frame_width))/(maxHor+1);
	var maxVer = Math.floor($(".SpielFlaeche").height()/instrument_frame_height);
	var VerGap = ($(".SpielFlaeche").height()-(maxVer * instrument_frame_height))/(maxVer+1);
	
	if (instrID <= maxHor){
		xN = instrID;
		yN = 0;
	} else {
		xN = maxHor%instrID;
		yN = (instrID-yN)/maxHor;
	}
	
	x = HorGap + (HorGap + (instrument_frame_width+HorGap) * ( xN - 1 ) );
	y = VerGap + (VerGap + (instrument_frame_height+HorGap) * (yN - 1 ) );
	if(aus == "x"){
		return x;
	} else if(aus == "y"){
		return y;
	} else {
		return [x,y];
	}
}