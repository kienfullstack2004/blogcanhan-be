require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.CLOUD_DB, process.env.CLOUD_USER, process.env.CLOUD_PASS, {
    host: process.env.CLOUD_HOST,
    dialect: 'mysql',
    logging: false
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Connect has been established faily!');
    }
}

module.exports = { connect };