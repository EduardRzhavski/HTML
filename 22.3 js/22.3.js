let randomLetter = generateRandomLetter();
        let guessedLetters = [];
        let gameActive = true;

        function generateRandomLetter() {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        function checkGuess() {
            if (!gameActive) {
                alert('Click "Play Again" to start a new game.');
                return;
            }

            const guessInput = document.getElementById('guessInput');
            const guess = guessInput.value.toUpperCase();

            if (!/^[A-Z]$/.test(guess)) {
                showMessage('Please enter a valid letter (A-Z)', 'red');
                return;
            }

            if (guessedLetters.includes(guess)) {
                showMessage('You already guessed this letter', 'red');
                return;
            }

            guessedLetters.push(guess);
            document.getElementById('lettersGuessed').textContent = `Keys guessed: ${guessedLetters.join(', ')}`;

            if (guess === randomLetter) {
                showMessage(`Right letter! The letter was "${randomLetter}".`, 'green');
                gameActive = false;
            } else {
                showMessage('Nope, wrong letter', 'red');
            }
        }

        function showMessage(message, color) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = message;
            messageDiv.style.color = color;
        }

        function playAgain() {
            randomLetter = generateRandomLetter();
            guessedLetters = [];
            gameActive = true;

            showMessage('', '');
            document.getElementById('lettersGuessed').textContent = '';
            document.getElementById('guessInput').value = '';
        }