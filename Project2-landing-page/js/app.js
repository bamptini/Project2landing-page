/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Create dynamic navbar variables
const allSections = document.querySelectorAll('section');

// Active Links variables
const navs = document.querySelectorAll('.navbar a');
const mainNav = document.querySelector('.navbar');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav and add scrollTo event listener
function createNav() {
for(let i = 0.; i < allSections.length; i ++){
    const myHead = allSections[i].id;
    const newNav = document.createElement('li');  

    newNav.innerHTML = '<a class="'+myHead+' links" href="#'+myHead+'">'+myHead.toUpperCase()+'</a>';
    newNav.addEventListener("click", smoothScroll);
    mainNav.appendChild(newNav); 
    console.log(myHead);
  }
}

// Add class 'active' to section when near top of viewport

function changeActiveView() {    
    
    const links = document.querySelectorAll('.links');
    const sect = document.querySelectorAll('.sect');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', changeActiveView);

    let index = sections.length;
  
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    links.forEach((lins) => lins.classList.remove('active'));
    links[index].classList.add('active');

    sect.forEach((sec) => sec.classList.remove('active'));
    sect[index].classList.add('active');
}

// Scroll to anchor ID using scrollTO event

//window.scrollTo()
        function smoothScroll(event) {
            event.preventDefault();
            const toHref = event.target.getAttribute("href");
            window.scrollTo({
            top: document.querySelector(toHref).offsetTop,
            behavior: "smooth"
            });
            console.log(toHref);
        }
// END