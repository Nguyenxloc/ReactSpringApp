import React, {Component} from 'react';
import {
    Button, ButtonGroup,
    Card, CardBody, CardSubtitle, CardText, CardTitle,
    Col,
    Container, Nav, NavItem, NavLink,
    Row,
} from 'reactstrap';
import AppCellProduct from "./component/AppCellProduct";
class AppShowProduct extends Component {
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
        link1: '',
        link2: '',
        link3: '',
    };

    constructor(props) {
        super(props);
        this.state = {item: this.emptyItem, lstChiTietSP: []};
        // this.remove = this.remove.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
    }


    render() {
        const {lstChiTietSP} = this.state;
        const spList = lstChiTietSP.map(chiTietSP => {
            return <Col className="bg mt-5" key={chiTietSP.idChiTietSP}>
                <Card
                    style={{
                        width: '330px',
                        padding: '10px'
                    }}
                >
                    <AppCellProduct
                        link1={chiTietSP.link1}
                        link2={chiTietSP.link2}
                        link3={chiTietSP.link3}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {chiTietSP.sp.ten}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Price: {chiTietSP.giaBan}$
                        </CardSubtitle>
                        <CardText>
                            {chiTietSP.mota}
                        </CardText>
                        <Button>
                            Buy product
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        });
        const navVer =  <Nav vertical style={{width:250,border:"gray"}}>
            <NavItem>
                <NavLink href="#">
                    <Button style={{width: 250,height:50,textAlign:"start",background:"darkred",color:"white",fontSize:20,borderBottom:"white"}} outline>
                        Danh mục sản phẩm
                    </Button>
                    <Button style={{width: 250,height:60,textAlign:"start",fontSize:20,borderBottom:"white"}} outline>
                        Thắt lưng da
                    </Button>
                    <Button style={{width: 250,height:60,textAlign:"start",fontSize:20,borderBottom:"white"}} outline>
                        Ví da
                    </Button>
                    <Button style={{width: 250,height:60,textAlign:"start",fontSize:20,borderBottom:"white"}} outline>
                        Túi da
                    </Button>
                    <Button style={{width: 250,height:60,textAlign:"start",fontSize:20}} outline>
                        Phụ kiện
                    </Button>
                </NavLink>
            </NavItem>
        </Nav>

        return (
            <Container>
                <div style={{display: "flex"}}>
                    <div style={{padding:20,paddingTop:60,paddingLeft:0}}>
                        {navVer}
                    </div>
                    <Row xs="3" style={{padding:20}}>
                        {spList}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default AppShowProduct;