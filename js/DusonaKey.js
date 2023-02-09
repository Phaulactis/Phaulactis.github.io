//order: Color, marginal cell, malar space, claws, vein sr, hind tarsus, oviposítor, antennae



var species = []
const questions = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11", "m12", "m13", "m14", "m15", "m16", "m17", "m18", "m19", "m20", "m21", "m22", "m23", "m24", "m25"
, "m26", "m27","m28" ,"m29" ,"m30","m31","m32","m33","m34", "m35", "m36", "m37", "m38", "m39", "m40", "m41"]
const green = "rgb(0, 160, 135)";

var uncerainty = 1
var unceraintyS = uncerainty/10
var inputType = 0
var uncertType = 0
window.onload= function(){
	
	species = speciesOrg;
	species.pop()
	
	speciesName = speciesNames;
	questions.forEach(element => {
		if(element != "m1"){
			Open(element);
		}
		else{
			Open(element);
			Open(element);
		}
		
		
	});
	for (let i = 0; i < speciesOrg.length; i++) {
		if(speciesOrg[i].length !== 0){
			
			if(document.getElementById("specCont").innerHTML[26] !== "<"){
				document.getElementById("specCont").innerHTML += "<a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a>"
			}
			else{
				document.getElementById("specCont").innerHTML += "<br> <a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a>"
			}
			
		}
		
	}
	document.getElementById("top3").innerHTML = "Remaining taxa: " + species.length
	document.getElementById("top2").innerHTML = "Remaining taxa: " + species.length
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
	window.open(file);
}

//gets inputs from buttons
const buttons = document.querySelectorAll(".btn.btn-key");
let butID = ""
for (const button of buttons) {
  button.addEventListener("click", function(event) {
	butID = event.target.id
	inputType = 1
	Step(event.target.getAttribute("data-value"), event.target.getAttribute("data-index"), "e")
	
  });
}

//gets inputs from number-fields
const inputs = document.querySelectorAll('.inp');

inputs.forEach((input) => {
  input.addEventListener('input', (event) => {
    let m1 = event.target.value;
	let m2= event.target.getAttribute("data-index");
	inputType = 2
	
	Step(m1, m2, "e")
	
  });
});

function Step(value, index, id) {
	
	//needed further down
	var isUnselect = false;
	//key lgic
	buttons.forEach(element => {
		if(element.getAttribute("data-index") === index ){
			
			element.style.backgroundColor = "rgb(243, 243, 243)";
		}
	});
	if(steps[index] === value || value === ""){
		steps[index] = -1;
		isUnselect = true;
		
		document.getElementById("b"+index).style.backgroundColor = "rgb(243, 243, 243)";
		
		if(butID !== ""){
			document.getElementById(butID).style.backgroundColor = "rgb(243, 243, 243)";
		}
	}
	else {
		
		steps[index] = value;
		if(butID !== ""){
			iDb = butID.slice(0, -1) 
			document.getElementById(iDb + "1").style.backgroundColor = green;
			document.getElementById(iDb + "2").style.backgroundColor = green;
		}
		document.getElementById("b"+index).style.backgroundColor = green;
		
		
		
		
	}
	
	species = [];
	speciesName = [];
	
	for (var j = 0; j < speciesOrg.length; ++j) {
		
		if(ArrayComp(steps, speciesOrg[j]))
		{
			
			species.push(speciesOrg[j])
			speciesName.push(speciesNames[j])
		}
	 }
	 
	 document.getElementById("specCont").innerHTML = ""
	 for (let i = 0; i < species.length; i++) {
		if(species[i].length !== 0){
			if(document.getElementById("specCont").innerHTML === ""){
				document.getElementById("specCont").innerHTML += "<a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a>"
			}
			else{
				document.getElementById("specCont").innerHTML += "<br> <a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a>"
			}
			
		}
		
	}
	document.getElementById("top3").innerHTML = "Remaining taxa: " + species.length
	document.getElementById("top2").innerHTML = "Remaining taxa: " + species.length
    //handles sidebar
	for (var i = 0; i < speciesOrg.length; ++i) { 	

			if(i < speciesName.length){
				
				//document.getElementById(i+ "e").hidden = false;
				//document.getElementById(i + "e").innerHTML = speciesName[i];
				//var file = speciesName[i];
				//file = file.replace(" ", "_");
				//file = "/html/" + file + ".html";
				
				 // @ts-ignore   
				//document.getElementById(i + "e").href = file;
			}
			else{
				//document.getElementById(i + "e").hidden = true;
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
					//b = spec[i];
				}
				else{
					if(b !== spec[i]){
						
						//a = false;
						
						
					}
					else{
						//b = spec[i];
						
						
					}
				}
			}
			
			if(a === true){
				if(isUnselect === false){
					
				//document.getElementById(questions[i]).style.display = "none";
				}
				
			}
			else{
				//document.getElementById(questions[i]).style.display = "block";
			}
		}
		
	 }
	
	 console.log(steps)
}

function ArrayComp(as,  bs){
	
	var a = as.slice();
	var b = bs.slice();

	
	for (let i = 0; i < a.length; i++) {
		
		if(typeof b[i] === 'string' && b[i].indexOf("-") > -1){
			// if the value is a range
			a[i] =  parseFloat(a[i])
			let str = b[i];
			let arr = str.split("-");
			let num1 = parseFloat(arr[0]);
			let num2 = parseFloat(arr[1]);
			
			if(a[i] === -1){
				b[i] = -1;	
			}
			else{
				if(document.getElementById(questions[i]).innerHTML.indexOf("0.1") > -1){
					
					if(a[i] - unceraintyS >= num1 && a[i] - unceraintyS  <= num2 || a[i] + unceraintyS  >= num1 && a[i] + unceraintyS  <= num2 || a[i] >= num1 && a[i] <= num2){
						b[i] = a[i]
					}
				}
				else{
					if(a[i] - uncerainty >= num1 && a[i] - uncerainty  <= num2 || a[i] + uncerainty  >= num1 && a[i] + uncerainty  <= num2 || a[i] >= num1 && a[i] <= num2){
						b[i] = a[i]
					}
				}
				
				
			}	
			
		}
		else if(typeof b[i] === 'string' && b[i].indexOf("a") > -1){
			// if there is multiple values
			a[i] =  parseFloat(a[i])
			let str = b[i];
			let arr = str.split("a");
			

			if(a[i] === -1){
				b[i] = -1;	
			}
			
			if(b[i] === "Na"){
				b[i] = a[i]
			}
			else{
				arr.forEach(vals => {
					if(a[i] === parseFloat(vals)){
						b[i] = a[i]
						
					}
					
				});
				
			}	
			
		}
		else{
			// if there is a singe values
			
			a[i] =  parseFloat(a[i])
			b[i] =  parseFloat(b[i])
			
			if(a[i] === -1){
				b[i] = -1;	
			} //this makes it so uncerainty only is aplied when the input is from a input box
			else if(document.getElementById(questions[i]).innerHTML.indexOf("number") > -1){
				
				if(document.getElementById(questions[i]).innerHTML.indexOf("0.1") > -1){
					if(isWithinMargin(a[i], b[i], unceraintyS )){
						
						
						b[i] = a[i]
						
					}
					
					
				}
				else{
					if(isWithinMargin(a[i], b[i], uncerainty )){
						
						
						b[i] = a[i]
						
					}
				}
				
			}
			
		}

	  
	}
	
	
	if(JSON.stringify(a) === JSON.stringify(b)){
		
		return true
	}
    
	
}
function isWithinMargin(a, b, margin) {
	let m = margin + margin/10
	return Math.abs(a - b) <= m;
  }
function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substring(0,index) + chr + str.substring(index+1);
}


function Contains(arr, b){
	for (var i = 0; i < arr.length; ++i) {
		if(arr[i] === b){
			return true;
		}
	 }
}