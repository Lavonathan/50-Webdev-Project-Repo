/*
Javascript.js
PURPOSE: Progress Steps project
AUTHOR: Lavon Marquise Edwards
DATE: December 13 2020
NOTES: 
*/

/*The progress bar*/
const progress = document.getElementById('progress-line');

/*The buttons*/
const prev = document.getElementById('prev');
const next = document.getElementById('next');

/*The circles
 * The ".circle" is required because this is a class.
 * QuerySelectorAll is used to create an array of all of our circles. 
 */
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

//  When the next button is clicked, the current active goes up by 1.
next.addEventListener('click', () => {
    
    // They progress can only go up to the correct amount of circles..
    if(currentActive < circles.length){
        currentActive++
    }

    updateProgress();
})

//  When the next button is clicked, the current active goes up by 1.
prev.addEventListener('click', () => {
    
    // They progress can only go down to 1.
    if(currentActive > 1){
        currentActive--
    }

    updateProgress();
})

//  Update the previous button or next button to be activated / deactivated.
function updateProgress () {
    

    //  Set each circle as active if its index is within current active.
    //  idx = index of each circle.
    circles.forEach((circle, idx) => {

        if(idx < currentActive)
        {
            circle.classList.add("active")
        }
        else {
            circle.classList.remove("active")
        }
    })

    //  Get the length of the progress bar.
    const progressBarLength = (currentActive -1) / (circles.length -1);

    //  Change the width of the progress bar.
    progress.style.width = progressBarLength * 100 + '%';//(currentActive / circles.length);

    //  Disable/enable the buttons.
    if(currentActive == circles.length) {
        next.disabled = true;
    } 
    else if (currentActive == 1) {
        prev.disabled = true;
    } 
    else {
        prev.disabled = false;
        next.disabled = false;
    }
        
    
}