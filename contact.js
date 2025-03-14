

var sideNavMenu=document.getElementById("side-navbar-activate")
var sideNavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sideNavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})





