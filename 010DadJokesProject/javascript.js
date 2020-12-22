/****************************
Javascript.js
PURPOSE: Javascript for the dad jokes project.
AUTHOR: Lavon Marquise Edwards
DATE: December 22 2020
NOTES: 
****************************/

//  The new joke button, the audio element, and the joke-text element.
const button = document.getElementById('jokebutton');
const audio = document.getElementById('tada');
const joke_element = document.getElementById('joke-text');

//  Get the first initial joke.
generateJoke();
playSound();

//  Event listener for the button. Do actions when clicked.
button.addEventListener('click', () => {

    //  Play the sound.
    playSound();

    //  Update the joke.
    generateJoke();
})

//  Performs the fetch request for the joke. 
function generateJoke() {

    //  The required header for the feth request.
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }


    //  The actual fetch request.
    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then((data) => {
        //  Update the inner HTML of the joke.
        joke_element.innerHTML = data.joke
    });
}


//  Play the sound 
function playSound() {

    //  Stop the song if it is already playing and play it again.
    audio.pause();
    audio.currentTime = 0;

    // Play the audio.
    audio.volume = 0.25;
    audio.play();
}