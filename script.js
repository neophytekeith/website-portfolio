document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector(".animated-name");
    const letters = name.textContent.split("");
    name.innerHTML = ""; // Clear the existing content
  
    letters.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      name.appendChild(span);
    });
  });

