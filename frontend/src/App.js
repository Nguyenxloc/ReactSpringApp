import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeEdit from "./Employee/EmployeeEdit";
import EmployeeList from "./Employee/EmployeeList";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/employee' exact={true} component={EmployeeList}/>
            <Route path='/employee/:id' component={EmployeeEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;