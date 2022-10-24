'use strict'

let elementToggle= function(elem){
    elem.classList.toggle("active");
}

let buttonInfo = document.querySelector("[data-sidebar-btn]");
let sidebarInfo = document.querySelector("[data-sidebar]");

buttonInfo.addEventListener("click", function(){
    elementToggle(sidebarInfo);
})

// resume

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

// projects

let select=document.querySelector("[data-select]");
let selectItems=document.querySelectorAll("[data-select-item]");
let selectValue=document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click",function(){
    elementToggle(this);
});

for(let i=0; i < selectItems.length; i++){
    selectItems[i].addEventListener("click",function(){
        let selectedValue=this.innerText.toLowerCase();
        selectValue.innerText=this.innerText;
        elementToggle(select);
        filterFunc(selectedValue);
    });
};

let filterItems=document.querySelectorAll("[data-filter-item]");

let filterFunc=function(selectedValue){
    for(let i=0; i < filterItems.length; i++){
        if(selectedValue==="all"){
            filterItems[i].classList.add("active");
        }else if(selectedValue === filterItems[i].dataset.category){
            filterItems[i].classList.add("active");
        }else{
            filterItems[i].classList.remove("active");
        }
    }
}

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form
let form=document.querySelector("[data-form]");
let formInputs=document.querySelectorAll("[data-form-input]");
let formBtn=document.querySelector("[data-form-btn]");

for(let i=0; i < formInputs.length; i++){
    formInputs[i].addEventListener("input", function(){
        if(form.checkValidity()){
            formBtn.removeAttribute("disabled");
        } else{
            formBtn.setAttribute("disabled" , "");
        }
    });
}


// nav

let navLinks=document.querySelectorAll("[data-nav-link]");
let pages=document.querySelectorAll("[data-page]");

for(let i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click",function(){

        for(let i=0; i < pages.length; i++){
            if(this.innerHTML.toLowerCase() === pages[i].dataset.page){
                pages[i].classList.add("active");
                navLinks[i].classList.add("active");
                window.scrollTo(0,0);
            }else{
                pages[i].classList.remove("active");
                navLinks[i].classList.remove("active");
            }
        }
    });
}



