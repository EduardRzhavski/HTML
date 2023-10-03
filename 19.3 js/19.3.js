const inputs = document.querySelectorAll('.verification-input');

function focusNextInput(currentInput) {
  const currentIndex = Array.from(inputs).indexOf(currentInput);
  if (currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  }
}

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      focusNextInput(e.target);
    } else {
      e.target.value = ''; 
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault(); 
    const clipboardData = e.clipboardData.getData('text/plain');
    const characters = clipboardData.split('');
    characters.forEach((character) => {
      if (/^[0-9]$/.test(character)) {
        input.value = character;
        focusNextInput(input);
      }
    });
  });
});

document.querySelector('#verificationForm').addEventListener('input', () => {
  const isFormValid = Array.from(inputs).every((input) => input.value !== '');
  if (isFormValid) {
    document.querySelector('#verificationForm').submit();
  }
});
