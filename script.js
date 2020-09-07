//Jordan Bel
//opdracht pizza calculator
//Software Developer niveau 4
var smallCounter = document.getElementById('counterSmall');
var mediumCounter = document.getElementById('counterMedium');
var largeCounter = document.getElementById('counterLarge');

var sValue = 0;
var mValue = 0;
var lValue = 0;

var prijsSmall = 6.95;
var prijsMedium = 9.50;
var prijsLarge = 12.50;

function voegPizza(soort){
	if(soort == "large"){
		lValue++;
		largeCounter.innerHTML = lValue
		var result = sValue * prijsSmall + mValue * prijsMedium + lValue * prijsLarge;
		document.getElementById('TotaalResult').innerHTML = "&euro; " + result;
	}else if(soort == "medium"){
		mValue++;
		mediumCounter.innerHTML = mValue;
		var result = sValue * prijsSmall + mValue * prijsMedium + lValue * prijsLarge;
		document.getElementById('TotaalResult').innerHTML = "&euro; " + result;
	}else{
		sValue++;
		smallCounter.innerHTML = sValue;
		var result = sValue * prijsSmall + mValue * prijsMedium + lValue * prijsLarge;
		document.getElementById('TotaalResult').innerHTML = "&euro; " + result;
	}
}