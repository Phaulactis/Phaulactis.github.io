const searc = document.getElementById("search")
const searcRes = document.getElementById("searchRes")
let a = [];
searcRes.style.display = "none"
let k = ""
let ind = 0
let leng = 0
let selecting = false
let link = ""

const searchble = [
  "/html/Braconidae.html",
  "/html/Homolobus.html",
  "/html/HomolobusKey.html",
  "/html/Homolobus_annulicornis.html",
  "/html/Homolobus_bohemani.html",
  "/html/Homolobus_discolor.html",
  "/html/Homolobus_flagitator.html",
  "/html/Homolobus_infumator.html",
  "/html/Homolobus_truncator.html",
  "/html/Homolobinae.html"
  
]

searc.addEventListener('keyup', e=> {
  
  
    k = e.key
   
    if(k !== "ArrowUp" && k !== "ArrowDown"){
      if(k !== "ArrowRight" && k !== "ArrowLeft" && k !=="Enter"){
        theThing()
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
    
  let number = 0;
  if(searc.value.length > 0){
    
    let a = [];
      search = searc.value.toLowerCase()
      searchble.forEach(element => {
      fetch(element)
      .then(response => response.text())
      .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let title = doc.getElementsByTagName("title")[0].textContent;
        if (title.toLocaleLowerCase().includes(search)) {
          
          if(title.length === search.length){
            a.unshift( "<div class='searhRes' style='margin-bottom: 1px;'>" + "<a id='not' class='sercLink' style='color:#0c0c0c; padding-left: 0.8em; ;' href=" + element + ">" + title + "</a>" + "</div>")
          }
          else{
            a.push("<div class='searhRes' style='margin-bottom: 1px;'>" + "<a id='not' class='sercLink' style='color:#0c0c0c; padding-left: 0.8em; margin-bottom: -10em ;' href=" + element + ">" + title + "</a>" + "</div>")
          }
          
        }
      })
     .catch(function() {
        console.log("error");
      });
    
  });
  
  setTimeout(()=> {
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
 ,100);
  }
  else{
    searcRes.innerHTML = ""
    searcRes.style.display = "none"
  }

}
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

