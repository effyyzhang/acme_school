const conn = require('./conn')
const School = require('./School');
const Student = require('./Student');

// Student.belongsTo(School);
// School.hasMany(Student);

const map = (model, data) => data.map(value => model.create(value));
const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const schools = [
    {name: 'Harvard', imgURL:"https://en.wikipedia.org/wiki/Harvard_University#/media/File:Harvard_shield_wreath.svg" },
    {name: 'NYU', imgURL:"https://en.wikipedia.org/https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/media/slider/images/nyu-logo_hdv.jpg?itok=OqgaeS41/Harvard_University#/media/File:Harvard_shield_wreath.svg" },
    {name: 'MIT', imgURL:"http://www.hultprize.org/wp-content/uploads/2017/04/MIT-Logo.png://en.wikipedia.org/https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/media/slider/images/nyu-logo_hdv.jpg?itok=OqgaeS41/Harvard_University#/media/File:Harvard_shield_wreath.svg" }
    ];

    const [Havard, NYU, MIT] = await Promise.all(map(School, schools));

  const students = [
    {firstName:'Effy', lastName: 'Zhang', email:'effyzhang@gmail.com', GPA: 4.0},
    {firstName:'Brian', lastName: 'Lovin', email:'brianlovin@gmail.com', GPA: 3.8},
    {firstName:'Bryn', lastName: 'Jackson', email:'brynjackson@gmail.com', GPA: 3.6}
    ];

    const [effy, brian, bryn] = await Promise.all(map(Student, students));
};

module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
};
