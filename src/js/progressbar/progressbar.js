var pbars = -1;
var bars = [];

function createProgressbar(replaceID){
	if (!replaceID){
		return false;
	} else {
		pbar = $(replaceID).find("td");
		pbars++;
		bars[pbars]=[pbar,0,0];
		return pbars;
	}
}

function setProgress(barID,val,attri){
	
	var bar = bars[barID][0];
	var barlength = $(bar).length;
	var elementsToFill = Math.ceil(val/(1/barlength));
	/*
	if (!attri){
		$(bar).slice(0,elementsToFill+1).css("background-color",$(bar).);
		$(bar).slice(elementsToFill,barlength+1).css("background-color","white");
	}
	/*/
	if(!attri){
		$(bar).slice(0,elementsToFill).css("background-color","red");
		$(bar).slice(elementsToFill,barlength+1).css("background-color","white");
	}else{
		for(var i = 0; i <= elementsToFill; i++){
			$(bar[i]).css("background-color",$(bar[i]).attr("color1"));
		}
		for(var i = elementsToFill+1;  i < barlength; i++){
			$(bar[i]).css("background-color",$(bar[i]).attr("color0"));
		}
	}
	//*/
	bars[barID]=[bar,1,val];
	return bars[barID];
}

function setElement(barID,elementVal,atr){
	var bar = bars[barID][0];
	var barlength = $(bar).length;
	if (elementVal > 0){
		$(bar).slice(0,elementVal).css("background-color","white");
	}
	$(bar).slice(elementVal,elementVal+1).css("background-color","red");
	$(bar).slice(elementVal+1,barlength+1).css("background-color","white");
	bars[barID]=[bar,2,elementVal];
	return bars[barID];
}