  const userList = document.getElementById("user-list");
  
  const olElement = document.createElement("ol");
  
  users.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.textContent = `${user.firstName} ${user.lastName}`;
    olElement.appendChild(liElement);
  });
  
  userList.appendChild(olElement);
  
//   ----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const orderedList = document.querySelector("ol");
  
    const listItems = orderedList.querySelectorAll("li");
  
    listItems.forEach((item) => {
      item.style.listStyleType = "none";
    });
  });
  
//   --------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("ol li");
  
    listItems.forEach((li) => {
      const id = li.getAttribute("data-id");
      if (id) {
        li.dataset.id = id;
      }
    });
  });
  