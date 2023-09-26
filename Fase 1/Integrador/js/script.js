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
