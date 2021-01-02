/****************************
Javascript.js
PURPOSE: Javascript for project 18: Background Slider
AUTHOR: Lavon Marquise Edwards
DATE: January 1st 2020
NOTES: 
****************************/

//  Bring in the dom elements
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

//  Index of the currently active slide.
let activeSlide = 0;

setBackgroundToBody();

//  Sets the body background image to the same image as the slide.
function setBackgroundToBody() {
    
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

//  Sets the active slide.
function setActiveSlide() {

    //  remove the active class on every slide.
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    //  add the active class to the slide whose index matches that of the active slide.
    slides[activeSlide].classList.add('active');
}

//  Add event listeners to the left button to move the index down.
leftButton.addEventListener('click', () => {

    activeSlide--;

    //if active slide is greater than 0, make it go down one.
    if(activeSlide < 0) {
        activeSlide = slides.length-1;
    }

    setBackgroundToBody();
    setActiveSlide();
})

//  Add event listeners to the right button to move the index up.
rightButton.addEventListener('click', () => {

   
    activeSlide++;

    //if active slide is greater than 0, make it go down one.
    if(activeSlide > slides.length-1) {
        activeSlide = 0;
    }

    setBackgroundToBody();
    setActiveSlide();
})