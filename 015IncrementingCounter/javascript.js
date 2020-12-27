/****************************
Javascript.js
PURPOSE: Javascript for the incrementing counter project.
AUTHOR: Lavon Marquise Edwards
DATE: December 27 2020
NOTES: 
****************************/

//  Bring in all the counters
const counters = document.querySelectorAll('.counter');

//  For each counter, get the value of the data target and update the counter.
counters.forEach((counter) => {
    
    counter.innerText = '0';

    //  Creating a function in a new way i've never seen before!
    //  Update the counter by getting the data target attribute.
    const updateCounter = () => {
        
        //  Create the target variable, and a referecnce to the inner text.
        const target = +counter.getAttribute('data-target');
        const counterInnerText = +counter.innerText;

        //  How much you want to increment by.
        const incrementRate = 300;
        const increment = target / incrementRate;
        
        if(counterInnerText < target) {
            //ceil rounds values up.
            counter.innerText = `${Math.ceil(counterInnerText + increment)}`;
            
            //  Give it a timer for how quickly it will increment.
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }

    }

    updateCounter();
})