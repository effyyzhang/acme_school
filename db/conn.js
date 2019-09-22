const Sequelize = require('sequelize')
module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_students_db');
