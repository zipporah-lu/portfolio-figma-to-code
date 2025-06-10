console.log("Havnest landing page loaded.");

document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      perPage: 3,
      focus: "center",
      gap: "1.5rem",
      arrows: true,
      pagination: true,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();
  });
  