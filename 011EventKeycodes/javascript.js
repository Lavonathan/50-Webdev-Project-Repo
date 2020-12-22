/****************************
Javascript.js
PURPOSE: Javascript for the keycode project
AUTHOR: Lavon Marquise Edwards
DATE: December 22 2020
NOTES: 
****************************/

//  bring in the div that contains everything
const insert_div = document.getElementById('insert');
const baseInnerHTML = insert_div.innerHTML;

//  When any key is pressed on the page.
window.addEventListener('keydown', (e) => {
    
    //  Remove any keycode information currently there.
    removeKeycodeInformation();

    //  Insert the new keycode information.
    insertKeycodeInformation(e);

})

//  Remove the previous keyCode Information.
function removeKeycodeInformation() {

    insert_div.innerHTML = baseInnerHTML;

}

//  Set the styling of the insert div.
// background-color: rgb(207, 204, 199);
// height: 100px;
// width: 600px;
// border-bottom: 1px solid black;
// border-radius: 10px;
function styleInsertDiv() {

    insert_div.style.background = "rgb(207, 204, 199)";
    insert_div.style.height = "100px";
    insert_div.style.width = "600px";
    insert_div.style.borderBottom = "1px solid black";
    insert_div.style.borderRadius = "10px";
}

//  Insert the relevant keycode information
function insertKeycodeInformation(e) {
    
    //  Style the insert div
    styleInsertDiv();

    insert_div.innerHTML = `
    <div class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>event.keycode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>
    ` + insert_div.innerHTML;

}