const dataMapper = require("../dataMapper");

const mainController = {
  homePage: async (request, response) => {
    const getNewCoffee = await dataMapper.getNewCoffee();
    response.render("home", { css: "home", getNewCoffee });
  },

  aboutPage: (request, response) => {
    response.render("about", { css: "about" });
  },

  catalogPage: async (request, response) => {
    try {
      const result = await dataMapper.getAllCoffee();
      const getCoffeeCategories = await dataMapper.getCoffeeCategories();

      response.render("catalog", {
        css: "catalog",
        result,
        getCoffeeCategories,
      });
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
      client.end();
    }
  },

  productPage: async (request, response) => {
    const getCoffee = await dataMapper.getCoffee(request.params.id);
    console.log(getCoffee);
    response.render("product", { css: "product", getCoffee });
  },

  contactPage: (request, response) => {
    response.render("contact", { css: "contact" });
  },

  sentPage: (request, response) => {
    response.render("sent", { css: "contact" });
  },

  shopPage: (request, response) => {
    response.render("shop", { css: "shop" });
  },
};

module.exports = mainController;
