// function getMovieInitials(title) {
//     const words = title.split(' ');

//     let initials = '';

//     for (let word of words) {
//         if (word) {
//             initials += word[0].toUpperCase();
//         }
//     }

//     return initials;
// }

// const movieTitle = "the dark knight";
// const initials = getMovieInitials(movieTitle);
// console.log(initials); 

// --------------------------------------------------------------------

// function splitGenres(genres) {
//     const genreArray = genres.split(',').map(genre => genre.trim());

//     return genreArray;
// }

// const genresString = "Action, Adventure, Sci-Fi";
// const genresArray = splitGenres(genresString);
// console.log(genresArray);

// --------------------------------------------------------------------

// const getTotalMovieLength = (movieLengths) => {
//     let totalLength = 0;
//     for (let i = 0; i < movieLengths.length; i++) {
//       totalLength += movieLengths[i];
//     }
//     return 'Total movie length is ' + totalLength + ' minutes';
//   };
  
//   const movieLengths = [120, 130, 140, 150];
//   const result = getTotalMovieLength(movieLengths);
//   console.log(result); 
  
// -------------------------------------------------------------------

// function getMovieTitles(movies) {
//     const titles = movies.map(movie => movie.title);
//     return titles;
//   }
  
//   const movies = [
//     { title: "The Shawshank Redemption" },
//     { title: "The Godfather" },
//     { title: "The Godfather: Part II" },
//     { title: "The Dark Knight" },
//     { title: "12 Angry Men" }
//   ];
  
//   const movieTitles = getMovieTitles(movies);
//   console.log(movieTitles);
  
//   ---------------------------------------------------------------

// function getHighlyRatedMovies(movies, minimumRating) {
//     const highlyRatedMovies = movies.filter(movie => movie.rating >= minimumRating);
//     return highlyRatedMovies;
//   }
  
//   const movies = [
//     { title: "The Shawshank Redemption", rating: 9.3 },
//     { title: "The Godfather", rating: 9.2 },
//     { title: "The Godfather: Part II", rating: 9.0 },
//     { title: "The Dark Knight", rating: 9.0 },
//     { title: "12 Angry Men", rating: 8.9 }
//   ];
  
//   const minimumRating = 9.0;
  
//   const highlyRatedMovies = getHighlyRatedMovies(movies, minimumRating);
//   console.log(highlyRatedMovies);
  
//   ---------------------------------------------------------------

// function calculateAverageRating(movies) {
//     if (movies.length === 0) {
//       return 0; 
//     }
  
//     const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
  
//     const averageRating = totalRating / movies.length;
  
//     return averageRating;
//   }
  
//   const movies = [
//     { title: "The Shawshank Redemption", rating: 9.3 },
//     { title: "The Godfather", rating: 9.2 },
//     { title: "The Godfather: Part II", rating: 9.0 },
//     { title: "The Dark Knight", rating: 9.0 },
//     { title: "12 Angry Men", rating: 8.9 }
//   ];
  
//   const averageRating = calculateAverageRating(movies);
//   console.log(averageRating);
  
//   -----------------------------------------------------------

// function sortMoviesByVotes(movies) {
//     const sortedMovies = movies.sort((a, b) => b.votes - a.votes);
//     return sortedMovies;
//   }
  
//   const movies = [
//     { title: "The Shawshank Redemption", votes: 1500 },
//     { title: "The Godfather", votes: 1200 },
//     { title: "The Godfather: Part II", votes: 1300 },
//     { title: "The Dark Knight", votes: 1100 },
//     { title: "12 Angry Men", votes: 1000 }
//   ];
  
//   const sortedMovies = sortMoviesByVotes(movies);
//   console.log(sortedMovies);
  
// -------------------------------------------------------------

// const movieDatabase = {
//     movies: [
//       { title: "The Shawshank Redemption", rating: 9.3 },
//       { title: "The Godfather", rating: 9.2 },
//       { title: "The Godfather: Part II", rating: 9.0 },
//       { title: "The Dark Knight", rating: 9.0 },
//       { title: "12 Angry Men", rating: 8.9 }
//     ]
//   };
  
//   console.log(movieDatabase.movies);
  
//   ----------------------------------------------------------

// const movieDatabase = {
//     movies: []
//   };
  
//   movieDatabase.movies.push(
//     {
//       title: "The Shawshank Redemption",
//       ratings: [9.3, 9.4, 9.2],
//       averageRating: 0 
//     },
//     {
//       title: "The Godfather",
//       ratings: [9.2, 9.1, 9.4],
//       averageRating: 0 
//     },
//   );
  
//   function calculateAverageRating(movie) {
//     const totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0);
//     movie.averageRating = totalRating / movie.ratings.length;
//   }
  
//   movieDatabase.movies.forEach(movie => calculateAverageRating(movie));
  
//   console.log(movieDatabase.movies);
  
//   --------------------------------------------------------------------

// const movieDatabase = {
//     movies: [],
  
//     addMovie: function (title) {
//       const newMovie = {
//         title: title,
//         ratings: [],
//         averageRating: 0
//       };
//       this.movies.push(newMovie);
//     },
  
//     removeMovie: function (title) {
//       const index = this.movies.findIndex(movie => movie.title === title);
//       if (index !== -1) {
//         this.movies.splice(index, 1);
//       }
//     }
//   };
  
//   movieDatabase.addMovie("Inception");
//   movieDatabase.addMovie("The Matrix");
//   movieDatabase.addMovie("The Godfather");
//   console.log("Movies before removal:", movieDatabase.movies);
  
//   movieDatabase.removeMovie("The Matrix");
//   console.log("Movies after removal:", movieDatabase.movies);
  
// ------------------------------------------------------------------------

// const movieDatabase = {
//     movies: [],
  
//     addMovie: function (title) {
//       const newMovie = {
//         title: title,
//         ratings: [],
//         averageRating: 0
//       };
//       this.movies.push(newMovie);
//     },
  
//     removeMovie: function (title) {
//       const index = this.movies.findIndex(movie => movie.title === title);
//       if (index !== -1) {
//         this.movies.splice(index, 1);
//       }
//     },
  
//     addRating: function (title, rating) {
//       const movie = this.movies.find(movie => movie.title === title);
//       if (movie) {
//         movie.ratings.push(rating);
//       }
//     }
//   };
  
//   movieDatabase.addMovie("Inception");
//   movieDatabase.addMovie("The Matrix");
//   movieDatabase.addMovie("The Godfather");
//   console.log("Movies before rating:", movieDatabase.movies);
  
//   movieDatabase.addRating("The Matrix", 8.5);
//   movieDatabase.addRating("The Godfather", 9.0);
//   console.log("Movies after rating:", movieDatabase.movies);
  
//   ----------------------------------------------------------------------------

// const movieDatabase = {
//     movies: [],
  
//     addMovie: function (title) {
//       const newMovie = {
//         title: title,
//         ratings: [],
//         averageRating: 0
//       };
//       this.movies.push(newMovie);
//     },
  
//     removeMovie: function (title) {
//       const index = this.movies.findIndex(movie => movie.title === title);
//       if (index !== -1) {
//         this.movies.splice(index, 1);
//       }
//     },
  
//     addRating: function (title, rating) {
//       const movie = this.movies.find(movie => movie.title === title);
//       if (movie) {
//         movie.ratings.push(rating);
//       }
//     },
  
//     removeRating: function (title, rating) {
//       const movie = this.movies.find(movie => movie.title === title);
//       if (movie) {
//         const index = movie.ratings.indexOf(rating);
//         if (index !== -1) {
//           movie.ratings.splice(index, 1);
//         }
//       }
//     }
//   };
  
//   movieDatabase.addMovie("Inception");
//   movieDatabase.addMovie("The Matrix");
//   movieDatabase.addMovie("The Godfather");
//   console.log("Movies before rating removal:", movieDatabase.movies);
  
//   movieDatabase.addRating("The Matrix", 8.5);
//   movieDatabase.addRating("The Godfather", 9.0);
//   console.log("Movies after rating addition:", movieDatabase.movies);
  
//   movieDatabase.removeRating("The Godfather", 9.0);
//   console.log("Movies after rating removal:", movieDatabase.movies);

// ---------------------------------------------------------------------

// const movieDatabase = {
//     movies: [],
  
//     addMovie: function (title) {
//       const newMovie = {
//         title: title,
//         ratings: [],
//         averageRating: 0
//       };
//       this.movies.push(newMovie);
//     },
  
//     removeMovie: function (title) {
//       const index = this.movies.findIndex(movie => movie.title === title);
//       if (index !== -1) {
//         this.movies.splice(index, 1);
//       }
//     },
  
//     addRating: function (title, rating) {
//       const movie = this.movies.find(movie => movie.title === title);
//       if (movie) {
//         movie.ratings.push(rating);
//       }
//     },
  
//     removeRating: function (title, rating) {
//       const movie = this.movies.find(movie => movie.title === title);
//       if (movie) {
//         const index = movie.ratings.indexOf(rating);
//         if (index !== -1) {
//           movie.ratings.splice(index, 1);
//         }
//       }
//     },
  
//     searchMovie: function (searchString) {
//       const lowercaseSearchString = searchString.toLowerCase();
//       return this.movies.filter(movie => movie.title.toLowerCase().includes(lowercaseSearchString));
//     }
//   };
  
//   movieDatabase.addMovie("Inception");
//   movieDatabase.addMovie("The Matrix");
//   movieDatabase.addMovie("The Godfather");
//   console.log("Movies before searching:", movieDatabase.movies);
  
//   movieDatabase.addRating("The Matrix", 8.5);
//   movieDatabase.addRating("The Godfather", 9.0);
//   console.log("Movies after rating addition:", movieDatabase.movies);
  
//   const searchResults = movieDatabase.searchMovie("the");
//   console.log("Movies matching 'the':", searchResults);
  
  