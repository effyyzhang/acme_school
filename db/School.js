
const conn = require('./conn');
const { Sequelize } = conn;
const { UUID, UUIDV4,STRING,TEXT } = Sequelize;


const School = conn.define('school', {
    id:{
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
        unique: true
    },

    name:{
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },

    imgURL:{
        type: TEXT,
        allowNull: false
    }
});
module.exports = School;
