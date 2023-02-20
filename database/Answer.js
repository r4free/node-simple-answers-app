import Sequelize from "sequelize";
import connection from "./database.js";

const Answer = connection.define('answers', {
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
})

Answer.sync({ force: false })

export default Answer