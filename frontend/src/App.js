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
import sanPhamList from "./SanPhamMng/SanPham/SanPhamList";
import sanPhamEdit from "./SanPhamMng/SanPham/SanPhamEdit";
import chiTietSPList from "./SanPhamMng/ChiTietSP/ChiTietSPList";
import chiTietSPEdit from "./SanPhamMng/ChiTietSP/ChiTietSPEdit";
import Test from "./testing/test";
import DetailProductView from "./Views/DetailProductView";
import DetailProductRelatedView from "./Views/DetailProductRelatedView";
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
                    <Route path='/sanPham' exact={true} component={sanPhamList}/>
                    <Route path='/sanPham/:id' exact={true} component={sanPhamEdit}/>
                    <Route path='/chiTietSp' exact={true} component={chiTietSPList}/>
                    <Route path='/chiTietSp/:id' exact={true} component={chiTietSPEdit}/>
                    <Route path='/test' exact={true} component={Test}/>
                    <Route path='/detail-product/:id' exact={true} component={DetailProductView}/>
                    <Route path='/detail-product-related/:id' exact={true} component={DetailProductRelatedView}/>
                </Switch>
            </Router>
        )
    }
}
export default App;