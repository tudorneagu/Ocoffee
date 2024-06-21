const client = require("./database");

const dataMapper = {
  getAllCoffee: async () => {
    const result = await client.query("SELECT * FROM coffee");
    return result.rows;
  },
  getCoffee: async (id) => {
    const result = await client.query(`SELECT * FROM coffee WHERE id=${id}`);
    return result.rows[0];
  },
  getNewCoffee: async () => {
    const result = await client.query(
      `SELECT * FROM coffee ORDER BY id DESC LIMIT 4`
    );
    return result.rows;
  },

  getCoffeeCategories: async () => {
    const result = await client.query(
      `SELECT DISTINCT caracteristics FROM coffee `
    );
    return result.rows;
  },

  // <--------------- FILTERS --------------->

  filterCoffee: async (caracteristics) => {
    const filterResult = await client.query(
      `SELECT * FROM coffee WHERE caracteristics = '${caracteristics}'`
    );
    return filterResult.rows;
  },
};

module.exports = dataMapper;
