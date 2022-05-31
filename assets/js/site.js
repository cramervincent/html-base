const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(" .nav");

const spans = document.querySelectorAll(".hamburger span");


hamburger.addEventListener("click", () => {
    spans.forEach((e) => {
        e.classList.toggle("active"); 
    })
    hamburger.classList.toggle("active"); 
    menu.classList.toggle("active"); 
   

})