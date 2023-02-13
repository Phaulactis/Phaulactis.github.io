//order: Color, marginal cell, malar space, claws, vein sr, hind tarsus, oviposítor, antennae



var species = []
const questions = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11", "m12", "m13", "m14", "m15", "m16", "m17", "m18", "m19", "m20", "m21", "m22", "m23", "m24", "m25"
, "m26", "m27","m28" ,"m29" ,"m30","m31","m32","m33","m34", "m35", "m36", "m37", "m38", "m39", "m40", "m41"]
const green = "rgb(0, 160, 135)";
const grey = "rgb(179, 179, 179)";
var uncerainty = 1
var unceraintyS = uncerainty/10
var inputType = 0
var uncertType = 0

const scrollableDiv = document.getElementById("leftbar");
const scrollableDiv2 = document.getElementById("sidebar");
const body = document.body;

window.onload= function(){
	scrollableDiv.style.overflowY = "scroll";
	scrollableDiv.style.paddingRight = "0em"
	scrollableDiv2.style.overflowY = "scroll";
	scrollableDiv2.style.paddingRight = "0em"
	document.body.style.overflow = "hidden";
	scrollableDiv.style.overflowY = "scroll";
	scrollableDiv2.style.overflowY = "scroll";
  document.body.style.overflowY = "scroll";
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";
	species = speciesOrg;
	species.pop()
	
	speciesName = speciesNames;
	questions.forEach(element => {
		if(element != "m1"){
			Open(element);
		}
		else{
			Open(element);
			//Open(element);
		}
		
		
	});
	for (let i = 0; i < speciesOrg.length; i++) {
		if(speciesOrg[i].length !== 0){
			
			if(document.getElementById("specCont").innerHTML[26] !== "<"){
				document.getElementById("specCont").innerHTML += "<div class='specDiv' ><a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a></div>"
			}
			else{
				document.getElementById("specCont").innerHTML += "<br><div class='specDiv' ><a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a></div>"
			}
			
		}
		
	}
	document.getElementById("top3").innerHTML = "Remaining taxa: " + species.length
	document.getElementById("top2").innerHTML = "Remaining taxa: " + species.length
	
	
	if(species.length > 0){
		
		const results = Cull(species).sort((a, b) => a - b)
		
		for (let i = 0; i < questions.length; i++) {
			if(steps[i] === -1){
				
				if(steps[i] === -1){
					
					document.getElementById(questions[i]).getElementsByClassName("btn btn-head")[0].style.backgroundColor = "rgb(243, 243, 243)";
					
				}
				
			}
			
		}
		for (let i = 0; i < questions.length && i < results.length; i++) {
			
			if(questions[results[i]] !== undefined){
				if(steps[i] === -1){
					document.getElementById(questions[results[i]]).getElementsByClassName("btn btn-head")[0].style.backgroundColor = grey
					
				}
				
			}
		}
		
	}
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


const infos = document.querySelectorAll(".material-symbols-outlined-info");

for (const infon of infos) {
	infon.addEventListener("click", function(event) {
		info = document.getElementById("infoBig")
		if(window.getComputedStyle(info).getPropertyValue("display") === "none"){
			
			info.style.display = 'flex'
			
			document.getElementById("BigImgText").innerHTML = event.target.getAttribute("data-value")
			document.getElementById('Overlay').style.display = 'block'
		}
		else{
			info.style.display = 'none'
			
		}
	  });
  }


document.getElementById("Overlay").addEventListener("click", function() {
	info = document.getElementById("infoBig")
	info.style.display = 'none'
	document.getElementById('Overlay').style.display = 'none'
  });

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
	butID = ""
	steps[m2] = -1
	Step(m1, m2, "e")
	
  });
});

function Step(value, index, id) {
	
	//needed further down
	var isUnselect = false;
	
	
	//this handles what questions should be marked as green
	if(value.length === 0){
		steps[index] = -1;
		document.getElementById("b"+index).style.backgroundColor = "rgb(243, 243, 243)";
		inputType = 0
		isUnselect = true;
		
	}
	else{
		if(steps[index] === value ){
		
			steps[index] = -1;
			
			isUnselect = true;
			
			document.getElementById("b"+index).style.backgroundColor = "rgb(243, 243, 243)";
			
			if(butID !== "" && inputType === 1){
				iDb = butID.slice(0, -1) 
				document.getElementById(iDb + "1").style.backgroundColor = "rgb(243, 243, 243)";
				document.getElementById(iDb + "2").style.backgroundColor = "rgb(243, 243, 243)";
			}
		}
		else if(typeof steps[index] === 'string' && steps[index].indexOf(value) > -1){
			steps[index] = steps[index].replace('a' + value, '')
			steps[index] = steps[index].replace(value + 'a', '')
			if(butID !== "" && inputType === 1){
				iDb = butID.slice(0, -1) 
				document.getElementById(iDb + "1").style.backgroundColor = "rgb(243, 243, 243)";
				document.getElementById(iDb + "2").style.backgroundColor = "rgb(243, 243, 243)";
			}
			
			
		}else
		{
			if(steps[index] === -1){
				steps[index] = value;
				if(butID !== ""){
					iDb = butID.slice(0, -1) 
					document.getElementById(iDb + "1").style.backgroundColor = green;
					document.getElementById(iDb + "2").style.backgroundColor = green;
				}
				document.getElementById("b"+index).style.backgroundColor = green;
			}
			else if(steps[index].indexOf(value) < 0){
				if(document.getElementById(questions[index]).innerHTML.indexOf("number") > -1){
					steps[index] = value
				}
				else{
					steps[index] = steps[index] + 'a' + value
				steps[index] = sortStringNumbers(steps[index])
				}
				
	
				document.getElementById("b"+index).style.backgroundColor = green;
				if(butID !== ""){
					iDb = butID.slice(0, -1) 
					document.getElementById(iDb + "1").style.backgroundColor = green;
					document.getElementById(iDb + "2").style.backgroundColor = green;
				}
				iDb = butID.slice(0, -1) 
			}
		
			
			
			
			
		}
	}
	//document.getElementById("dip").innerHTML = steps
	

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
			
			document.getElementById("specCont").innerHTML += "<div class='specDiv' ><a class = 'btn btn-spec' href='/html/homolobus_truncator.html' style='color:#0c0c0c' id =" + i + 'e '  + "type ='button'>"+ speciesName[i] +"</a></div>"
		}
		
	}
	//shows temaining taxa
	document.getElementById("top3").innerHTML = "Remaining taxa: " + species.length
	document.getElementById("top2").innerHTML = "Remaining taxa: " + species.length
    
	//removes all questions that wont do anything
	
	if(species.length > 0){
		
		const results = Cull(species).sort((a, b) => a - b)
		
		for (let i = 0; i < questions.length; i++) {
			
			if(steps[i] === -1){
					
				document.getElementById(questions[i]).getElementsByClassName("btn btn-head")[0].style.backgroundColor = "rgb(243, 243, 243)";
				
			}
		}
		for (let i = 0; i < questions.length; i++) {
			
			if(questions[results[i]] !== undefined){
				if(steps[results[i]] === -1){
					document.getElementById(questions[results[i]]).getElementsByClassName("btn btn-head")[0].style.backgroundColor = grey
					
				}
			
			}
		}
		
	}
	else{
		for (let i = 0; i < questions.length; i++) {
			
			document.getElementById(questions[i]).getElementsByClassName("btn btn-head")[0].style.backgroundColor = grey
		}
	}
	//removes all questions that don't have values for everything
	
	 
}

function ArrayComp(as,  bs){
	
	var a = as.slice();
	var b = bs.slice();

	
	for (let i = 0; i < a.length; i++) {
		//if b[i] is not set then all other logic is ignored
		if(b[i] === "Na"){
			b[i] = a[i]
		}
		//this handles if the input is multiple values (1a2a5)
		if(typeof a[i] === 'string' && a[i].indexOf('a') > -1)
		{
			if(a[i].indexOf('a') > -1 && typeof b[i] === 'string' && b[i].indexOf("a") > -1){
				
				if(checkStringNumbers(a[i], b[i])){
					b[i] = a[i]
					
				}
				
				
			}
			else if (a[i].indexOf('a') > -1){
				if( a[i].indexOf(String(b[i])) > -1){
					
					b[i] = a[i]
					
				}
			}

		} //if the input is a singe value
		else{
			
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
				
				let str = b[i];
				let arr = str.split("a");
				
				
				if(a[i] === -1){
					b[i] = -1;	
				}
				else if(b[i] === "Na"){
				
					b[i] = a[i]
					
				}
				else{
					
					arr.forEach(vals => {
						
					
						if(a[i] === vals){
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
function sortStringNumbers(str) {
	// Split the string into an array of strings using 'a' as the separator
	var numbers = str.split('a');
  
	// Convert the array of strings into an array of numbers
	numbers = numbers.map(Number);
  
	// Sort the array of numbers in ascending order
	numbers.sort(function(a, b) {
	  return a - b;
	});
  
	// Join the array of numbers back into a string using 'a' as the separator
	return numbers.join('a');
  }
  function checkStringNumbers(a, b) {
	// Split both strings into arrays of numbers
	var numbersA = a.split('a').map(Number);
	var numbersB = b.split('a').map(Number);
  
	// Loop through each number in numbersB
	for (var i = 0; i < numbersB.length; i++) {
	  // Check if the current number in numbersB is contained in numbersA
	  if (numbersA.indexOf(numbersB[i]) !== -1) {
		return true;
	  }
	}
  
	// Return false if no common numbers were found
	return false;
  }
  function getMatchingIndexes(arrays) {
  const firstArray = arrays[0];
  const result = [];

  for (let i = 0; i < firstArray.length; i++) {
	
    let matching = true;
    const currentValue = firstArray[i];
	
    for (let j = 1; j < arrays.length; j++) {
      const currentArray = arrays[j];
      if (currentArray[i] !== currentValue) {
        matching = false;
        break;
      }
    }

    if (matching) {
      result.push(i);
    }
  }

  return result;
}
function getNaIndexes(substrings) {

	let result = new Set();
  for (let i = 0; i < substrings.length; i++) {
    let index = substrings[i].indexOf("Na");
	while (index !== -1) {
		result.add(index);
		  index = substrings[i].indexOf("Na", index + 1);
	  
	}
  
  }
 
  return Array.from(result).sort((a, b) => a - b);
	
	
}
function removeNumbersGreaterThan(array, value) {
	return array.filter(function(element) {
	  return element <= value;
	});
  }
function Cull(array){
	let a = getNaIndexes(array)
	let b = getMatchingIndexes(array)
	a = removeNumbersGreaterThan(a, questions.length)
	b = removeNumbersGreaterThan(b, questions.length)
	
	return a.concat(b.filter(function(item) {
		return !a.includes(item);
	  }));
}



scrollableDiv.addEventListener("mouseenter", function(event) {
  scrollableDiv.style.overflowY = "scroll";
  scrollableDiv.style.paddingRight = "0em"
  scrollableDiv2.style.overflowY = "scroll";
  scrollableDiv2.style.paddingRight = "0em"
  document.body.style.overflow = "hidden";
 // body.style.width = `${body.offsetWidth}px`;

});

scrollableDiv.addEventListener("mouseleave", function(event) {
	scrollableDiv.style.overflowY = "scroll";
	scrollableDiv2.style.overflowY = "scroll";
  document.body.style.overflowY = "scroll";
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";
//  body.style.width = "100%";

});
scrollableDiv2.addEventListener("mouseenter", function(event) {
	scrollableDiv.style.overflowY = "scroll";
	scrollableDiv.style.paddingRight = "0em"
	scrollableDiv2.style.overflowY = "scroll";
	scrollableDiv2.style.paddingRight = "0em"
	document.body.style.overflow = "hidden";
   // body.style.width = `${body.offsetWidth}px`;
  
  });
  
  scrollableDiv2.addEventListener("mouseleave", function(event) {
	  scrollableDiv.style.overflowY = "scroll";
	  scrollableDiv2.style.overflowY = "scroll";
	document.body.style.overflowY = "scroll";
	document.body.style.overflow = "auto";
	document.body.style.overflowX = "hidden";
  //  body.style.width = "100%";
  
  });


