import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppFooter from '../../AppFooter';
import {Link} from 'react-router-dom';

class SanPhamList extends Component {
    emptyItem = {
        ma: '',
        ten: '',
        link:'',
    };
    getAll(){
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/sanPham/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({sanPham: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    constructor(props) {
        super(props);
        this.state = {sanPham: [], item: this.emptyItem};
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

        await fetch('/sanPham/add', {
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
            fetch('http://localhost:8080/sanPham/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({sanPham: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    async remove(id) {
        let {item} = this.state;
        const {sanPham} = this.state;
        for (let i = 0; i < sanPham.length; i++) {
            if(sanPham[i].idSanPham===id){
                item= sanPham[i];
            }
        }
        console.log(item);
        console.log("click delete!");
        console.log(`/sanPham/${id}`);
        await fetch(`/sanPham/${id}`, {
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
        const {sanPham} = this.state;
        const {item} = this.state;
        const sanPhamList = sanPham.map(sanPham => {
            return <tr key={sanPham.idSanPham}>
                <td>1</td>
                <td>{sanPham.ma}</td>
                <td>{sanPham.ten}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link}
                                to={"/sanPham/" + sanPham.idSanPham}>Detail</Button>
                        {/*<Button size="sm" color="danger"*/}
                        {/*        onClick={() => this.remove(sanPham.idSanPham)}>Delete</Button>*/}
                    </ButtonGroup>
                </td>
            </tr>
        });
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Quản lý sản phẩm</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Row xs="4">
                            <Col className="bg">
                                <Label for="exampleMaNV">
                                    Mã sản phẩm
                                </Label>
                                <Input
                                    id="exampleMaNV"
                                    name="ma"
                                    placeholder="Mã sản phẩm"
                                    type="text"
                                    value={item.ma}
                                    onChange={this.handleChange}
                                    autoComplete="ma"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleTen">
                                    Tên chức vụ
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
                                <Label for="exampleLink">
                                    Link sản phẩm
                                </Label>
                                <Input
                                    id="exampleLink"
                                    name="link"
                                    placeholder="Link sản phẩm"
                                    type="text"
                                    value={item.link}
                                    onChange={this.handleChange}
                                    autoComplete="link"
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
                            <th width="10%">Mã sản phẩm</th>
                            <th width="10%">Tên sản phẩm</th>
                            <th width="10%">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sanPhamList}
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

export default SanPhamList;