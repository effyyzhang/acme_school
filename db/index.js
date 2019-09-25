const conn = require('./conn')
const School = require('./School');
const Student = require('./Student');

Student.belongsTo(School);
School.hasMany(Student);

const map = (model, data) => data.map(value => model.create(value));
const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const schools = [
    {name: 'Harvard', imgURL:"https://kdp0l43vw6z2dlw631ififc5-wpengine.netdna-ssl.com/wp-content/uploads/2009/01/harvard-logo-263-1024x1024.jpg" },
    {name: 'NYU', imgURL:"https://www.nyu.edu/projects/dawes/NYUlogo.jpg" },
    {name: 'MIT', imgURL:"https://childcare.mit.edu/sites/default/files/images/MIT-logo-with-spelling-office-red-gray-design1.png" }
    ];

    const [Harvard, NYU, MIT] = await Promise.all(map(School, schools));

  const students = [
    {firstName:'Effy', lastName: 'Zhang', email:'effyzhang@gmail.com', GPA: 4.0, schoolId: Harvard.id},
    {firstName:'Brian', lastName: 'Lovin', email:'brianlovin@gmail.com', GPA: 3.8, schoolId: NYU.id},
    {firstName:'Bryn', lastName: 'Jackson', email:'brynjackson@gmail.com', GPA: 3.6, schoolId: MIT.id}
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
