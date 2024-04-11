function initGlider() {
  // Get the glider element
  const gliderElement = document.querySelector(".glider");
  // Get the number of slides to display for different screen sizes
  const slidesToShowXS = parseInt(
    gliderElement.getAttribute("data-display-xs")
  );
  const slidesToShowSM = parseInt(
    gliderElement.getAttribute("data-display-sm")
  );
  const slidesToShowMD = parseInt(
    gliderElement.getAttribute("data-display-md")
  );
  const slidesToShowLG = parseInt(
    gliderElement.getAttribute("data-display-lg")
  );
  // Initialize Glider instance
  const glider = new Glider(gliderElement, {
    slidesToShow: slidesToShowXS,
    slidesToScroll: slidesToShowXS,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        //Extra small devices (up to 575.98px)
        breakpoint: 475.98, //
        settings: {
          slidesToShow: slidesToShowXS,
          slidesToScroll: slidesToShowXS,
        },
      },
      //// Small devices (576px and up)
      {
        breakpoint: 576,
        settings: {
          slidesToShow: slidesToShowSM,
          slidesToScroll: slidesToShowSM,
        },
      },
      // Medium devices (768px and up)
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShowMD,
          slidesToScroll: slidesToShowMD,
        },
      },
      // Large devices (992px and up)
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShowLG,
          slidesToScroll: slidesToShowLG,
        },
      },
    ],
  });
}
initGlider();
// Update Glider on window resize
window.addEventListener("resize", function () {
  // Destroy the existing Glider instance
  glider.destroy();
  // Re-initialize Glider
  initGlider();
});
