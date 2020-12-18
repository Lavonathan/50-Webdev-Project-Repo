/****************************
Javascript.js
PURPOSE: Splint Landing page javascript
AUTHOR: Lavon Marquise Edwards
DATE: December 18, 2020
NOTES: 
****************************/

//  Getting the elements that we will be using.
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


//  The events for when the user mouses over a section.
left.addEventListener("mouseenter", () => 
    container.classList.add('hover-left'))

right.addEventListener("mouseenter", () => 
    container.classList.add('hover-right'))

//  The events for when a user leaves a section. Required
//  In the case that the users mouse isn't over either.
left.addEventListener("mouseleave", () =>
    container.classList.remove('hover-left'))

right.addEventListener("mouseleave", () =>
    container.classList.remove('hover-right'))