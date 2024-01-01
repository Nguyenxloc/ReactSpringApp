import React, {Component, useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Table} from 'reactstrap';
import AppNavbar from '../../component/AppNavbar';
import AppFooter from '../../component/AppFooter';
import {Link} from 'react-router-dom';

class ChiTietSPList extends Component {
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

    getAll() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            fetch('http://localhost:8080/sanPham/chiTietSP/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstChiTietSP: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }

    constructor(props) {
        super(props);
        this.state = {item: this.emptyItem,lstChiTietSP:[],lstSanPham: [], lstNsx: [],lstMauSac: [],lstDongSP: []};
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
        const {item} = this.state;

        await fetch('/sanPham/chiTietSP/add', {
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
            fetch('http://localhost:8080/sanPham/chiTietSP/getAll', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstChiTietSP: data}));
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

    async remove(id) {
        let {item} = this.state;
        const {employee} = this.state;
        for (let i = 0; i < employee.length; i++) {
            if (employee[i].idNhanVien === id) {
                item = employee[i];
            }
        }
        console.log(item);
        console.log("click delete!");
        console.log(`/employee/${id}`);
        await fetch(`/employee/${id}`, {
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
        const {item} = this.state;
        const {lstSanPham} =this.state;
        const {lstNsx} = this.state;
        const {lstMauSac} = this.state;
        const {lstDongSP} = this.state;
        const {lstChiTietSP} = this.state;
        const chiTietSPList = lstChiTietSP.map(lstChiTietSP => {
            return <tr key={lstChiTietSP.idChiTietSP}>
                <td>1</td>
                <td>{lstChiTietSP.sp.ten} {lstChiTietSP.sp.ma}</td>
                <td>{lstChiTietSP.nsx.ma}-{lstChiTietSP.nsx.ten}</td>
                <td>{lstChiTietSP.mauSac.ma}-{lstChiTietSP.mauSac.ten}</td>
                <td>{lstChiTietSP.dongSP.ma}-{lstChiTietSP.dongSP.ten}</td>
                <td>{lstChiTietSP.namBH}-{lstChiTietSP.dongSP.ten}</td>
                <td>{lstChiTietSP.mota}</td>
                <td>{lstChiTietSP.soLuongTon}</td>
                <td>{lstChiTietSP.giaNhap}</td>
                <td>{lstChiTietSP.giaBan}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link}
                                to={"/chiTietSP/" + lstChiTietSP.idChiTietSP}>Detail</Button>
                        <Button size="sm" color="danger"
                                onClick={() => this.remove(lstChiTietSP.idChiTietSP)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        const sanPhamList = lstSanPham.map(lstSanPham => {
            return <option key={lstSanPham.idSanPham} value={lstSanPham.idSanPham}>
                {lstSanPham.ma}-{lstSanPham.ten}
                   </option>
        });

        const nsxList = lstNsx.map(lstNsx => {
            return <option key={lstNsx.idNSX} value={lstNsx.idNSX}>
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

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Quản lý sản phẩm</h3>
                    <Form onSubmit={this.handleSubmit}>
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
                                    value={item.sp.idSanPham}
                                    onChange={this.handleChange}
                                    autoComplete="ma"
                                >
                                        {sanPhamList}
                                </Input>
                            </Col>

                            <Col className="bg">
                                <Label for="nsx">
                                    NSX
                                </Label>
                                <Input
                                    id="exampleNSX"
                                    name="nsx"
                                    placeholder="NSX"
                                    type="select"
                                    value={item.nsx.idNSX}
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
                                    value={item.mauSac.idMauSac}
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
                                    value={item.dongSP.idDongSP}
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
                                    value={item.moTa}
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
                            <Col className="bg">
                                <Label for="exampleGiaBan">
                                    Link 1
                                </Label>
                                <Input
                                    id="exampleGiaBan"
                                    name="link1"
                                    placeholder="Link sản phẩm"
                                    type="number"
                                    value={item.giaBan}
                                    onChange={this.handleChange}
                                    autoComplete="link1"
                                />
                            </Col>
                            <Col className="bg">
                                <Label for="exampleGiaBan">
                                    Link 2
                                </Label>
                                <Input
                                    id="exampleGiaBan"
                                    name="link2"
                                    placeholder="Link sản phẩm"
                                    type="number"
                                    value={item.giaBan}
                                    onChange={this.handleChange}
                                    autoComplete="link2"
                                />
                            </Col>

                            <Col className="bg">
                                <Label for="exampleGiaBan">
                                    Link3
                                </Label>
                                <Input
                                    id="exampleGiaBan"
                                    name="link3"
                                    placeholder="Link sản phẩm"
                                    type="number"
                                    value={item.link3}
                                    onChange={this.handleChange}
                                    autoComplete="link3"
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
                            <th width="10%">Sản phẩm</th>
                            <th width="10%">NSX</th>
                            <th width="10%">Màu sắc</th>
                            <th width="10%">Dòng SP</th>
                            <th width="10%">Năm BH</th>
                            <th width="10%">Mô tả</th>
                            <th width="10%">Số lượng tồn</th>
                            <th width="10%">Giá nhập</th>
                            <th width="10%">Giá bán</th>
                            <th width="10%">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {chiTietSPList}
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

export default ChiTietSPList;