document.addEventListener("DOMContentLoaded", function () {
  const quantityInputs = document.querySelectorAll(".quantity__input");
  const plusBtns = document.querySelectorAll(".plus-btn");
  const minusBtns = document.querySelectorAll(".minus-btn");

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const countIndex = this.getAttribute("data-index");
      const input = quantityInputs[countIndex];
      let value = parseInt(input.value) || 0;
      value = Math.min(value + 1, parseInt(input.max) || Infinity);
      input.value = value;
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const countIndex = this.getAttribute("data-index");
      const input = quantityInputs[countIndex];
      let value = parseInt(input.value) || 0;
      value = Math.max(value - 1, parseInt(input.min) || 0);
      input.value = value;
    });
  });
});
