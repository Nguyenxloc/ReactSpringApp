import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import AppNavbar from "../component/AppNavbar";
import AppFooter from "../component/AppFooter";

class Test extends Component {
    emptyItem = {
        ma: '',
        ten: '',
    };

    data = {
        ma: '',
        ten: '',
    };

    getAll() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/chucVu/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({chucVu: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }

    constructor(props) {
        super(props);
        this.state = {item: this.emptyItem, lstCom: []};
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
        console.log("name handlechange:" + name);
        console.log("value handlechange:" + value);
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.data.push({ma: "nv1", ten: "Nguyen Phuc Loc"});
        this.setState({lstCom: this.data});
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        this.data = [{ma: "nv1", ten: "Nguyen Phuc Loc"}, {ma: "nv1", ten: "Nguyen Phuc Loc"}];
        this.setState({lstCom: this.data});
    }

    async remove(id) {
        let {item} = this.state;
        const {chucVu} = this.state;
        for (let i = 0; i < chucVu.length; i++) {
            if (chucVu[i].idChucVu === id) {
                item = chucVu[i];
            }
        }
        console.log(item);
        console.log("click delete!");
        console.log(`/chucVu/${id}`);
        await fetch(`/chucVu/${id}`, {
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
        const {lstCom} = this.state;
        const lstItem = lstCom.map(item => {
            return <Col className="bg">
                <Input
                    key={item.ma}
                    id="exampleSanPham"
                    name="sp"
                    placeholder="Chọn sản phẩm"
                    type="text"
                    value={item.ten}
                    onChange={this.handleChange}
                    autoComplete="ma"
                >
                </Input>
                </Col>
                });
                return (
                <div>
                    <AppNavbar/>
                    <Container fluid>
                        <h3>Testing</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Row xs="4">
                                {lstItem}
                            </Row>
                            <FormGroup>
                                <Button color="primary" type="submit">Add</Button>{' '}
                            </FormGroup>
                        </Form>
                    </Container>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <AppFooter/>
                </div>
                );
                }
                }

                export default Test;