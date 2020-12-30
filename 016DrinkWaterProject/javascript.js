/****************************
Javascript.js
PURPOSE: Javascript page for the Drink Water project
AUTHOR: Lavon Marquise Edwards
DATE: December 28 2020
NOTES: 
****************************/

//  Bring in the required dom elements
const smallCups = document.querySelectorAll('.cup-small');
const litersText = document.getElementById('liters');
const precentage = document.getElementById('percentage');
const remainingAmount = document.getElementById('remained');

updateBigCup();

//  Loop through all the small cups to add event listeners.
smallCups.forEach((cup, idx) => {

    //  add event listener to highlight the cup that was clicked on.
    cup.addEventListener('click', () => highlightCups(idx));

})

//  Highlights cups that are clicked on.
function highlightCups(passedCupIndex) {
    
    //  loop through each cup and register its index.
    smallCups.forEach((cup, cupIndex) => {
        
        //  If the index of the cup clicked on is greater than the cup,
        //  Highlight it.
        if(passedCupIndex > cupIndex) {
            cup.classList.add('full');
        }
        //  If it is the same index, toggle it so you can switch it off
        else if(passedCupIndex == cupIndex) {
            cup.classList.toggle('full');
        }
        //  If the index is less, un-highlight the cup.
        else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

//Updates the percentages and fill amount of the big cup.
function updateBigCup() {

    //  Get the number of full glasses.
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    const cupFillheight = fullCups / totalCups;


    //  If there are no full cups
    if(fullCups === 0) {
        precentage.style.visibility = "hidden";
        precentage.style.height = 0;
    }
    //  If it has something in it
    else {
        precentage.innerText = `${cupFillheight * 100}%`
        precentage.style.visibility = 'visible';
        precentage.style.height = `${cupFillheight * 330}px`;
    }

    //  If full cups is equal to total cups, big cup is full
    //  Get rid of the remaining.
    if(totalCups === fullCups) {
        remainingAmount.style.visibility = 'hidden';
        remainingAmount.style.height = 0;
        precentage.innerHTML = '100% <br> Great Job!';
    }
    else {
        remainingAmount.style.visibility = 'visible';
        console.log(fullCups);
        litersText.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}