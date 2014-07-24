var instrumente[];
instrumente["i1"] = {
	"type": "bariton",
	"tuning": -50,
	"starttuning": -50,
	"x": 50,
	"y": 100
};

var instrumentVorlage = {
	"type": "bariton",
	"name": "Bariton",
	"anzahl": 3,
	"maxAnzahl": 3,
	"defaultX": 50,
	"defaultY": 100
};



var spielStatus = 
{
	"time": 20,
	"hilfen": 2,
	"modus": "arcade", // arcade | training
	"status": "auswahl", //auswahl | spiel | auswertung
};

var art = [
	{ //Bigband
		var InstrumentList[
		{"type": "bariton","anzahl": 2}, 
		{"type": "trompete","anzahl": 2},
		{"type": "bass","anzahl": 2},
		{"type": "posaune","anzahl": 2}, 
		{"type": "Saxophon","anzahl": 2}, 
		{"type": "piano","anzahl": 2}, 
		{"type": "flöte","anzahl": 2}, 
		{"type": "tromboe","anzahl": 2},
		{"type": "tuba","anzahl": 2},
		{"type": "jagthorn","anzahl": 2},
		{"type": "gitarre","anzahl": 2}
		];
	},
	{ //Orchester
		var InstrumentList[
		{"type": "bariton","anzahl": 2}, 
		{"type": "trompete","anzahl": 2},
		{"type": "posaune","anzahl": 2}, 
		{"type": "Saxophon","anzahl": 2}, 
		{"type": "flöte","anzahl": 2}, 
		{"type": "tromboe","anzahl": 2},
		{"type": "tuba","anzahl": 2},
		{"type": "jagthorn","anzahl": 2}
		];
	}	
];

var schwierigkeiten = [
	{ //einfach
		"step": 40,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 15,
		"anzahlHilfen": 0.33
	},
	{ //mittel
		"step": 20,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 15,
		"anzahlHilfen": 0.33
	},
	{ //schwer
		"step": 10,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 15,
		"anzahlHilfen": 0.25
	}
];

var img = "img/" + instrument.type + ".png"; 
var audio = "audio/" + instrument.type + instrument.tuning + ".mp3";

