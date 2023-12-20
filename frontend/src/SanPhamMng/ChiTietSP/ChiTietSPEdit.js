import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../../AppNavbar';

class ChiTietSPEdit extends Component {

    emptyItem = {
        idSanPham: '',
        idNsx: '',
        idMauSac: '',
        idDongSP: '',
        namBH: '',
        moTa: '',
        soLuongTon: '',
        giaNhap: '',
        giaBan: '',
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
            fetch('http://localhost:8080/chiTietSP/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({chiTietSP: data}));
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
            const chiTietSP = await (await fetch(`/chiTietSP/${this.props.match.params.id}`)).json();
            this.setState({item: chiTietSP});
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
        await fetch('/chiTietSP' + ('/' + item.id), {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/chiTietSP');
    }

    render() {
        const {item} = this.state;
        const{lstNsx} = this.state;
        const title = <h2>{'Chỉnh sửa sản phẩm'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Row xs="4">
                        <Col className="bg">
                            <Label for="exampleMaNV">
                            NSX
                            </Label>
                            <Input
                                id="exampleNSX"
                                name="NSX"
                                placeholder="NSX"
                                type="select"
                                value={item.nsx}
                                onChange={this.handleChange}
                                autoComplete="ma"
                            >
                                <option>
                                    {lstNsx.ma}
                                </option>
                            </Input>

                        </Col>

                        <Col className="bg">
                            <Label for="exampleTen">
                                Màu sắc
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
                                Dòng SP
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
                                Năm BH
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
                                Mô tả
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
                                Số lượng tồn
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
                                Giá Nhập
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
                                Giá bán
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
                    </Row>
                    <FormGroup>
                        <Button color="primary" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/chiTietSP">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(ChiTietSPEdit);