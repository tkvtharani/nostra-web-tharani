var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.getElementById("side-navbar-activate")
var sideNavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sideNavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderLeftbutton = document.getElementById("slider-left-activate")
var sliderRightbutton =document.getElementById("slider-right-activate")
var sliderImage= document.querySelector(".slider-image-container")
var sliderMargin=0

console.log(sliderLeftbutton)

sliderRightbutton.addEventListener("click",
function(){
    sliderMargin=sliderMargin+100

    if(sliderMargin>200)
    {
        sliderMargin=0
        sliderImage.style.marginLeft=0;
    }
    else{
        sliderImage.style.marginLeft="-"+sliderMargin+"vw";
    }
    
   

}
)

sliderLeftbutton.addEventListener("click",

function(){

    if(sliderMargin==0)
    {
       
        sliderMargin=200
        sliderImage.style.marginLeft="-"+sliderMargin+"vw";
    }
    else{

        sliderMargin=sliderMargin-100
    sliderImage.style.marginLeft="-"+sliderMargin+"vw";
    }
    
    
}
)





var likeButtons=document.querySelectorAll(".like-button")

likeButtons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})


//Collections