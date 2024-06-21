const articles = document.querySelectorAll(".catalogue__article");
const boutique = document.querySelectorAll(".about_boutique");
const savoirFaire = document.querySelectorAll(".about_savoirFaire");

const seeMore = document.getElementById("article__see__more");
const seeLess = document.getElementById("article__see__less");

console.log(articles);
console.log(savoirFaire);

function removeClass(group) {
  group.forEach((element) => {
    element.classList.remove("--hidden");
  });
}
function addClass(group) {
  group.forEach((element, index) => {
    if (index > 2) {
      element.classList.add("--hidden");
    }
  });
}

seeMore.addEventListener("click", () => {
  removeClass(articles);
  removeClass(boutique);
  removeClass(savoirFaire);
  seeMore.classList.add("--hidden");
  seeLess.classList.remove("--hidden");
});

seeLess.addEventListener("click", () => {
  addClass(articles);
  addClass(boutique);
  addClass(savoirFaire);
  seeMore.classList.remove("--hidden");
  seeLess.classList.add("--hidden");
});
