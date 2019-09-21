import React from 'react';
import ReactDOM from 'react-dom';

const {Component} = React;

class App extends Component{
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));