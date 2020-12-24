/****************************
Javascript.js
PURPOSE: Javascript for the FAQ Collapsable boxes project.
AUTHOR: Lavon Marquise Edwards
DATE: December 23 2020
NOTES: 
****************************/

//  Bring in all of the toggle buttons
const toggleButtons = document.querySelectorAll('.faq-toggle');

hideAll();

//  Loop through each toggle button
toggleButtons.forEach(button => {
    
    //  Toggle the active class on the buttons parent node.
    button.addEventListener('click', () => {
            //  Disable all other faqs. Only 1 at a time.
            hideAll(button);    

            button.parentNode.classList.toggle('active');
    })
})

//  Hide all of the buttons.
function hideAll(passedButton) {
    //  Loop through each button.
    toggleButtons.forEach(button => {  
        
        //  Make sure it isn't the button that was clicked.
        if(button != passedButton)
        {
            //  Hide all of the buttons
            button.parentNode.classList.remove('active');
        }
        
    })
}