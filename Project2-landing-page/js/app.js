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

/*const navLinks = document.querySelectorAll('.landing__containrer');
const sections = document.querySelectorAll('section');
const listItem = document.createElement('li');*/

// Create dynamic navbar variables
const allSections = document.querySelectorAll('section');
const navs = document.querySelectorAll('.navbar a');
// Active Links variables
//const links = document.querySelectorAll('.links');
//const sections = document.querySelectorAll('section');

/*const listHtml = '<a href="#' + navLinks.*/

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

// build the nav

function createNav() {
for(let i = 0.; i < allSections.length; i ++){
    const myHead = allSections[i].id;
    
    const newNav = document.createElement('li');  

    newNav.innerHTML = '<a class="'+myHead+' links" href="#'+myHead+'">'+myHead.toUpperCase()+'</a>';
    const mainNav = document.querySelector('.navbar');
    mainNav.appendChild(newNav); 
    console.log(myHead);
  }
}

// Add class 'active' to section when near top of viewport

/*const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeActiveView() {
    let index = sections.length;
  
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    links.forEach((links) => link.classList.remove('active'));
    links[index].classList.add('active');
  }*/


  // New code that seesm to work in console

//const links = document.querySelectorAll('.links');
//const sections = document.querySelectorAll('section');

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
navs.forEach(elem => elem.addEventListener("click", navClick));

function navClick(event) {

    smoothScroll(event); //Call smoothScroll function with click event

        }
//window.scrollTo()
        function smoothScroll(event) {
            event.preventDefault();
            const toHref = event.currentTarget.getAttribute("href");
            window.scrollTo({
            top: document.querySelector(toHref).offsetTop,
            behavior: "smooth"
            });
        }

/*window.addEventListener("scroll")*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//changeActiveView();
//window.addEventListener('scroll', changeActiveView);


