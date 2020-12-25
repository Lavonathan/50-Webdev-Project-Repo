/****************************
Javascript.js
PURPOSE: Javascript for the Random Choice Selector project
AUTHOR: Lavon Marquise Edwards
DATE: December 24, 2020
NOTES: 
****************************/

//  Get the tags div, textArea, and smiley/thinking-bubble images.
const tagsElement = document.getElementById('tags');
const textArea = document.getElementById('textArea');
const smiley = document.getElementById('smiley');

//  Modify the smiley when the text area is focused on
textArea.addEventListener('focus', () => {
    smiley.classList.add('focus');
    textArea.placeholder = '';
    smiley.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/thinking-face_1f914.png";
})

//  Remove the focus class when the text area loses focus
textArea.addEventListener('focusout', () => {
    smiley.classList.remove('focus');
})

//  Occurs whenever a key is released. 
textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //  Check if enter key was the one pressed.
    if(e.key === 'Enter') {

        //  Get rid of the input after 10 milliseconds.
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        //  Select one of the choices.
        randomSelect();
    }
})

//  Used to create the tags on the page.
function createTags (input) {
    
    //  Create an array of all the words seperated by comma
    //  Filter them out to make sure there are no spaces or empty choices
    //map the array to the trimmed version.
    const generatedTags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    //  Clear the tags element
    tagsElement.innerHTML = '';

    //  Loop through each generated tag, appending it to tags div.
    generatedTags.forEach(element => {
        
        //  Create a new span tag, give it the appropriate class, and append it into the tags div.
        let newTag = document.createElement('span');
        newTag.classList.add('tag');
        newTag.innerText = element;
        tagsElement.appendChild(newTag);
        
    });
    
}

//  Used to randomly select from the choice list.
function randomSelect() {

    //  Remove focus from the text area and set place holder to thinking text.
    textArea.blur();
    textArea.placeholder = 'Thinking . . . ';
    smiley.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/face-with-steam-from-nose_1f624.png";

    //  The number of times it will highlight values
    const timesToHighlight = 30;

    //  Set an interval for how long this will occur.
    //  Pick a random tag each frame.
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        //  Wait 100 milliseconds to unhighlight the tag
        setTimeout(() => {
            removeHighlightTag(randomTag);
        }, 100);
    }, 100);

    //  Stop the interval
    setTimeout(() => {
        clearInterval(interval);

        //  After 100 milliseconds, select a final choice!
        setTimeout(() => {
            const selectedRandomTag = pickRandomTag();

            selectedRandomTag.classList.add('selected');

             // Display the choice as placeholder text.
            textArea.placeholder = 'There you have it! "' + selectedRandomTag.innerText + '" is your answer!';
            smiley.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/grinning-face-with-smiling-eyes_1f604.png"
            
        }, 100);
    }, timesToHighlight * 100);
   
}

//  Select a random tag out of the choices you have 
function pickRandomTag() {

    //  Get all of the generated tags (they have a class of tag)
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)];

}

//  Set the class of highlight on a tag to change its styling
function highlightTag(tag) {
    
    tag.classList.add('highlight');

}

//  Remove the highlight from the tag
function removeHighlightTag(tag) {
    
    tag.classList.remove('highlight');
    
}
