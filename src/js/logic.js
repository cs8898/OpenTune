//liefert den Gesamtfortschritt im Bereich zwischen 0(worst case) und 1(perfect)
function fortschritt() {
	var derzeitigerStand = 0;
	var worstcase = 80 * instrumente.length;
	for (i = 0; i < instrumente.length; i++) {
		derzeitigerStand += abs(instrumente[i].tuning);
	}
	var ergebnis = 1 - (derzeitigerStand / worstcase);	
	return
}