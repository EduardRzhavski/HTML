document.addEventListener('DOMContentLoaded', function () {
    const ageInput = document.getElementById('ageInput');
    const checkAgeButton = document.getElementById('checkAgeButton');
    const resultMessage = document.getElementById('result');
  
    checkAgeButton.addEventListener('click', function () {
      const age = parseInt(ageInput.value);
  
      if (!isNaN(age) && age > 18) {
        resultMessage.textContent = 'You can drink.';
      } else if (!isNaN(age) && age < 18) {
        resultMessage.textContent = 'Youre too young.';
      } else {
        resultMessage.textContent = 'Please enter a valid age.';
      }
    });
  });
  