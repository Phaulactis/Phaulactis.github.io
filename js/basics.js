

const hamburger = document.getElementById('MenuIcon')
const sidebar = document.getElementById('Menu')
const overlay = document.getElementById('Overlay')
const twitter = document.getElementById('Twitter')
const youtube = document.getElementById('Youtube')

let menuOpen = false

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
  "/html/Homolobinae.html",
  "/html/DusonaKey.html",
  "/html/Campopleginae.html",
  "/html/Ichneumonidae.html",
  "/html/Hymenoptera.html",
  "/html/Dusona/Dusona_admontina.html",
  "/html/Dusona/Dusona_aemula.html",
  "/html/Dusona/Dusona_alpigena.html",
  "/html/Dusona/Dusona_alpina.html",
  "/html/Dusona/Dusona_alticola.html",
  "/html/Dusona/Dusona_anceps.html",
  "/html/Dusona/Dusona_angustata.html",
  "/html/Dusona/Dusona_angustifrons.html",
  "/html/Dusona/Dusona_annexa.html",
  "/html/Dusona/Dusona_aurita.html",
  "/html/Dusona/Dusona_aversa.html",
  "/html/Dusona/Dusona_baueri.html",
  "/html/Dusona/Dusona_bellipes.html",
  "/html/Dusona/Dusona_bicoloripes.html",
  "/html/Dusona/Dusona_blanda.html",
  "/html/Dusona/Dusona_bucculenta.html",
  "/html/Dusona/Dusona_calceata.html",
  "/html/Dusona/Dusona_carinifrons.html",
  "/html/Dusona/Dusona_carpathica.html",
  "/html/Dusona/Dusona_castanipes.html",
  "/html/Dusona/Dusona_circumcinctus.html",
  "/html/Dusona/Dusona_circumspectan.html",
  "/html/Dusona/Dusona_confusa.html",
  "/html/Dusona/Dusona_cultrator.html",
  "/html/Dusona/Dusona_dubitor.html",
  "/html/Dusona/Dusona_erythogaster.html",
  "/html/Dusona/Dusona_falcator.html",
  "/html/Dusona/Dusona_flagellator.html",
  "/html/Dusona/Dusona_genalis.html",
  "/html/Dusona/Dusona_habermheli.html",
  "/html/Dusona/Dusona_holmgrenii.html",
  "/html/Dusona/Dusona_humilis.html",
  "/html/Dusona/Dusona_inermis.html",
  "/html/Dusona/Dusona_infesta.html",
  "/html/Dusona/Dusona_insignita.html",
  "/html/Dusona/Dusona_juvenilis.html",
  "/html/Dusona/Dusona_leptogaster.html",
  "/html/Dusona/Dusona_libertatis.html",
  "/html/Dusona/Dusona_limnobia.html",
  "/html/Dusona/Dusona_luteipes.html",
  "/html/Dusona/Dusona_mactator.html",
  "/html/Dusona/Dusona_mercator.html",
  "/html/Dusona/Dusona_minor.html",
  "/html/Dusona/Dusona_montana.html",
  "/html/Dusona/Dusona_myrtilla.html",
  "/html/Dusona/Dusona_nidulator.html",
  "/html/Dusona/Dusona_notabilis.html",
  "/html/Dusona/Dusona_obliterata.html",
  "/html/Dusona/Dusona_opaca.html",
  "/html/Dusona/Dusona_perditor.html",
  "/html/Dusona/Dusona_petiolator.html",
  "/html/Dusona/Dusona_pienticola.html",
  "/html/Dusona/Dusona_polita.html",
  "/html/Dusona/Dusona_prominula.html",
  "/html/Dusona/Dusona_pugillator.html",
  "/html/Dusona/Dusona_pulchripes.html",
  "/html/Dusona/Dusona_recta.html",
  "/html/Dusona/Dusona_rubidatae.html",
  "/html/Dusona/Dusona_rugifer.html",
  "/html/Dusona/Dusona_sobolicida.html",
  "/html/Dusona/Dusona_spinipes.html",
  "/html/Dusona/Dusona_stragifex.html",
  "/html/Dusona/Dusona_stygia.html",
  "/html/Dusona/Dusona_subimpressa.html",
  "/html/Dusona/Dusona_tenuis.html",
  "/html/Dusona/Dusona_terebrator.html",
  "/html/Dusona/Dusona_thomsoni.html",
  "/html/Dusona/Dusona_vidua.html",
  "/html/Dusona/Dusona_vigilator.html",
  "/html/Dusona/Dusona_xenocampta.html"
]



function openMenu() {
    menuOpen = true
    overlay.style.display = 'block'
   
    sidebar.style.left =  '-0em'
    
  }
  
  function closeMenu() {
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.left =  '-17em'
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
  try {
    twitter.addEventListener('click', function () {
      open("https://twitter.com/Phaulactis");
    })
  }catch (error) {
    
  }
  try {
    youtube.addEventListener('click', function () {
      open("https://www.youtube.com/channel/UCd9giNbLc9gOKn0Zv5hwYmg");
      
    })
  }catch (error) {
   
  }
  

 

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
   