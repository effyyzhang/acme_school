import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

const School = ({schools, students, location}) => {
    const id = location.pathname.split('/')[2]
    const school = schools.find(school => school.id === id)
    const enrolledStudents = students.filter(student => student.schoolId === id)
    const count = enrolledStudents.length
    if(!school){return(<h1>Loading</h1>)}
    return(
        <div>
        <h1>{`${school.name}(${count} Student Enrolled)`}</h1>
        <ul>
            {enrolledStudents.map(student =>
                    <li key = { student.id } className='student-link'>
                        <h3>{student.fullName}</h3>
                        <img className = 'school-bg' src={school.imgURL} ></img>
                        <p>{student.GPA}</p>
                    </li>
                )
            }
        </ul>
        </div>

    )

};

const mapStateToProps = ({ schools, students})=> {
    console.log(history.pathname)
    return {
        schools,
        students
    };
  };


export default connect(mapStateToProps)(School);
