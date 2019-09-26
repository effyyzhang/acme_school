const conn = require('./conn')
const { Sequelize } = conn;
const {UUID, UUIDV4, STRING, DECIMAL, TEXT, VIRTUAL} = Sequelize;

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
        unique: false,
        validate: {
            notEmpty: true
        }
    },

    lastName:{
        type: STRING,
        allowNull: false,
        unique: false,
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
    },

    schoolId:{
        type: UUID,
        defaultValue: UUIDV4,
    },

    fullName:{
        type: VIRTUAL,
        get: function(){
            var fullName = this.get('firstName')+' '+this.get('lastName');
            return fullName
        }
    }
});

module.exports = Student;
