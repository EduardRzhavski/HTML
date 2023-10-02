document.addEventListener("DOMContentLoaded", function () {
    const startHereItem = document.querySelector("li.start-here");
  
    if (startHereItem) {
      startHereItem.textContent = "main title";
    }
  });
  
//   ------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const nestedList = document.querySelector("ul ul");
  
    if (nestedList) {
      const newListItem = document.createElement("li");
      
      newListItem.textContent = "subtitle 4";
      
      nestedList.appendChild(newListItem);
    }
  });

//   -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const lastListItem = document.querySelector("ul ul li:last-child");
  
    if (lastListItem) {
      lastListItem.remove();
    }
  });

//   -----------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
    document.title = "Master Of The Dom";
  });
  
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const paragraphElement = document.querySelector("p");
  
    paragraphElement.textContent = "This is the new text for the paragraph.";
  });
  