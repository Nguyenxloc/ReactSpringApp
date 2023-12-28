import React, { useState } from 'react';
import {
    Nav,
    Button, Input,
} from 'reactstrap';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Nav className="navbar navbar-expand-lg " data-bs-theme="dark" style={{background:"darkred"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LeatherCraft</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#1">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    QL Nhân viên
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="http://localhost:3000/employee">Nhân viên</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/chucVu">Chức vụ</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/cuaHang">Cửa hàng</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/test">Test</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    QL Sản phẩm
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="http://localhost:3000/sanPham">Sản phẩm</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/dongSP">Dòng SP</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/nsx">NSX</a></li>
                                    <li><a className="dropdown-item" href= "http://localhost:3000/chiTietSp">Chi tiết sản phẩm</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Input className="form-control me-2 bg-white" type="search" placeholder="Search" aria-label="Search"/>
                            <button type="button" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </Nav>
        </div>
    );
}

export default NavBar;