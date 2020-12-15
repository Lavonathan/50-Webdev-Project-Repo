/****************************
Javascript.js
PURPOSE: Hidden Search Widget JS
AUTHOR: Lavon Marquise Edwards
DATE: December 15, 2020
NOTES: 
****************************/

//  Getting the required elements.
const searchButton = document.querySelector(".btn");
const searchContainer = document.querySelector('.search');
const input = document.querySelector('.input');

//  Event listener for the button click.
searchButton.addEventListener('click', () => {

    //  Check if the search is active. Switch between the two as necessary.
    searchContainer.classList.toggle('active');
    
    //  Set the focus to the input to immediately begin typing there.
    input.focus();
})