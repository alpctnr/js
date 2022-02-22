const addMovieButton = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        if ('info' in movie) { // Checking existstance
            const movieEl = document.createElement('li');
            const { info: movieInfo, ...otherProps } = movie; // Destructuring with new alias
            let text = movie.getFormattedTitle() + ' - ';
            movieEl.textContent = movieInfo.title;
            for (const key in movieInfo) {
                if (key !== 'title') {
                    text = text + `${key}: ${movieInfo[key]}`;
                }
            }
            movieEl.textContent = text;
            movieList.append(movieEl);
        }
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue // Used [] to store dynamic property key;
        },
        id: Math.random(),
        getFormattedTitle: function () {
            return this.info.title.toUpperCase();
        }

    };

    movies.push(newMovie);
    renderMovies();
    console.log(movies);
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieButton.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);