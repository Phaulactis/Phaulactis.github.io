const searc = document.getElementById("search")
const searcRes = document.getElementById("searchRes")
let a = [];
searcRes.style.display = "none"
let k = ""
let ind = 0
let leng = 0
let selecting = false
let link = ""
let change = 0;
const backgroundImages = ["/img/Dusona\ alpinaB.png", "/img/Dusona\ falcator.png"]
doe = false;

window.onload= function(){
 randomImage()
}
let last = 0;
setInterval(function() {
 // randomImage()
}, 20000);

function randomImage(){
  let randomInt = 0
  randomInt = Math.floor(Math.random() * (backgroundImages.length - 1 - 0 + 1));
  last = randomInt
  
  document.getElementById("backgr").style.backgroundImage = "url('/img/Dusona\ falcator.png')"

  document.getElementById("backgr").style.backgroundImage = "url(" + "'" +  backgroundImages[randomInt]+ "'" + ")"
}


searc.addEventListener('keyup', e=> {
  
    
    k = e.key
   
    if(k !== "ArrowUp" && k !== "ArrowDown"){
      if(k !== "ArrowRight" && k !== "ArrowLeft" && k !=="Enter"){
        change = 1;
      }
    }
    else{
      if(k === "ArrowUp"){
        ind -= 1
        if(ind < 0){
          ind = 0
        }
        selecting = true;
      }
      else if(k === "ArrowDown"){
        if(selecting && ind < leng - 1){
          ind += 1
        }
       selecting = true;
        
      }
      searcRes.innerHTML = replaceClass(searcRes.innerHTML, ind, "searhReM");
      

    }
    if(k === "Enter"){
      if(searcRes.innerHTML !== ""){
        window.location.href = link;
      }
     
    }
   
   }
   ,1000);
   
function theThing(){
  
 num = 0;
  if(searc.value.length > 0){
    
    let a = [];
    let c = []
      search = searc.value.toLowerCase()
      searchble.forEach(element => {
        AddTo()
      fetch(element)
      .then(response => response.text())
      .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let title = doc.getElementsByTagName("title")[0].textContent;
       
        if (title.toLocaleLowerCase().includes(search)) {
          
          if(title.length === search.length){
            a.unshift( "<div class='searhRes' style='margin-bottom: 1px;'>" + "<a id='not' class='sercLink' style='color:#0c0c0c; padding-left: 0.8em; ;' href=" + element + ">" + title + "</a>" + "</div>")
            num += 1;
           
            
          }
          else{
            a.push("<div class='searhRes' style='margin-bottom: 1px;'>" + "<a id='not' class='sercLink' style='color:#0c0c0c; padding-left: 0.8em; margin-bottom: -10em ;' href=" + element + ">" + title + "</a>" + "</div>")
            num += 1;
            
           
          }
          AddTo()
        }
       
      })
     .catch(function() {
        console.log("error");
      });
    c.sort()
   
  });
  

  //viusalizes the results

  function AddTo()
  {
    doe = false;
    searcRes.innerHTML = ""
    a = a.sort((a, b) => a.length - b.length)
    if(a.length > 0){
      for (let i = 0; i < 7 && i < a.length; i++) {
        if(i === 0){
          link = a[i].match(/html\/[^ ]*\.html/);
          
        }
     
        searcRes.style.display = "block"
        if(i < a.length - 1 && i < 6){
          searcRes.innerHTML += a[i] + "<br>"
        }
        else{
          searcRes.innerHTML += a[i]
        }
      }  
    }
    else{
      searcRes.style.display = "none"
    }
    ind = 0;
    selecting = false;
    
  }

  }
  else{
    searcRes.innerHTML = ""
    searcRes.style.display = "none"
  }

}

//searches every 100
setInterval(function() {
  if( change > 0){
    theThing()
    change = 0
  }
  
}, 100);

document.addEventListener("click", e=> {
  checkPageFocus(searcRes.innerHTML)

})

function checkPageFocus() {
  const serc = document.getElementById("search");
  const sercR = document.getElementById("searchRes");

  if(document.activeElement === serc){
    theThing()
  }
  else{
    sercR.style.display = "none"
  }
 
}

function replaceClass(divString, index, newClass){

  
  let str = divString
  str = str.replace(/searhReM/g, "searhRes");
 

  let separator = "<br>";
  let splitArr = str.split(separator);

  let newArr = splitArr.map((substring, index) => {
    if (index === 0) {
      return substring;
    } else {
      return separator + substring;
    }
  });
  

  newArr[index] = newArr[index].replace("searhRes", newClass)
  link = newArr[index].match(/html\/[^ ]*\.html/);
 

  if( newArr[newArr.length - 1] === "<br>"){
     newArr.pop()
     
  }
  leng = newArr.length
  finalArr = newArr.join()
  finalArr = finalArr.replace(/,/g, "");
  return(finalArr)
  
}
function insertLineBreak(divString) {
  let divs = divString.match(/<div[^>]*>([\s\S]*?)<\/div>/g);
  let updatedDivString = divs.join('<br>');
  return updatedDivString;
}

