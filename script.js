document.querySelectorAll(".accordion").forEach((accordion) => {
  const parent = accordion.closest(".accordions");

  accordion
    .querySelector(".accordion__header")
    .addEventListener("click", function () {
      if (parent && parent.classList.contains("accordion__toggle")) {
        parent.querySelectorAll(".accordion").forEach((accordion) => {
          accordion.classList.remove("accordion__open");
        });
      }

      accordion.classList.toggle("accordion__open");
    });
});