document.addEventListener("DOMContentLoaded", function () {
  const showMoreButtons = document.querySelectorAll(".show-more");

  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const moreInfo = this.nextElementSibling;
      if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
        this.textContent = "Mostrar más";
      } else {
        moreInfo.style.display = "block";
        this.textContent = "Mostrar menos";
      }
    });
  });
});

//alta
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("product-form");
  form.addEventListener("submit", function (event) {
    const requiredInputs = document.querySelectorAll(".required-input");

    let isValid = true;

    requiredInputs.forEach(function (input) {
      if (input.value.trim() === "") {
        input.classList.add("error"); 
        isValid = false;
      } else {
        input.classList.remove("error"); 
      }
    });

    if (!isValid) {
      event.preventDefault(); 
      alert("Por favor, complete todos los campos requeridos.");
    }
  });
});