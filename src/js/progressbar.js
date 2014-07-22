var pbars = -1;
var bars = [];

function createProgressbar(replaceID){
	pbar = $("#"+replaceID+" td");
	pbars++;
	bars[pbars]=pbar;
}

function setProgress(barID,val){
	var bar = bars[barID];
	var barlength = $(bar).length;
	var elementsToFill = Math.ceil(val/(1/barlength));
	$(bar).slice(0,elementsToFill+1).css("background-color","red");
	$(bar).slice(elementsToFill,barlength+1).css("background-color","white");
}

function setElement(barID,elementVal){
	var bar = bars[barID];
	var barlength = $(bar).length;
	if (elementVal > 0){
		$(bar).slice(0,elementVal).css("background-color","white");
	}
	$(bar).slice(elementVal,elementVal+1).css("background-color","red");
	$(bar).slice(elementVal+1,barlength).css("background-color","white");
}