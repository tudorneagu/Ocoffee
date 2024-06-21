function caroussel() {
  "use strict";
  const slideTimeout = 5000;
  const prev = document.querySelector("#slider--left");
  const next = document.querySelector("#slider--right");
  const $slides = document.querySelectorAll(".news__article");
  let $dots;
  let intervalId;
  let currentSlide = 0;

  function slideTo(index) {
    if (index >= $slides.length) index = 0;
    if (index < 0) index = $slides.length - 1;
    currentSlide = index;
    $slides.forEach(($elt, i) => {
      $elt.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    $dots.forEach(($elt, i) => {
      $elt.classList = `dot ${i === currentSlide ? "active" : "inactive"}`;
    });
  }

  function showSlide() {
    slideTo(currentSlide + 1);
  }

  document.querySelector(".carousel__dots").innerHTML = "";
  for (let i = 0; i < $slides.length; i++) {
    let dotClass = i === currentSlide ? "active" : "inactive";
    let $dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
    document.querySelector(".carousel__dots").innerHTML += $dot;
  }

  $dots = document.querySelectorAll(".dot");

  $dots.forEach(($elt, i) => {
    $elt.addEventListener("click", () => slideTo(i));
  });

  prev.addEventListener("click", () => slideTo(currentSlide - 1));
  next.addEventListener("click", () => slideTo(currentSlide + 1));

  intervalId = setInterval(showSlide, slideTimeout);

  $slides.forEach(($elt) => {
    let startX;
    let endX;

    $elt.addEventListener(
      "mouseover",
      () => {
        clearInterval(intervalId);
      },
      false
    );

    $elt.addEventListener(
      "mouseout",
      () => {
        intervalId = setInterval(showSlide, slideTimeout);
      },
      false
    );

    $elt.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
    });

    $elt.addEventListener("touchend", (event) => {
      endX = event.changedTouches[0].clientX;
      if (startX > endX) {
        slideTo(currentSlide + 1);
      } else if (startX < endX) {
        slideTo(currentSlide - 1);
      }
    });
  });
}

caroussel();
