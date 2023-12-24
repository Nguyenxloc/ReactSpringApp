import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import AppNavbar from '../../AppNavbar';

class ChiTietSPEdit extends Component {
    emptyItem = {
        sp: '',
        nsx: '',
        mauSac: '',
        dongSP: '',
        namBH: '',
        mota: '',
        soLuongTon: '',
        giaNhap: '',
        giaBan: '',
        link1:'',
        link2:'',
        link3:'',
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
        this.state = {item: this.emptyItem,lstSanPham: [], lstNsx: [],lstMauSac: [],lstDongSP: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };

        if (this.props.match.params.id !== 'new') {
            const chiTietSPView = await (await fetch(`/sanPham/chiTietSPView/${this.props.match.params.id}`)).json();
            this.setState({item: chiTietSPView});
        }

        try {
            fetch('http://localhost:8080/sanPham/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstSanPham: data}));
        } catch (err) {
            console.log(err.toString())
        }

        try {
            fetch('http://localhost:8080/sanPham/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstSanPham: data}));
        } catch (err) {
            console.log(err.toString())
        }

        try {
            fetch('http://localhost:8080/sanPham/nsx/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstNsx: data}));
        } catch (err) {
            console.log(err.toString())
        }

        try {
            fetch('http://localhost:8080/sanPham/mauSac/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstMauSac: data}));
        } catch (err) {
            console.log(err.toString())
        }

        try {
            fetch('http://localhost:8080/sanPham/dongSP/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstDongSP: data}));
        } catch (err) {
            console.log(err.toString())
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
        await fetch('/sanPham/chiTietSP' + ('/' + item.idChiTietSP), {
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
        const {lstSanPham} =this.state;
        const {lstNsx} = this.state;
        const {lstMauSac} = this.state;
        const {lstDongSP} = this.state;
        const title = <h2>{'Chỉnh sửa sản phẩm'}</h2>;
        const sanPhamList = lstSanPham.map(lstSanPham => {
            return <option key={lstSanPham.idSanPham} value={lstSanPham.idSanPham}>
                {lstSanPham.ma}-{lstSanPham.ten}
                   </option>
        });

        const nsxList = lstNsx.map(lstNsx => {
            return <option key={lstNsx.idNSX} value={lstNsx.idNSX} >
                {lstNsx.ma}-{lstNsx.ten}
            </option>
        });

        const mauSacList = lstMauSac.map(lstMauSac => {
            return <option key={lstMauSac.idMauSac} value={lstMauSac.idMauSac}>
                {lstMauSac.ma}-{lstMauSac.ten}
            </option>
        });

        const dongSPList = lstDongSP.map(lstDongSP => {
            return <option key={lstDongSP.idDongSP} value={lstDongSP.idDongSP}>
                {lstDongSP.ma}-{lstDongSP.ten}
            </option>
        });
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Row xs="3">
                        <Col className="bg">
                            <Label for="exampleSanPham">
                                Hình ảnh 1
                            </Label>
                            <br/>
                            <img src={item.link1} width={300} height={200}></img>
                            <br/>
                            <br/>
                            <Input
                                id="exampleGiaBan"
                                name="link1"
                                placeholder="Link ảnh 1"
                                type="text"
                                value={item.link1}
                                onChange={this.handleChange}
                                autoComplete="giaBan"
                            />
                        </Col>
                        <Col className="bg">
                            <Label for="exampleSanPham">
                                Hình ảnh 2
                            </Label>
                            <br/>
                            <img src={item.link2} width={300} height={200}></img>
                            <br/>
                            <br/>
                            <Input
                                id="exampleGiaBan"
                                name="link2"
                                placeholder="Link ảnh 2"
                                type="text"
                                value={item.link2}
                                onChange={this.handleChange}
                                autoComplete="giaBan"
                            />
                        </Col>
                        <Col className="bg">
                            <Label for="exampleSanPham">
                                Hình ảnh 3
                            </Label>
                            <br/>
                            <img src={item.link3} width={300} height={200}></img>
                            <br/>
                            <br/>
                            <Input
                                id="exampleGiaBan"
                                name="link3"
                                placeholder="Link ảnh 3"
                                type="text"
                                value={item.link3}
                                onChange={this.handleChange}
                                autoComplete="giaBan"
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row xs="4">
                        <Col className="bg">
                            <Label for="exampleSanPham">
                                Sản phẩm
                            </Label>
                            <Input
                                id="exampleSanPham"
                                name="sp"
                                placeholder="Chọn sản phẩm"
                                type="select"
                                value={item.sp}
                                onChange={this.handleChange}
                                autoComplete="ma"
                            >
                                {sanPhamList}
                            </Input>
                        </Col>

                        <Col className="bg">
                            <Label for="exampleMaNV">
                                NSX
                            </Label>
                            <Input
                                id="exampleNSX"
                                name="nsx"
                                placeholder="NSX"
                                type="select"
                                value={item.nsx}
                                onChange={this.handleChange}
                                autoComplete="ma"
                            >
                                {nsxList}
                            </Input>
                        </Col>

                        <Col className="bg">
                            <Label for="exampleMauSac">
                                Màu sắc
                            </Label>
                            <Input
                                id="exampleMauSac"
                                name="mauSac"
                                placeholder="MauSac"
                                type="select"
                                value={item.mauSac}
                                onChange={this.handleChange}
                                autoComplete="mauSac"
                            >
                                {mauSacList}
                            </Input>
                        </Col>

                        <Col className="bg">
                            <Label for="exampleMauSac">
                                Dòng sản phẩm
                            </Label>
                            <Input
                                id="exampleDongSP"
                                name="dongSP"
                                placeholder="Dòng sản phẩm"
                                type="select"
                                value={item.dongSP}
                                onChange={this.handleChange}
                                autoComplete="dongSP"
                            >
                                {dongSPList}
                            </Input>
                        </Col>

                        <Col className="bg">
                            <Label for="exampleNamBH">
                                Năm bảo hành
                            </Label>
                            <Input
                                id="exampleNamBH"
                                name="namBH"
                                placeholder="Năm bảo hành"
                                type="number"
                                value={item.namBH}
                                onChange={this.handleChange}
                                autoComplete="namBH"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleHo">
                                Mô tả
                            </Label>
                            <Input
                                id="exampleMoTa"
                                name="mota"
                                placeholder="Mô tả"
                                type="text"
                                value={item.mota}
                                onChange={this.handleChange}
                                autoComplete="moTa"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleNamBH">
                                Số lượng tồn
                            </Label>
                            <Input
                                id="exampleSoLuongTon"
                                name="soLuongTon"
                                placeholder="Số lượng tồn"
                                type="number"
                                value={item.soLuongTon}
                                onChange={this.handleChange}
                                autoComplete="soLuongTon"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleNamBH">
                                Giá nhập
                            </Label>
                            <Input
                                id="exampleGiaNhap"
                                name="giaNhap"
                                placeholder="Giá nhập"
                                type="number"
                                value={item.giaNhap}
                                onChange={this.handleChange}
                                autoComplete="giaNhap"
                            />
                        </Col>

                        <Col className="bg">
                            <Label for="exampleGiaBan">
                                Giá bán
                            </Label>
                            <Input
                                id="exampleGiaBan"
                                name="giaBan"
                                placeholder="Giá bán"
                                type="number"
                                value={item.giaBan}
                                onChange={this.handleChange}
                                autoComplete="giaBan"
                            />
                        </Col>

                    </Row>
                    <br/>
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