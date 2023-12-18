import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../AppNavbar';

class EmployeeEdit extends Component {

    emptyItem = {
        maNVInp: '',
        tenInp: '',
        tenDemInp: '',
        hoInp: '',
        gioiTinhInp: '',
        ngaySinhInp: '',
        diaChiInp: '',
        sdtInp: '',
        trangThaiInp: '',
    };

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
            <AppNavbar/>
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
                                name="maNVInp"
                                placeholder="Mã NV"
                                type="text"
                                value={item.ma}
                                onChange={this.handleChange}
                                autoComplete="maNVInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleTen">
                                Tên
                            </Label>
                            <Input
                                id="exampleTen"
                                name="tenInp"
                                placeholder="Tên"
                                type="text"
                                value={item.ten}
                                onChange={this.handleChange}
                                autoComplete="tenInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleTenDem">
                                Tên đệm
                            </Label>
                            <Input
                                id="exampleTen"
                                name="tenDemInp"
                                placeholder="Tên đệm"
                                type="text"
                                value={item.tenDem}
                                onChange={this.handleChange}
                                autoComplete="tenDemInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleHo">
                                Họ
                            </Label>
                            <Input
                                id="exampleHo"
                                name="hoInp"
                                placeholder="Họ"
                                type="text"
                                value={item.ho}
                                onChange={this.handleChange}
                                autoComplete="hoInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleEmail">
                                Giới tính
                            </Label>
                            <Input
                                id="exampleGioiTinh"
                                name="gioiTinhInp"
                                placeholder="Giới tính"
                                type="text"
                                value={item.gioiTinh}
                                onChange={this.handleChange}
                                autoComplete="gioiTinhInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleNgaySinh">
                                Ngày sinh
                            </Label>
                            <Input
                                id="exampleNgaySinh"
                                name="ngaySinhInp"
                                placeholder="Ngày sinh"
                                type="date"
                                value={item.ngaySinh}
                                onChange={this.handleChange}
                                autoComplete="ngaySinhInp"
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
                                autoComplete="diaChiInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleSdt">
                                Sđt
                            </Label>
                            <Input
                                id="exampleSdt"
                                name="sdtInp"
                                placeholder="Sđt"
                                type="text"
                                value={item.sdt}
                                onChange={this.handleChange}
                                autoComplete="sdtInp"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleTrangThai">
                                Trạng thái
                            </Label>
                            <Input
                                id="exampleTrangThai"
                                name="trangThaiInp"
                                placeholder="Trạng thái"
                                type="number"
                                value={item.trangThai}
                                onChange={this.handleChange}
                                autoComplete="trangThaiInp"
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