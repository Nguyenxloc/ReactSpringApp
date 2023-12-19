import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import AppNavbar from '../../AppNavbar';
import AppFooter from '../../AppFooter';
import {Link} from 'react-router-dom';

class ChucVuList extends Component {
    emptyItem = {
        ma: '',
        ten: '',
    };
    getAll(){
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
        this.state = {chucVu: [], item: this.emptyItem};
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

        await fetch('/chucVu/add', {
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
            fetch('http://localhost:8080/chucVu/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({chucVu: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }
    async remove(id) {
        let {item} = this.state;
        const {chucVu} = this.state;
        for (let i = 0; i < chucVu.length; i++) {
            if(chucVu[i].idChucVu===id){
                item= chucVu[i];
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
        const {chucVu} = this.state;
        const {item} = this.state;
        const chucVuList = chucVu.map(chucVu => {
            return <tr key={chucVu.idChucVu}>
                <td>1</td>
                <td>{chucVu.ma}</td>
                <td>{chucVu.ten}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link}
                                to={"/chucVu/" + chucVu.idChucVu}>Detail</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.remove(chucVu.idChucVu)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Quản lý chức vụ</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Row xs="4">
                            <Col className="bg">
                                <Label for="exampleMaNV">
                                    Mã chức vụ
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
                        </Row>
                        <FormGroup>
                            <Button color="primary" type="submit">Add</Button>{' '}
                        </FormGroup>
                    </Form>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">Stt</th>
                            <th width="5%">Mã chức vụ</th>
                            <th width="10%">Tên chức vụ</th>
                            <th width="10%">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {chucVuList}
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

export default ChucVuList;