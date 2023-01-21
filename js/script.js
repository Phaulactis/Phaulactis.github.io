//order: Color, marginal cell, malar space, claws, vein sr, hind tarsus, oviposítor, antennae

const Homolobus_infumator =    [1,2,2,1,1,2,2,2,1]

const Homolobus_annulicornis = [1,2,2,2,1,2,1,1,2]

const Homolobus_discolor =     [2,1,2,2,1,2,0,2,1]

const Homolobus_bohemani =     [1,0,1,2,1,0,0,2,0]

const Homolobus_flagitator =   [1,1,2,2,1,2,2,2,2]

const Homolobus_truncator =    [1,2,2,2,2,1,2,2,2]


const speciesOrg = [Homolobus_infumator,Homolobus_annulicornis, Homolobus_discolor, Homolobus_bohemani, Homolobus_flagitator, Homolobus_truncator]
var species = []
const speciesNameOrg = ["Homolobus infumator","Homolobus annulicornis", "Homolobus discolor", "Homolobus bohemani", "Homolobus flagitator", "Homolobus truncator"]
var speciesName = []
var steps = [0,0,0,0,0,0,0,0,0];
const questions = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"]
const green = "rgb(0, 160, 135)";



window.onload= function(){
	
	species = speciesOrg;
	speciesName = speciesNameOrg;
	questions.forEach(element => {
		if(element != "m1"){
			Open(element);
		}
		else{
			Open(element);
			Open(element);
		}
		
		
	});
	
}
function Reset(){

	location.reload();

}
function Open(thing){
	const thingie = document.getElementById(thing);
	
	if(thingie.style.height === '3.25em'){
		thingie.style.height = 'auto';
		document.getElementById("a"+thing).innerHTML = "expand_more";
	}
	else{
		thingie.style.height = '3.25em';
		document.getElementById("a"+thing).innerHTML = "chevron_right";
	}

}

function Species(id){

	var file = document.getElementById(id).innerHTML;
	file = file.replace(" ", "_");
	file = "/html/" + file + ".html";
	//window.location.href = file;
	Window.open(file);
}


function Step(value, index, id) {
	
	//needed further down
	var isUnselect = false;
	//key logic

	if(steps[index] === value){
		steps[index] = 0;
		isUnselect = true;
		
		document.getElementById("b"+index).style.backgroundColor = "rgb(243, 243, 243)";
		if(value === 1){
			document.getElementById("1" + index + "1").style.backgroundColor = "rgb(243, 243, 243)";
			document.getElementById("1" + index + "2").style.backgroundColor = "rgb(243, 243, 243)";
			
		}
		else{
			document.getElementById("2" + index + "1").style.backgroundColor = "rgb(243, 243, 243)";
			document.getElementById("2" + index + "2").style.backgroundColor = "rgb(243, 243, 243)";
		}

	}
	else{
		steps[index] = value;
		
		document.getElementById("b"+index).style.backgroundColor = green;
		if(value === 1){
			document.getElementById("2" + index + "1").style.backgroundColor = "rgb(243, 243, 243)";
			document.getElementById("2" + index + "2").style.backgroundColor = "rgb(243, 243, 243)";
			document.getElementById("1" + index+  "1").style.backgroundColor = green;
			document.getElementById("1" + index + "2").style.backgroundColor = green;
		}
		else{
			document.getElementById("2" + index+  "1").style.backgroundColor = green;
			document.getElementById("2" + index + "2").style.backgroundColor = green;
			document.getElementById("1" + index+  "1").style.backgroundColor = "rgb(243, 243, 243)";
			document.getElementById("1" + index + "2").style.backgroundColor = "rgb(243, 243, 243)";
		}
		
		
	}
	
	species = [];
	speciesName = [];
	for (var j = 0; j < speciesOrg.length; ++j) {
			
		if(ArrayComp(steps, speciesOrg[j])){

			species.push(speciesOrg[j]);
			speciesName.push(speciesNameOrg[j]);
			
		}
		
	 }
    //handles sidebar
	for (var i = 0; i < speciesOrg.length; ++i) { 	

			if(i < speciesName.length){
				
				document.getElementById(i+ "e").hidden = false;
				document.getElementById(i + "e").innerHTML = speciesName[i];
			}
			else{
				document.getElementById(i + "e").hidden = true;
			}


		}
	

	 //hides all questions that won't do anything
	 for (var i = 0; i < questions.length; ++i) {
		var a = true;
		var b = 0;
		if(steps[i] === 0){

			for (var j = 0; j < species.length; ++j) {

				var spec = species[j];
				if(b === 0 ){
					b = spec[i];
				}
				else{
					if(b !== spec[i]){
						
						a = false;
						
						
					}
					else{
						b = spec[i];
						
						
					}
				}
			}
			
			if(a === true){
				if(isUnselect === false){
					
				document.getElementById(questions[i]).style.display = "none";
				}
				
			}
			else{
				document.getElementById(questions[i]).style.display = "block";
			}
		}
		
	 }
	
}

function ArrayComp(a,  b){
	//manages 0 ignoration
	var as = JSON.stringify(a);
	var bs = JSON.stringify(b);
	for (var i = 0; i < as.length; ++i) {
		if(as[i] === '0'){
			
			bs = setCharAt(bs,i, '0');
			
			
		}
	 }
	 for (var i = 0; i < as.length; ++i) {
		if(bs[i] === '0'){
			
			bs = setCharAt(bs,i, as[i]);
			
			
		}
	 }
    return as==bs;


	function setCharAt(str,index,chr) {
		if(index > str.length-1) return str;
		return str.substring(0,index) + chr + str.substring(index+1);
	}
}

function Contains(arr, b){
	for (var i = 0; i < arr.length; ++i) {
		if(arr[i] === b){
			return true;
		}
	 }
}
