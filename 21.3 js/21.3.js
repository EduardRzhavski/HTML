document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('jobApplicationText');
    const errorMessage = document.getElementById('errorMessage');
    const submitButton = document.getElementById('submitButton');
  
    function validateTextarea() {
      const inputText = textarea.value.trim();
      if (inputText.length < 100) {
        errorMessage.textContent = 'Please enter at least 100 characters.';
        return false;
      } else {
        errorMessage.textContent = '';
        return true;
      }
    }
  
    submitButton.addEventListener('click', function (event) {
      if (!validateTextarea()) {
        event.preventDefault(); 
      }
    });
  
    textarea.addEventListener('input', validateTextarea);
  });
  