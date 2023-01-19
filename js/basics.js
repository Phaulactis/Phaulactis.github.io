

const hamburger = document.getElementById('MenuIcon')
const sidebar = document.getElementById('Menu')
const overlay = document.getElementById('Overlay')
var right=document.getElementById('rightdiv').style.height;
var left=document.getElementById('leftdiv').style.height;
const img = document.getElementById('leftdiv');

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