import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");


/* ------------------ HAMBURGER MENU --------------------------------------*/

const hamburgerToggler = document.querySelector(".hamburger");
const navlinksContainer = document.querySelector(".navlinks-container");

const toggleNav = (e) => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";

  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navlinksContainer.classList.toggle("open");
};

hamburgerToggler.addEventListener("click", toggleNav);


new ResizeObserver(entries => {
     if(entries[0].contentRect.width <= 580){
        navlinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
        navlinksContainer.style.transition = "none"
    }
}).observe(document.body)


  

 /* ------------------ NAV BAR SCROLL POSITION --------------------------------------*/ 

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 950) {
        nav.classList.add('scroll')
    } else{
        nav.classList.remove('scroll')
    }
});


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navlinks-container a');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
           
        }
    })
    navLi.forEach( a =>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })

})