import { combineReducers } from 'redux';
import { SET_SCHOOLS, SET_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DESTROY_STUDENT, SET_ERROR} from './constants';

const schoolReducer = (state = [], action) => {
    switch (action.type) {
        case SET_SCHOOLS:
            return action.schools;
        default:
            return state;
    }
}

const studentReducer = (state = [], action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students;

        case CREATE_STUDENT:
            return [...state, action.student];

        case UPDATE_STUDENT:
            return state.map(student => (student.id === action.student.id)? action.student : student);

        case DESTROY_STUDENT:
            return state.filter(student => student.id !== action.student.id)
        default:
            return state;
    }
}

const reducer = combineReducers({
    schools: schoolReducer,
    students: studentReducer
})

export default reducer;
