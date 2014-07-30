var instrument_frame_width = 104;
var instrument_frame_height = 84;

function generate_konkreteElemente(){
	var VarInstrumentListe = $("#instrumentVorlagen div");
	var instrID = 0;
	instrumente = [];
	
	for ( var i = 0; i < VarInstrumentListe.length; i++){
		type = $(VarInstrumentListe[i]).attr("id").replace("vorlage_",""); 
		name = $(VarInstrumentListe[i]).find("span").text();
		count = parseInt($(VarInstrumentListe[i]).find($("input[type='number']")).val());
		//alert(type+"|"+name+"|"+count);
		
		for (var a = 1; a <= count; a++){
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
	

	xN = instrID%maxHor;
	yN = Math.floor(instrID/maxHor);
	
	x = HorGap + (instrument_frame_width+HorGap) * xN;
	y = VerGap + (instrument_frame_height+VerGap) * yN;
	if(aus == "x"){
		return Math.round(x);
	} else if(aus == "y"){
		return Math.round(y);
	} else {
		return [x,y];
	}
}

function draw_instrument_frames(){
	var s = schwierigkeiten[spielStatus.schwierigkeit];
	var min = s.startTuningRange*(-1);
	var max = s.startTuningRange;
	var step = s.step;
	$(".SpielFlaeche").text("");
	for (var i = 0; i < instrumente.length; i++){
		$(".SpielFlaeche").append('<div style="left: ' + instrumente[i].x + 'px; top: ' + (parseInt($(".SpielFlaeche").offset().top) + parseInt(instrumente[i].y)) + 'px;" class="instrument_frame" id="'+instrumente[i].id+'"><input id="'+instrumente[i].id+'_button" type="image" src="./img/'+instrumente[i].type+'.png" class="instrument_button" onClick="spieleInstrumentAb(\''+instrumente[i].id+'\')"><input id="'+instrumente[i].id+'_slider" class="instrument_slider" min="'+min+'" max="'+max+'" step="'+step+'" type="range" orient="vertical" onchange="onSlide(this)"></div>');
	}
}

/*
	<div class="instrument_frame" id="in_1_frame">
		<input type="image" src="./img/ebass.png" id="in_1_button" class="instrument_button" >
		<input id="in_1_slider" class="instrument_slider" type="range" min="-10" max="10" step="5" orient="vertical">
	</div>
*/