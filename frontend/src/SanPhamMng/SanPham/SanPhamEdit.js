import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../../AppNavbar';

class SanPhamEdit extends Component {

    emptyItem = {
        ma: '',
        ten: '',
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
            const sanPham = await (await fetch(`/sanPham/${this.props.match.params.id}`)).json();
            this.setState({item: sanPham});
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
        await fetch('/sanPham' + ('/' + item.id), {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/sanPham');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{'Chỉnh sửa sản phẩm'}</h2>;
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Row xs="1">
                        <Col className="bg">
                            <img
                                alt="CoverProduct"
                                src={item.link}
                                width="200px"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleMaNV">
                                Mã sản phẩm
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
                        <Button color="primary" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/sanPham">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(SanPhamEdit);