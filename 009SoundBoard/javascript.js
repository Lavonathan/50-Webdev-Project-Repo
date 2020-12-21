/****************************
Javascript.js
PURPOSE: Javascript page for the audio sound board.
AUTHOR: Lavon Marquise Edwards
DATE: 
NOTES: Also added in volume! Nice Work!
****************************/

//  array of all of the sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//  The current volume.
var range_value = 0;

//  get the range input for volume
const range_input = document.getElementById('range');

//  Dealing with the creationg and playing of each sound button.
sounds.forEach(sound => {
    
    //  Create a button for each sound.
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = sound;

    //  Add a click event to each button to play its associated sound.
    button.addEventListener('click', () => {
        // Stop any audio currently playing.
        audioSetup();

        document.getElementById(sound).play();
    })

    //  Append each created button into the buttons container.
    document.getElementById('buttons').appendChild(button);
})

//  Stop any audio currently playing
function audioSetup() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        //  Change the volume of the audio.
        song.volume = (range_value / 100);

        //  Theres no dedicated stop method. Just use the pause, and then
        //  reset the current time of the audio to 0.
        song.pause();
        song.currentTime = 0;
    })
}

//  Click event for the range button being changed.
range_input.addEventListener('mouseup', () => {
    range_value = range_input.value;
})