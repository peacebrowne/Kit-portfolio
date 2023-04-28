document.addEventListener("click", (event) => {
  const targetEle = event.target;
  const targetEleClas = Array.from(targetEle.classList);

  if (targetEleClas.includes("angle"))
    targetEleClas.includes("right-arrow")
      ? carousal("right")
      : carousal("left");
});

const heroSlider = findEle(".hero-section").querySelectorAll(".hero-container");

function carousal(direction) {
  const currentSlide = Array.from(heroSlider).find((ele) =>
    ele.className.includes("active-hero")
  );

  if (direction === "right") {
    if (currentSlide.nextElementSibling) {
      currentSlide.nextElementSibling;
    }
  } else {
    toggle_class(currentSlide, "slide-right");
    toggle_class(currentSlide, "slide-right");
    toggle_class(currentSlide.nextElementSibling, "slide-right");
  }
}

function slideLeft() {}

function slideRight() {}
