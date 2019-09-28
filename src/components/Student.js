import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';


class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            enrolledSchoolId: props.student.schoolId
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(ev){
        const newSchoolId = ev.target.value
        const newStudent = {...this.props.student, enrolledSchoolId: newSchoolId}
        this.props.updateStudent(newStudent)
        .then(() => this.setState({enrolledSchoolId: newSchoolId}))
        .catch( ex => this.setState({ error: ex.response.data.message }))
    }
    render(){
        const {student, schools, destroyStudent, updateStudent} = this.props
        const {enrolledSchoolId} = this.state
        const {onChange} = this

        const findSchool = (id, schools) => {
            return schools.find(school => school.id === id)
        }
        return(
            <div className = 'student'>
                <h3>{student.fullName}</h3>
                { enrolledSchoolId? (<img className = 'school-bg' src={findSchool(enrolledSchoolId, schools).imgURL} ></img>) : (<div>No schoolId</div>)}
                <p>{student.GPA}</p>
                <select onChange = {ev => onChange(ev)} defaultValue = {enrolledSchoolId}>
                    <option value=''>--Not Enrolled--</option>
                    {schools.map(school =>
                        <option
                        key = {school.id}
                        value = {school.id}>
                            {school.name}
                        </option>
                        )}
                </select>
                <button onClick = {() => destroyStudent(student)}>Delete</button>
            </div>
        )
    }

};

const mapStateToProps = ({ schools, students})=> {
    return {
        schools,
        students
    };
};

const mapDispatchToProp = (dispatch) => {
    return{
        destroyStudent: (student) => dispatch(actions.destroyStudent(student)),
        updateStudent: (student) => dispatch(actions.updateStudent(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Student);
