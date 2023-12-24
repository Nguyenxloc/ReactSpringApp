import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function AppNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar {...args} color="success">
                <NavbarBrand href="/">NEXTOP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Quản lý nhân viên
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  href="http://localhost:3000/employee">Nhân viên</DropdownItem>
                                <DropdownItem  href="http://localhost:3000/chucVu">Chức vụ</DropdownItem>
                                <DropdownItem  href="http://localhost:3000/cuaHang">Cửa hàng</DropdownItem>
                                <DropdownItem  href="http://localhost:3000/test">Test</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Quản lý sản phẩm
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  href="http://localhost:3000/sanPham">Sản phẩm</DropdownItem>
                                <DropdownItem  href="http://localhost:3000/chiTietSp">Chi tiết sản phẩm</DropdownItem>
                                <DropdownItem  href="http://localhost:3000/mauSac">Màu sắc</DropdownItem>
                                <DropdownItem  href="https://github.com/reactstrap/reactstrap">Dòng SP</DropdownItem>
                                <DropdownItem  href="https://github.com/reactstrap/reactstrap">NSX</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Quản lý 1
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  href="https://github.com/reactstrap/reactstrap">Option 1</DropdownItem>
                                <DropdownItem  href="https://github.com/reactstrap/reactstrap">Option 2</DropdownItem>
                                <DropdownItem  href="https://github.com/reactstrap/reactstrap">Option 3</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;