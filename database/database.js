import Sequelize from "sequelize";

const connection = new Sequelize('node', 'root', 'root', {
    host: 'db',
    dialect: "mysql",
})

export default connection