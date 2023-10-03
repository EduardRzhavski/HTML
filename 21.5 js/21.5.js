document.addEventListener('DOMContentLoaded', function () {
    const numSmileysInput = document.getElementById('numSmileys');
    const generateButton = document.getElementById('generateButton');
    const errorText = document.getElementById('error');
    const smileysContainer = document.getElementById('smileys');
  
    generateButton.addEventListener('click', function () {
      const numSmileys = parseInt(numSmileysInput.value);
  
      if (isNaN(numSmileys) || numSmileys < 0) {
        errorText.textContent = 'Please enter a number.';
        smileysContainer.innerHTML = '';
      } else {
        errorText.textContent = ''; 
        smileysContainer.innerHTML = ''; 
  
        for (let i = 0; i < numSmileys; i++) {
          const smiley = document.createElement('span');
          smiley.textContent = '🙂'; 
          smileysContainer.appendChild(smiley);
        }
      }
    });
  });
  