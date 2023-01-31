

const hamburger = document.getElementById('MenuIcon')
const sidebar = document.getElementById('Menu')
const overlay = document.getElementById('Overlay')
const twitter = document.getElementById('Twitter')
const youtube = document.getElementById('Youtube')

let menuOpen = false





function openMenu() {
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.width = '250px'
  }
  
  function closeMenu() {
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.width = '0px'
  }
 
  hamburger.addEventListener('click', function () {
    if (!menuOpen) {
      openMenu()
    }
  })
  
  overlay.addEventListener('click', function () {
    if (menuOpen) {
      closeMenu()
    }
  })

  twitter.addEventListener('click', function () {
    if (menuOpen) {
      open("https://twitter.com/Phaulactis");
    }
  })

  youtube.addEventListener('click', function () {
    open("https://www.youtube.com/channel/UCd9giNbLc9gOKn0Zv5hwYmg");
    
  })

  function Link(a){

    window.location.href = a;
  }

  function Search(search){
    let results = ["e"]
    searchble.forEach(element => {
      fetch(element)
      .then(response => response.text())
      .then(html => {
          let parser = new DOMParser();
          let doc = parser.parseFromString(html, "text/html");
          let title = doc.getElementsByTagName("title")[0].textContent;
          if (title.toLocaleLowerCase().includes(search)) {

            results.push(element)
          }
        })
       .catch(function() {
          console.log("error");
        });
      
    });
    console.log(results)
    return(results)
    
    }
   
