document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const increaseButton = document.getElementById('increaseButton');
    const decreaseButton = document.getElementById('decreaseButton');
  
    let fontSize = 16; 
  
    function updateFontSize() {
      textElement.style.fontSize = `${fontSize}px`;
    }
  
    increaseButton.addEventListener('click', function () {
      if (fontSize < 100) {
        fontSize += 3; 
        updateFontSize();
      }
    });
  
    decreaseButton.addEventListener('click', function () {
      if (fontSize > 6) {
        fontSize -= 3; 
        updateFontSize();
      }
    });
  });
  