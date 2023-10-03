document.addEventListener('DOMContentLoaded', function () {
    const lightbulb = document.getElementById('lightbulb');
    let isLightOn = false; 
  
    function toggleLightbulb() {
      isLightOn = !isLightOn; 
      const imagePath = isLightOn ? '\glowing-lightbulb-realistic-concept-idea-vector-22966909.jpg' : '\object-bulb-off-vector-1858972.jpg';
      lightbulb.src = imagePath; 
      lightbulb.alt = `Lightbulb (${isLightOn ? 'On' : 'Off'})`; 
    }
  
    lightbulb.addEventListener('click', toggleLightbulb);
  });
  