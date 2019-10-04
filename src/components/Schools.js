import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

const Schools = ({schools, students, history}) => {
    const count = (id, students) => {
        return students.filter(student => student.schoolId === id).length
    }
    return (
        <ul>
            {schools.map(school =><li key = {school.id}>
                    <a onClick = {ev => history.push(`/schools/${school.id}`)}><h3>{school.name}</h3></a>
                    <img className='logo' src = {school.imgURL}></img>
                    <p>Student Count {count(school.id, students)}</p>
                    <select>
                        <option value=''>--Add Student--</option>
                        {
                            students
                            .filter(student => student.schoolId !== school.id)
                            .map(student =>
                                <option key={student.id} value = {student.fullName}>
                                {student.fullName}
                                </option>
                                )
                        }
                    </select>
                </li>)
            }
        </ul>
    )
};

const mapStateToProps = ({ schools, students},{location})=> {
    let filtered = schools;
    const schoolList = {};
    students.map(student => {
        if(Object.keys(schoolList).indexOf(student.schoolId) < 0){
            schoolList[student.schoolId] = 1
        }else{
            schoolList[student.schoolId]++
        }
    })
    const maxStudentsCount = Math.max(...Object.values(schoolList))
    const popularSchoolIds = Object.keys(schoolList).filter(key => schoolList[key] === maxStudentsCount)
    const popularSchools = schools.filter(school => (popularSchoolIds.indexOf(school.id)>-1))
    if(location.pathname === '/schools/popular'){
        filtered = popularSchools
        console.log(filtered)


    }
    return {
        schools: filtered,
        students
    };
  };

export default connect(mapStateToProps)(Schools);

