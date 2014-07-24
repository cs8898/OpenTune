//Mögliche Instrumente
var instrumentVorlagen = [
	{
		"type": "clarinet",
		"name": "Klarinette",
		"anzahl": 2,
		"maxAnzahl": 2,
		"defaultX": 50,
		"defaultY": 150
	},
	{
		"type": "bariton",
		"name": "Bariton",
		"anzahl": 1,
		"maxAnzahl": 1,
		"defaultX": 50,
		"defaultY": 100
	},
]; 


//Vordefinierte Besetzungen
var besetzungen = [
	{ //Bigband
		"instrumente":
		[
			{"type": "bariton","anzahl": 2}, 
			{"type": "trompete","anzahl": 2},
			{"type": "bass","anzahl": 2},
			{"type": "posaune","anzahl": 2}, 
			{"type": "Saxophon","anzahl": 2}, 
			{"type": "piano","anzahl": 2}, 
			{"type": "flöte","anzahl": 2}, 
			{"type": "trombone","anzahl": 2},
			{"type": "tuba","anzahl": 2},
			{"type": "jagthorn","anzahl": 2},
			{"type": "gitarre","anzahl": 2}
		]
	},
	{ //Orchester
		"instrumente":
		[
			{"type": "bariton","anzahl": 2}, 
			{"type": "trompete","anzahl": 2},
			{"type": "posaune","anzahl": 2}, 
			{"type": "Saxophon","anzahl": 2}, 
			{"type": "flöte","anzahl": 2}, 
			{"type": "tromboe","anzahl": 2},
			{"type": "tuba","anzahl": 2},
			{"type": "jagthorn","anzahl": 2}
		]
	}
];

var schwierigkeiten = [
	{ //einfach
		"step": 40,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 15, //pro Instrument
		"anzahlHilfen": 0.33 //pro Instrument
	},
	{ //mittel
		"step": 20,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 20,
		"anzahlHilfen": 0.33
	},
	{ //schwer
		"step": 10,
		"minStartTuning": -40,
		"maxStartTuning": +40,
		"time": 15,
		"anzahlHilfen": 0.33
	}
];

//Konkreten Instrumente
var instrumente = [
	{
		"id": "bariton_1",
		"type": "bariton",
		"tuning": -50,
		"starttuning": -50,
		"x": 50,
		"y": 100
	},
];

//var img = "img/" + instrument.type + ".png";
/* var audio = "audio/" + instrument.type;
if (instrument.tuning < 0)
	audio += instrument.tuning;
else if (instrument.tuning == 0)
	audio += "-0";
else
	audio += "+" + instrument.tuning;
audio += ".mp3";
*/

//Aktueller Spielstatus
var spielStatus = 
{
	"status": "auswahl", //auswahl | spiel | auswertung
	"modus": "arcade", // arcade | training
	"time": 20, //im Trainingsmodus: -1
	"hilfen": 2, //verbleibende Hilfen
};






