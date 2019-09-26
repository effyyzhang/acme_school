import { SET_SCHOOLS, SET_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DESTROY_STUDENT, SET_ERROR} from './constants';
import axios from 'axios';

const setSchools = (schools) => {
    return{
        schools,
        type: SET_SCHOOLS
    }
}

const setStudents = (students) => {
    return{
        students,
        type: SET_STUDENTS
    }
}

const _createStudent = (student) => {
    return{
        student,
        type: CREATE_STUDENT
    }
}

const _updateStudent = (student) => {
    return{
        student,
        type: UPDATE_STUDENT
    }
}

const _destroyStudent = (student) => {
    return{
        student,
        type: DESTROY_STUDENT
    }
}

const createStudent = (student) => {
    console.log(student)
    return async dispatch => {
        const response = (await axios.post(`/api/students/`, student)).data;
        console.log('posted')
        return dispatch(_createStudent(response))
    }
}

const fetchSchools = () => {
    return async(dispatch) => {
        const schools = (await axios.get('/api/schools')).data;
        return dispatch(setSchools(schools));
    }
}

const fetchStudents = () => {
    return async(dispatch) => {
        const students = (await axios.get('/api/students')).data;
        return dispatch(setStudents(students));
    }
}



export {fetchSchools, fetchStudents, createStudent};
