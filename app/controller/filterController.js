const dataMapper = require("../dataMapper.js");

const filterController = {
  byCaracteristic: async (request, response) => {
    try {
      const getCoffeeCategories = await dataMapper.getCoffeeCategories();
      console.log(request.query);
      const result = await dataMapper.filterCoffee(request.query.catalogue);
      console.log(result);

      response.render("catalog", {
        css: "catalog",
        getCoffeeCategories,
        result,
      });
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  },
};
module.exports = filterController;
