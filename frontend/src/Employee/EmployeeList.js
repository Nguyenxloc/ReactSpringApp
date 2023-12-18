import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Container, Input, Label, Row, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import AppFooter from '../AppFooter';
import {Link} from 'react-router-dom';

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        console.log(requestOptions);
        try {
            fetch('http://localhost:8080/employee/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({employee: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }

    async remove(id) {
        await fetch(`/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmployee = [...this.state.employee].filter(i => i.id !== id);
            this.setState({employee: updatedEmployee});
        });
    }

    render() {
        const {employee} = this.state;
        const employeeList = employee.map(employee => {
            return <tr key={employee.idNhanVien}>
                <td>1</td>
                <td>{employee.ma}</td>
                <td>{employee.ho} {employee.tenDem} {employee.ten}</td>
                <td>{employee.gioiTinh}</td>
                <td>{employee.ngaySinh}</td>
                <td>{employee.diaChi}</td>
                <td>{employee.sdt}</td>
                <td>{employee.trangThai}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link}
                                to={"/employee/" + employee.idNhanVien}>Edit</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.remove(employee.idNhanVien)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Quản lý nhân viên</h3>
                    <div className="float-right">
                        <Row xs="4">
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </Col>
                        </Row>
                        <Button color="primary" tag={Link} to="/employee/new">Add employee</Button>
                    </div>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">Stt</th>
                            <th width="5%">Mã NV</th>
                            <th width="10%">Tên</th>
                            <th width="10%">Giới tính</th>
                            <th width="10%">Ngày sinh</th>
                            <th width="10%">Địa chỉ</th>
                            <th width="10%">Số điện thoại</th>
                            <th width="10%">Trạng thái</th>
                            <th width="10%">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employeeList}
                        </tbody>
                    </Table>
                </Container>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <AppFooter/>
            </div>
        );
    }
}

export default EmployeeList;