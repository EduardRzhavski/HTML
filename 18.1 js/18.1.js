// Select all elements not using the querySelector method

const bodyElement = document.body;

const elementsInsideBody = [];

for (let i = 0; i < bodyElement.childNodes.length; i++) {
  const childNode = bodyElement.childNodes[i];

  if (childNode.nodeType === 1) {
    elementsInsideBody.push(childNode);
  }
}

elementsInsideBody.forEach((element, index) => {
  console.log(`Element ${index + 1}:`, element);
});

// ----------------------------------------------------------------

// Select all elements using querySelector method

const elementsInsideBody = document.querySelectorAll('body *');

const elementsArray = Array.from(elementsInsideBody);

elementsArray.forEach((element, index) => {
  console.log(`Element ${index + 1}:`, element);
});

// -------------------------------------------------------------------

// Select all inputs and iterate over them with the forEach
// method and print each one to the console. Using both
// querySelectorAll and getElementsByTagName

const inputElementsByTagName = document.getElementsByTagName('input');

const inputArray = Array.from(inputElementsByTagName);

inputArray.forEach((element, index) => {
  console.log(`Input ${index + 1}:`, element);
});

