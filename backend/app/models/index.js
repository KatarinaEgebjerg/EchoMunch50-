require("dotenv").config({ path: `.env.local`, override: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize("echomunchapi", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3308,
  password: process.env.SECRET,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.recipes = require("./recipe.model.js")(sequelize, Sequelize);

module.exports = db;
