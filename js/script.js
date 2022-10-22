'use strict'

let elementToggle= function(elem){
    elem.classList.toggle("active");
}

let buttonInfo = document.querySelector("[data-sidebar-btn]");
let sidebarInfo = document.querySelector("[data-sidebar]");

buttonInfo.addEventListener("click", ()=>{
    elementToggle(sidebarInfo);
})

let testimonialsItem=document.querySelectorAll("[data-testimonials-item]");
let modalContainer=document.querySelector("[data-modal-container]");
let modalClose=document.querySelector("[data-modal-close-btn]");
let overlay=document.querySelector("[data-overlay]");

let modalImg=document.querySelector("[data-modal-img]");
let modalTitle=document.querySelector("[data-modal-title]");
let modalText=document.querySelector("[data-modal-text]");

let testimonialsModalFunction=function(){
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

for(let i=0;i < testimonialsItem.length; i++){
    testimonialsItem[i].addEventListener("click",function(){
        
        modalImg.src=this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt=this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML=this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML=this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunction();
    });
}

modalClose.addEventListener("click", testimonialsModalFunction);
overlay.addEventListener("click", testimonialsModalFunction);


