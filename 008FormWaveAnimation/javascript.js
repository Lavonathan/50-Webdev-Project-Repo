/****************************
Javascript.js
PURPOSE: Form wave javascript.js
AUTHOR: Lavon Marquise Edwards
DATE: December 19 2020
NOTES: 
****************************/

//  Get all of the labels for the form inputs.
const labels = document.querySelectorAll('.form-control label');

//  For each label do the following.
labels.forEach(label => {

    //  Get each individual letter of the label into an array.
    //  Split('') puts each letter into an individual array
    //  map() creates a new array with each letter being surrounded by a 
    //  span element. 
    //  join('') joins the array back into a string!.
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span 
                style="transition-delay:${idx*20}ms">${letter}</span>`)
        .join('');
})