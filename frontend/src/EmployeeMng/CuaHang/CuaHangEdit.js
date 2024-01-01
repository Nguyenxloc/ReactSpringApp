import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../../component/AppNavbar';

class CuaHangEdit extends Component {

    emptyItem = {
        ma: '',
        ten: '',
        diaChi: '',
        thanhPho: '',
        quocGia:'',
    };

    getAll(){
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/cuaHang/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({cuaHang: data}));
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
            const cuaHang = await (await fetch(`/cuaHang/${this.props.match.params.id}`)).json();
            this.setState({item: cuaHang});
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
        await fetch('/cuaHang' + ('/' + item.id), {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/cuaHang');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Chỉnh sửa cửa hàng'}</h2>;
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Row xs="4">
                        <Col className="bg">
                            <Label for="exampleMa">
                                Mã NV
                            </Label>
                            <Input
                                id="exampleMa"
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
                            <Label for="exampleDiaChi">
                                Thành phố
                            </Label>
                            <Input
                                id="examplethanhPho"
                                name="thanhPho"
                                placeholder="Thành phố"
                                type="text"
                                value={item.thanhPho}
                                onChange={this.handleChange}
                                autoComplete="thanhPho"
                            />
                        </Col>
                        <Col className="bg">
                            <Label for="exampleDiaChi">
                                Quốc gia
                            </Label>
                            <Input
                                id="exampleQuocGia"
                                name="quocGia"
                                placeholder="Quốc gia"
                                type="text"
                                value={item.quocGia}
                                onChange={this.handleChange}
                                autoComplete="quocGia"
                            />
                        </Col>
                    </Row>
                    <FormGroup>
                        <Button color="primary" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/cuaHang">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(CuaHangEdit);