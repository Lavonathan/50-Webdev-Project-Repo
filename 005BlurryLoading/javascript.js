/****************************
Javascript.js
PURPOSE: Javascript for the Blurry Loading page
AUTHOR: Lavon Marquise Edwards
DATE: December 16 2020
NOTES: 
****************************/

const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

// The amount of the page that has been loaded.
let load = 0;

//  The set Interval allows you to call a function every unit of time. First parameter is the function to call
//  Second parameter is the time between calls.
let int = setInterval(blurring, 30);

function blurring() {
    load ++

    //  Clear interval is how to stop the setInterval.
    //  Clear the interval when the load is completed.
    if(load > 99) {
        clearInterval(int); 
    }
    
    //  Changing the inner text property of the loading text. Could also use inner HTML.
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0,  100, 1, 0);
    
    //  Changing the blur of the background
    const blurriness = scale(load, 0, 100, 30, 0);
    background.style.filter = `blur(${blurriness}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
//  From stack overflow. This does an arrow function to map values to one another. As load gets closer to 100, the
//  Opacity gets closer to 0.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }