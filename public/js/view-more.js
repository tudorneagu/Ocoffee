const articles = document.querySelectorAll(".catalogue__article");

const seeMore = document.getElementById("article__see__more");
const seeLess = document.getElementById("article__see__less");
console.log(articles);

seeMore.addEventListener("click", () => {
  articles.forEach((article) => {
    article.classList.remove("--hidden");
  });
  seeMore.classList.add("--hidden");
  seeLess.classList.remove("--hidden");
}),
  seeLess.addEventListener("click", () => {
    articles.forEach((article, index) => {
      if (index > 2) {
        article.classList.add("--hidden");
      }
    });
    seeMore.classList.remove("--hidden");
    seeLess.classList.add("--hidden");
  });
