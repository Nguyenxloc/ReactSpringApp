import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import NavbarComOld from '../../component/NavbarComOld';
import FooterCom from '../../component/FooterCom';
import {Link} from 'react-router-dom';

class EmployeeList extends Component {
    emptyItem = {
        ma: '',
        ten: '',
        tenDem: '',
        ho: '',
        gioiTinh: '',
        ngaySinh: '',
        diaChi: '',
        sdt: '',
        trangThai: '',
    };
    getAll(){
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/employee/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({employee: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    constructor(props) {
        super(props);
        this.state = {employee: [], item: this.emptyItem};
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log("name handlechange:"+name);
        console.log("value handlechange:"+value);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/employee/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.setState(this.getAll());
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/employee/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({employee: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    async remove(id) {
        let {item} = this.state;
        const {employee} = this.state;
        for (let i = 0; i < employee.length; i++) {
            if(employee[i].idNhanVien===id){
                item= employee[i];
            }
        }
        console.log(item);
        console.log("click delete!");
        console.log(`/employee/${id}`);
        await fetch(`/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        this.setState(this.getAll());
    }

    render() {
        const {employee} = this.state;
        const {item} = this.state;
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
                                to={"/employee/" + employee.idNhanVien}>Detail</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.remove(employee.idNhanVien)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <NavbarComOld/>
                <Container fluid>
                    <h3>Quản lý nhân viên</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Row xs="4">
                            <Col className="bg">
                                <Label for="exampleMaNV">
                                    Mã NV
                                </Label>
                                <Input
                                    id="exampleMaNV"
                                    name="ma"
                                    placeholder="Mã NV"
                                    type="text"
                                    value={item.ma}
                                    onChange={this.handleChange}
                                    autoComplete="ma"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleTen">
                                    Tên
                                </Label>
                                <Input
                                    id="exampleTen"
                                    name="ten"
                                    placeholder="Tên"
                                    type="text"
                                    value={item.ten}
                                    onChange={this.handleChange}
                                    autoComplete="ten"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleTenDem">
                                    Tên đệm
                                </Label>
                                <Input
                                    id="exampleTen"
                                    name="tenDem"
                                    placeholder="Tên đệm"
                                    type="text"
                                    value={item.tenDem}
                                    onChange={this.handleChange}
                                    autoComplete="tenDem"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleHo">
                                    Họ
                                </Label>
                                <Input
                                    id="exampleHo"
                                    name="ho"
                                    placeholder="Họ"
                                    type="text"
                                    value={item.ho}
                                    onChange={this.handleChange}
                                    autoComplete="ho"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleEmail">
                                    Giới tính
                                </Label>
                                <Input
                                    id="exampleGioiTinh"
                                    name="gioiTinh"
                                    placeholder="Giới tính"
                                    type="text"
                                    value={item.gioiTinh}
                                    onChange={this.handleChange}
                                    autoComplete="gioiTinh"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleNgaySinh">
                                    Ngày sinh
                                </Label>
                                <Input
                                    id="exampleNgaySinh"
                                    name="ngaySinh"
                                    placeholder="Ngày sinh"
                                    type="date"
                                    value={item.ngaySinh}
                                    onChange={this.handleChange}
                                    autoComplete="ngaySinh"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleDiaChi">
                                    Địa chỉ
                                </Label>
                                <Input
                                    id="exampleDiaChi"
                                    name="diaChi"
                                    placeholder="Địa chỉ"
                                    type="text"
                                    value={item.diaChi}
                                    onChange={this.handleChange}
                                    autoComplete="diaChi"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleSdt">
                                    Sđt
                                </Label>
                                <Input
                                    id="exampleSdt"
                                    name="sdt"
                                    placeholder="Sđt"
                                    type="text"
                                    value={item.sdt}
                                    onChange={this.handleChange}
                                    autoComplete="sdt"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleTrangThai">
                                    Trạng thái
                                </Label>
                                <Input
                                    id="exampleTrangThai"
                                    name="trangThai"
                                    placeholder="Trạng thái"
                                    type="number"
                                    value={item.trangThai}
                                    onChange={this.handleChange}
                                    autoComplete="trangThai"
                                />
                            </Col>
                        </Row>
                        <FormGroup>
                            <Button color="primary" type="submit">Add</Button>{' '}
                        </FormGroup>
                    </Form>
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
                <FooterCom/>
            </div>
        );
    }
}

export default EmployeeList;