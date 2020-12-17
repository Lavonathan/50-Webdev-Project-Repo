/****************************
Javascript.js
PURPOSE: Javascript for project 6. Scroll animation
AUTHOR: Lavon Marquise Edwards
DATE: December 17 2020
NOTES: 
****************************/

//  All of the boxes on our page.
const boxes = document.querySelectorAll('.box');

//  Using the scrolling event. Every time the page scrolls down do this.
window.addEventListener('scroll', checkBoxes)

//  Initially call check boxes to see which boxes are visible right when the page
//  loads.
checkBoxes();

//  Check if the trigger point for the boxes has been reached. If they have,
//  Move them on to the screen.
function checkBoxes() {
    
    //  This allows us to check which point of the window we want boxes
    //  To appear. Once it hits this trigger point, we can bring in a new box
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top;

        //  If the box top is above the trigger bottom, bring in the box.
        //  Otherwise remove the show class.
        if(boxTop <= triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}