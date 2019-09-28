import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';

const Schools = ({students}) => {
    if(!students || students.length === 0){return null}
    return (
        <ul>
            {students.map(student => <li key = {student.id}><Student student = {student}/></li>)}
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

