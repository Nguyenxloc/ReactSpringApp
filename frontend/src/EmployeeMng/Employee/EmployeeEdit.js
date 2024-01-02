import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NavbarComOld from '../../component/NavbarComOld';

class EmployeeEdit extends Component {

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
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const employee = await (await fetch(`/employee/${this.props.match.params.id}`)).json();
            this.setState({item: employee});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        await fetch('/employee' + ('/' + item.id), {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/employee');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Edit Employee'}</h2>;
        return <div>
            <NavbarComOld/>
            <Container>
                {title}
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
                                id="exampleTenDem"
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
                            <Label for="exampleGioiTinh">
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
                                name="diaChiInp"
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
                        <Button color="primary" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/employee">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(EmployeeEdit);