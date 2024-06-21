const btnNavMobile = document.querySelector(".icon-mobile-nav");
const btnNavMobileClose = document.querySelector(".icon-mobile-nav-close");
const header = document.querySelector(".header");

btnNavMobile.addEventListener("click", () => {
  header.classList.add("nav-open");
});
btnNavMobileClose.addEventListener("click", () => {
  header.classList.remove("nav-open");
});
