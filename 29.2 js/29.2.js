async function fetchChuckNorrisJoke() {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();

      const jokeTitle = data.category;
      const jokeText = data.value;

      document.getElementById("jokeTitle").textContent = `Category: ${jokeTitle}`;
      document.getElementById("jokeText").textContent = `Joke: ${jokeText}`;
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  }

  document.getElementById("fetchJokeButton").addEventListener("click", fetchChuckNorrisJoke);