// ========================================
// CineSearch - Movie Search Website
// ========================================


// Movie Data

const movies = [

    {
        id: 1,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 4,
        title: "The Hangover",
        year: 2009,
        genre: "Comedy",
        rating: 7.7,
        poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        rating: 8.8,
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 6,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 7,
        title: "Joker",
        year: 2019,
        genre: "Drama",
        rating: 8.4,
        poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 8,
        title: "Deadpool",
        year: 2016,
        genre: "Comedy",
        rating: 8.0,
        poster: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?auto=format&fit=crop&w=500&q=80"
    }

];


// Favorites Array

let favorites = [];


// Currently Selected Genre

let selectedGenre = "All";


// ========================================
// Select HTML Elements
// ========================================

const movieContainer = document.getElementById("movieContainer");

const favoriteContainer =
    document.getElementById("favoriteContainer");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const genreButtons =
    document.querySelectorAll(".genre-btn");


// ========================================
// Display Movies
// ========================================

function displayMovies(movieArray) {

    movieContainer.innerHTML = "";


    if (movieArray.length === 0) {

        movieContainer.innerHTML =
            "<p>No movies found.</p>";

        return;
    }


    movieArray.forEach(function (movie) {

        const movieCard =
            document.createElement("div");

        movieCard.classList.add("movie-card");


        movieCard.innerHTML = `

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                class="movie-poster"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    <strong>Year:</strong>
                    ${movie.year}
                </p>

                <p>
                    <strong>Genre:</strong>
                    ${movie.genre}
                </p>

                <p>
                    ⭐ <strong>Rating:</strong>
                    ${movie.rating}
                </p>


                <div class="movie-buttons">
                    <button onclick="showMovieDetails(${movie.id})">
                        ℹ️ Details
                    </button>

                    <button onclick="addToFavorites(${movie.id})">
                        ❤️ Favorite
                    </button>

                </div>

            </div>

        `;


        movieContainer.appendChild(movieCard);

    });

}


// ========================================
// Apply Search + Genre Filter
// ========================================

function applyFilters() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredMovies =
        movies.filter(function (movie) {

            const titleMatches =
                movie.title
                    .toLowerCase()
                    .includes(searchText);


            const genreMatches =
                selectedGenre === "All" ||
                movie.genre === selectedGenre;


            return titleMatches && genreMatches;

        });


    displayMovies(filteredMovies);

}


// ========================================
// Add to Favorites
// ========================================

function addToFavorites(movieId) {

    const selectedMovie =
        movies.find(function (movie) {

            return movie.id === movieId;

        });


    const alreadyFavorite =
        favorites.some(function (movie) {

            return movie.id === movieId;

        });


    if (alreadyFavorite) {

        alert("This movie is already in your favorites!");

        return;
    }


    favorites.push(selectedMovie);


    alert(selectedMovie.title + " added to favorites!");

    displayFavorites();

}


// ========================================
// Display Favorites
// ========================================

function displayFavorites() {

    favoriteContainer.innerHTML = "";


    if (favorites.length === 0) {

        favoriteContainer.innerHTML = `

            <p id="emptyFavoriteMessage">
                No favorite movies added yet.
            </p>

        `;

        return;
    }


    favorites.forEach(function (movie) {

        const movieCard =
            document.createElement("div");

        movieCard.classList.add("movie-card");


        movieCard.innerHTML = `

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                class="movie-poster"
            >

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>
                    <strong>Year:</strong>
                    ${movie.year}
                </p>

                <p>
                    <strong>Genre:</strong>
                    ${movie.genre}
                </p>

                <p>
                    ⭐ <strong>Rating:</strong>
                    ${movie.rating}
                </p>


                <div class="movie-buttons">

                    <button onclick="removeFromFavorites(${movie.id})">
                        ❌ Remove
                    </button>

                </div>

            </div>

        `;


        favoriteContainer.appendChild(movieCard);

    });

}


// ========================================
// Remove from Favorites
// ========================================

function removeFromFavorites(movieId) {

    favorites =
        favorites.filter(function (movie) {

            return movie.id !== movieId;

        });


    displayFavorites();

}


// ========================================
// Search Events
// ========================================

searchButton.addEventListener("click", function () {

    applyFilters();

});


searchInput.addEventListener("input", function () {

    applyFilters();

});


// ========================================
// Genre Filter Events
// ========================================

genreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class
        genreButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class
        button.classList.add("active");


        // Update selected genre
        selectedGenre = button.dataset.genre;


        // Apply both filters
        applyFilters();

    });

});


// ========================================
// Initial Display
// ========================================

displayMovies(movies);
displayFavorites();
// ========================================
// Movie Details Modal
// ========================================

const movieModal = document.getElementById("movieModal");

const modalDetails = document.getElementById("modalDetails");

const closeModal = document.getElementById("closeModal");


function showMovieDetails(movieId) {

    const movie = movies.find(function (movie) {

        return movie.id === movieId;

    });


    modalDetails.innerHTML = `

        <img
            src="${movie.poster}"
            alt="${movie.title}"
            class="modal-poster"
        >

        <h2>${movie.title}</h2>

        <p>
            <strong>Release Year:</strong>
            ${movie.year}
        </p>

        <p>
            <strong>Genre:</strong>
            ${movie.genre}
        </p>

        <p>
            <strong>Rating:</strong>
            ⭐ ${movie.rating}
        </p>

        <p>
            Discover more information about this movie and add it
            to your favorite movie collection.
        </p>

    `;


    movieModal.style.display = "flex";

}


// Close button event

closeModal.addEventListener("click", function () {

    movieModal.style.display = "none";

});


// Close modal when clicking outside

movieModal.addEventListener("click", function (event) {

    if (event.target === movieModal) {

        movieModal.style.display = "none";

    }

});