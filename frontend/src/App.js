import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeEdit from "./EmployeeMng/Employee/EmployeeEdit";
import EmployeeList from "./EmployeeMng/Employee/EmployeeList";
import ChucVuList from "./EmployeeMng/ChucVu/ChucVuList";
import ChucVuEdit from "./EmployeeMng/ChucVu/ChucVuEdit";
import cuaHangList from "./EmployeeMng/CuaHang/CuaHangList";
import cuaHangEdit from "./EmployeeMng/CuaHang/CuaHangEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/employee' exact={true} component={EmployeeList}/>
                    <Route path='/employee/:id' component={EmployeeEdit}/>
                    <Route path='/chucVu' exact={true} component={ChucVuList}/>
                    <Route path='/chucVu/:id' exact={true} component={ChucVuEdit}/>
                    <Route path='/cuaHang' exact={true} component={cuaHangList}/>
                    <Route path='/cuaHang/:id' exact={true} component={cuaHangEdit}/>
                </Switch>
            </Router>
        )
    }
}

export default App;