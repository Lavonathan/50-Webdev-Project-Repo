/*
javascript.js
PURPOSE: Expanding Cards project
AUTHOR: Lavon Marquise Edwards
DATE: December 12 2020
NOTES: 
*/

// Get an array of each panel
const panels = document.querySelectorAll('.panel');

//  Loop through each panel
//  Add an click event listener
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        //console.log(panel);

        //  Remove active classes off of all other panels.
        removeActiveclasses();

        // Add the active class to whichever panel was clicked.
        panel.classList.add('active');
    })
})

//  Removes the active class for each panel.
function removeActiveclasses() {

    //  Loop through each panel
    //  Remove the active class for each
    panels.forEach((panel) => {

        //  Remove the active class on each panel.
        panel.classList.remove('active');
    })
}