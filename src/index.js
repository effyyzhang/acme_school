import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import Schools from './components/Schools';
import Students from './components/Students';
import Home from './components/Home';

const {Component} = React;

class App extends Component{
    render(){
        return(
            <HashRouter>
                <Route render={({location}) => <Nav path={location.pathname}/>} />
                <Switch>
                    <Route path='/schools' render = {() => <Schools/>}/>
                    <Route path='/students' render = {() => <Students/>}/>
                    <Route exact path='/' render = {() => <Home/>}/>
                    <Redirect to ='/' />
                </Switch>
            </HashRouter>

        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
