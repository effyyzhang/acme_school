import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import{ actions } from './store';
import{ connect } from 'react-redux';

import Nav from './Components/Nav';
import Schools from './Components/Schools';
import Students from './Components/Students';
import Home from './Components/Home';
import School from './Components/School';
import Create from './Components/Create';


class App extends Component{
    componentDidMount(){
        this.props.fetchSchools();
        this.props.fetchStudents();
    }
    render(){
        return(
            <HashRouter>
                <Route component={Nav} />
                <Route component={Create} />
                <Switch>
                    <Route path='/schools' exact component={Schools} />
                    <Route path='/students' exact component={Students} />
                    <Route path='/schools/:id'component={School} />
                    <Route exact path='/' exact component={Home} />
                    <Redirect to ='/' />
                </Switch>
            </HashRouter>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSchools: ()=> dispatch(actions.fetchSchools()),
        fetchStudents: ()=> dispatch(actions.fetchStudents())
    };
};


export default connect(null, mapDispatchToProps)(App);
