import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import Student from './Student';

//schools, students, location
class School extends Component{
    constructor(props){
        super(props);
        this.state = {
            school:{},
            enrolledStudents:[]
        }
        this.addStudent = this.addStudent.bind(this)
    }
    componentDidMount(){
        const {location, schools, students} = this.props
        const id = location.pathname.split('/')[2]
        const _school = schools.find(school => school.id === id)
        const _enrolledStudents = students.filter(student => student.schoolId === id)
        this.setState({school:_school, enrolledStudents:_enrolledStudents})
    }

    addStudent(id){
        const {enrolledStudents} = this.state
        const {students} = this.props
        const newStudent =  students.find(_student => _student.id === id)
        this.setState({enrolledStudents: [...enrolledStudents, newStudent]})
    }
    render(){
        const {school, enrolledStudents} = this.state
        const {students} = this.props
        const {addStudent} = this
        const count = enrolledStudents.length
        if(!school){return(<h1>Loading</h1>)}
        return(
            <div>
            <h1>{`${school.name}(${count} Student Enrolled)`}</h1>
            <select defaultValue='' onChange ={ev => addStudent(ev.target.value)}>
                <option value = ''>--Add Student--</option>
                {students.filter(student => student.schoolId !== school.id).map(student =>
                    <option key={student.id} value={student.id}>
                    {student.fullName}
                    </option>
                )}
            </select>
            <ul>
                {enrolledStudents.map(student=> <li key = {student.id}><Student student = {student}/></li>)}
            </ul>
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


export default connect(mapStateToProps)(School);
