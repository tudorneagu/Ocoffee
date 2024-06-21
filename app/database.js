// on importe le module pg

const pg = require("pg");

// on creer un client

const client = new pg.Client(process.env.PG_URL);

// on se conncete au client

client.connect();

// on exporte le client connecté:

module.exports = client;
