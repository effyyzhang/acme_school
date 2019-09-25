import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

const Schools = ({students, schools}) => {
    const findSchool = (id, schools) => {
        return schools.find(school => school.id === id)
    }
    return (
        <ul>
            {
                students.map(student =><li key = { student.id }>
                    <h3>{student.fullName}</h3>
                    { student.schoolId ? (<img className = 'school-bg' src={findSchool(student.schoolId, schools).imgURL} ></img>) : (<div>No schoolId</div>)}
                    <p>{student.GPA}</p>
                </li>)
            }
        </ul>
    )
};

const mapStateToProps = ({ schools, students })=> {
    return {
        students,
        schools
    };
  };

export default connect(mapStateToProps)(Schools);

