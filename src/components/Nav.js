import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({schoolCount, studentCount}) => {
    return(
        <nav>
            <Link to = '/'>ACME</Link>
            <Link to = '/schools'>Schools({schoolCount})</Link>
            <Link to = '/students'>Students({studentCount})</Link>
            <Link to = '/schools/popular'>Popular</Link>
            <Link to = '/schools/top'>Top School</Link>
        </nav>
    );
};

const mapStateToProps = ({schools, students}) => {
    return {
        schoolCount: schools.length,
        studentCount: students.length
    };
};
export default connect(mapStateToProps)(Nav);
