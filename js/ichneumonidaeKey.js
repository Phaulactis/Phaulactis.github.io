

function Open2(thing){
	const thingie = document.getElementById(thing);

	if(thingie.style.height === '3.25em'){
		thingie.style.height = 'auto';
		document.getElementById("a"+thing).innerHTML = "expand_more";
	}
	else{
		thingie.style.height = '3.25em';
		document.getElementById("a"+thing).innerHTML = "chevron_right";
	}
  Search("lobus d")
}


