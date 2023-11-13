const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
    },
    {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
    },
  ];
  
  const movieImageMap = {
    1: "66b4ed8b965ec8dbb658a907be990c7412d077e8c66dd1197011c9396bbb1bc5.jpg",
    2: "MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    3: "MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    4: "image.jpg",
    5: "12_Angry_Men_(1957_film_poster).jpg",
  };
  
  const movieContainer = document.getElementById("movieContainer");
  
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
  
    const image = document.createElement("img");
    image.src = movieImageMap[movie.id];
    image.alt = "Movie Poster";
    image.classList.add("movie-poster");
  
    const details = document.createElement("div");
    details.classList.add("movie-details");
  
    const title = document.createElement("h2");
    title.textContent = movie.title;
  
    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre}`;
  
    const director = document.createElement("p");
    director.textContent = `Director: ${movie.director}`;
  
    const releaseYear = document.createElement("p");
    releaseYear.textContent = `Release Year: ${movie.releaseYear}`;
  
    const rating = document.createElement("p");
    rating.textContent = `Rating: ${movie.rating}`;
  
    const votes = document.createElement("p");
    votes.textContent = `Votes: ${movie.votes}`;
  
    details.appendChild(title);
    details.appendChild(genre);
    details.appendChild(director);
    details.appendChild(releaseYear);
    details.appendChild(rating);
    details.appendChild(votes);
    card.appendChild(image);
    card.appendChild(details);
    movieContainer.appendChild(card);
  });
  
  movies.push(newMovie);
  createMovieCard(newMovie);

  document.getElementById("movieForm").reset();

movies.forEach(movie => createMovieCard(movie));

document.getElementById("movieForm").addEventListener("submit", addMovie);

