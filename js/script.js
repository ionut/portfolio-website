'use strict'

let elementToggle= function(elem){
    elem.classList.toggle("active");
}

let buttonInfo = document.querySelector("[data-sidebar-btn]");
let sidebarInfo = document.querySelector("[data-sidebar]");

buttonInfo.addEventListener("click", ()=>{
    elementToggle(sidebarInfo);
})



