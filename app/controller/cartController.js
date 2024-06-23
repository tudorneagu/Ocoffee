const dataMapper = require("../dataMapper");

const cartController = {
  shopPage: async (request, response) => {
    try {
      const cart = request.session.cart ?? [];
      console.log(cart);
      response.render("shop", { css: "shop", cart });
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  },

  cartAdd: async (request, response) => {
    try {
      if (!request.session.cart) {
        request.session.cart = [];
      }
      const coffee = await dataMapper.getCoffee(request.params.id);
      request.session.cart.push(coffee);

      response.redirect("/shop");
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  },
  cartRemove: async (request, response) => {
    try {
      console.log(request.session.cart);
      request.session.cart = request.session.cart.filter(
        (coffee) => coffee.id !== Number(request.params.id)
      );

      response.redirect("/shop");
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  },
};

module.exports = cartController;
