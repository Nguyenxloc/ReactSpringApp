import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import AppNavbar from '../../component/AppNavbar';
import AppFooter from '../../component/AppFooter';
import {Link} from 'react-router-dom';

class CuaHangList extends Component {
    emptyItem = {
        ma: '',
        ten: '',
        diaChi:'',
        thanhPho:'',
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
        this.state = {cuaHang: [], item: this.emptyItem};
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

        await fetch('/cuaHang/add', {
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
            fetch('http://localhost:8080/cuaHang/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({cuaHang: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    async remove(id) {
        let {item} = this.state;
        const {cuaHang} = this.state;
        for (let i = 0; i < cuaHang.length; i++) {
            if(cuaHang[i].idCuaHang===id){
                item= cuaHang[i];
            }
        }
        console.log(item);
        console.log("click delete!");
        console.log(`/cuaHang/${id}`);
        await fetch(`/cuaHang/${id}`, {
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
        const {cuaHang} = this.state;
        const {item} = this.state;
        const cuaHangList = cuaHang.map(cuaHang => {
            return <tr key={cuaHang.idCuaHang}>
                <td>1</td>
                <td>{cuaHang.ma}</td>
                <td>{cuaHang.ten}</td>
                <td>{cuaHang.diaChi}</td>
                <td>{cuaHang.thanhPho}</td>
                <td>{cuaHang.quocGia}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link}
                                to={"/cuaHang/" + cuaHang.idCuaHang}>Detail</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.remove(cuaHang.idCuaHang)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Quản lý cửa hàng</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Row xs="4">
                            <Col className="bg">
                                <Label for="exampleMa">
                                    Mã NV
                                </Label>
                                <Input
                                    id="exampleMa"
                                    name="ma"
                                    placeholder="Mã cửa hàng"
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
                            <Button color="primary" type="submit">Add</Button>{' '}
                        </FormGroup>
                    </Form>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">Stt</th>
                            <th width="10%">Mã cửa hàng</th>
                            <th width="10%">Tên</th>
                            <th width="10%">Địa chỉ</th>
                            <th width="10%">Thành phố</th>
                            <th width="10%">Quốc gia</th>
                            <th width="10%">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cuaHangList}
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

export default CuaHangList;