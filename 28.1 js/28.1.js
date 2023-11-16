    function fetchJoke() {
      fetch("https://api.jokes.one/jod")
        .then(response => response.json())
        .then(data => {

            const jokeTitle = data.contents.jokes[0].joke.title;
          const jokeText = data.contents.jokes[0].joke.text;

          document.getElementById("jokeTitle").textContent = `Joke Title: ${jokeTitle}`;
          document.getElementById("jokeText").textContent = `Joke: ${jokeText}`;
        })
        .catch(error => {
          console.error('Error fetching joke:', error);
        });
    }

    document.getElementById("fetchJokeButton").addEventListener("click", fetchJoke);

