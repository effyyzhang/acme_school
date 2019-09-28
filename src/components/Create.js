import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

class Create extends Component{
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            gpa:'',
            enrollment:'',
            error:''
        }
        this.create = this.create.bind(this);

    }
    create(ev){
        const{firstName, lastName, email, gpa, enrollment} = this.state
        this.props.createStudent({
            firstName: firstName,
            lastName: lastName,
            email: email,
            GPA: gpa,
            schoolId: enrollment
        })
        .then(() => {
            this.setState({
                firstName: '',
                lastName:'',
                email:'',
                gpa:'',
                enrollment:'',
                error:''
            })
            this.props.history.push('/students')
        })
        .catch( ex => this.setState({ error: ex.response.data.message }))

    }
    render(){
        const{error} = this.state;
        const {create} = this;
        const{schools} = this.props;
        return(
            <div>
                <div>{error && <h6 className='error'>{error}</h6>}</div>
                <form className ='create' >
                    <label>First Name
                    <input id ='firstName' onChange = {(ev) => this.setState({firstName: ev.target.value})}></input>
                    </label>
                    <label>Last Name
                    <input id ='lastName' onChange = {(ev) => this.setState({lastName: ev.target.value})}></input>
                    </label>
                    <label>Email
                    <input id ='email' onChange = {(ev) => this.setState({email: ev.target.value})}></input>
                    </label>
                    <label>GPA
                    <input id ='gpa' onChange = {(ev) => this.setState({gpa: ev.target.value})}></input>
                    </label>
                    <label>Enrolled At
                    <select id ='enrollment' onChange = {(ev) => this.setState({enrollment: ev.target.value})} >
                        <option value=''>--Select School--</option>
                        { schools.map(school => <option key={school.id} value = {school.id} > {school.name} </option> ) }
                    </select>
                    </label>
                    <button onClick = {create}>Create</button>
                </form>
            </div>
        )

    }
};

const mapStateToProps = ({schools})=> {
    return {
        schools
    };
  };

const mapDispatchToProp = (dispatch) => {
    return{
        createStudent: (student) => dispatch(actions.createStudent(student))
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Create);
