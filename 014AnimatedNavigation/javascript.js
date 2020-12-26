/****************************
Javascript.js
PURPOSE: Javascript for the Animated Navigation project
AUTHOR: Lavon Marquise Edwards
DATE: December 26 2020
NOTES: 
****************************/

//  Get the button element and navigation element.
const navigationButton = document.getElementById('toggle');
const navigationBox = document.getElementById('nav');

//  Add an event listener for when the button is pressed;
navigationButton.addEventListener('click', () => {
    navigationBox.classList.toggle('active');
})