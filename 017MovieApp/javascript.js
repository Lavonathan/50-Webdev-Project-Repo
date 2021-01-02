/****************************
Javascript.js
PURPOSE: Javascript for the Movie App project
AUTHOR: Lavon Marquise Edwards
DATE: December 31 2020
NOTES: Some ideas to improve this would be to do pagination.
make it so you can return to the main page.
-Category search?
-Include logo
-Add more to the header.
-Improve the styling further
-a Home button
-Display "none" when no search results found.
-And more! cand definitely expand on this project a ton.
****************************/

//  The API url to get the movie data as JSON
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

//  The path to each movies image must begin with this.
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

//  Use this API to search for a movie.
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

//  The search form.
const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const main_section = document.getElementById('main');

//  Get Initial Movies
getMovies(API_URL);

//  Async function to fetch the movie data using the API URL.
async function getMovies(url) {
    
    const response = await fetch(url);
    const data = await response.json();
    
    showMovies(data.results);
} 

//Put the movie data into the DOM so it can be seen!
function showMovies (movie_data) {
    
    // Clear all the movies currently being shown.
    main_section.innerHTML = '';

    movie_data.forEach((movie) => {
        
        //  Get the data from the movie object as variables. This is cool! didn't know you could do this with objects in js.
        const { title,poster_path, vote_average, overview } = movie;

        const movie_element = document.createElement('div');
        movie_element.classList.add('movie');
        movie_element.innerHTML =
        `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;

        main_section.append(movie_element);
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

//  Event listener for when the search input is submitted
form.addEventListener('submit', (e) => {
    
    //  Don't actually submit the form.
    e.preventDefault();
    
    //  The search text input by a user to search for a movie.
    const searchTerm = searchInput.value;

    //  If there is something being searched for search for it!
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)

        search.value = '';
    } else {
        getMovies(API_URL);
        window.location.reload();
    }
})