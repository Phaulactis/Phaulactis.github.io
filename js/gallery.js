
const BigImg = document.getElementById('BigImg');
const Big = document.getElementById('Big');
const BigText = document.getElementById('BigImgText');
const Button1 = document.getElementById('Button1');
const Button2 = document.getElementById('Button2');
var ImgId = 0;
var imgSrcs = [];
var imgs
window.onload= function(){
	var imgsD = img_find();
  
}


function img_find() {
    imgs = document.getElementsByTagName("img");
    
    imgSrcs = [];


    for (var i = 0; i < imgs.length; i++) {
        if(imgs[i].src.lastIndexOf("PhaulactisBig.png") < 0 && imgs[i].id != "BigImg" && imgs[i].src.lastIndexOf("Chev") < 0){
           
            imgSrcs.push(imgs[i]);
           
            imgs[i].addEventListener('click', function(){
                
                var src = this.getAttribute('src');
                var text = this.getAttribute('id'); 
                ImgId = imgSrcs.lastIndexOf(this);
                Open_bigImg(src,text);
                
            })
            
        }
        
    }
    return imgSrcs;
}
overlay.addEventListener('click', function(){
   
    Big.style.display = "none"; 
    overlay.style.display = "none"           
   
})
function Open_bigImg(src, text){

    Big.style.display = "flex";
    // @ts-ignore
    BigImg.src = src;
    overlay.style.display = "block"
    BigText.innerHTML = text
}
Button1.addEventListener('click', function(){
   
    if(ImgId > 0){
        ImgId = ImgId - 1;
   
        // @ts-ignore        
       BigImg.src = imgSrcs[ImgId].getAttribute('src');
       
       BigText.innerHTML = imgSrcs[ImgId].getAttribute('id');
    }
    else{
        ImgId = imgSrcs.length -1
   
        // @ts-ignore        
       BigImg.src = imgSrcs[ImgId].getAttribute('src');
       
       BigText.innerHTML = imgSrcs[ImgId].getAttribute('id');
    }    
   
})
Button2.addEventListener('click', function(){
    if(ImgId < imgSrcs.length -1){
        ImgId = ImgId + 1;
   
        // @ts-ignore        
       BigImg.src = imgSrcs[ImgId].getAttribute('src');
       
       BigText.innerHTML = imgSrcs[ImgId].getAttribute('id');
    }
    else{
        ImgId = 0
   
        // @ts-ignore        
       BigImg.src = imgSrcs[ImgId].getAttribute('src');
       
       BigText.innerHTML = imgSrcs[ImgId].getAttribute('id');
    }
   
})