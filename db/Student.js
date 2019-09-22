const conn = require('./conn')
const { Sequelize } = conn;
const {UUID, UUIDV4, STRING, DECIMAL, TEXT} = Sequelize;

const Student = conn.define('student', {
    id:{
        primaryKey: true,
        type: UUID,
        defaultValue: UUIDV4,
        unique: true
    },

    firstName:{
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },

    lastName:{
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },

    email:{
        type: TEXT,
        allowNull: false,
        unique: true
    },

    GPA:{
        type: DECIMAL,
        allowNull: false,
        unique: false
    }
});

module.exports = Student;
