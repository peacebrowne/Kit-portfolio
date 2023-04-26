document.addEventListener("click", (event) => {
  const targetEle = event.target;
  const targetEleClas = Array.from(targetEle.classList);

  if (targetEleClas.includes("angle")) carousal(targetEle, targetEleClas);
});

let currentPosition = 0;

function carousal(targetEle, targetEleClas) {
  const sliders = targetEle
    .closest(".hero-section")
    .querySelectorAll(".hero-container");

  toggle_class(sliders[0], slideRight);
}

function slideLeft() {}

function slideRight() {}
