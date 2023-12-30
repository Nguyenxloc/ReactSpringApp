import React, {Component} from 'react';
import './App.css';
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
            return <Col className="bg col-xl-4 col-xs-6 mt-5" key={chiTietSP.idChiTietSP}>
                <section className="cards">
                    <article className="card card--1">
                        <div className="card__info-hover">
                            <svg className="card__like"  viewBox="0 0 24 24">
                                <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                            </svg>
                            <div className="card__clock-info">
                                <svg className="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                                </svg><span className="card__time">15 min</span>
                            </div>

                        </div>
                        <div className="card__img" style={{backgroundImage:chiTietSP.link1}}></div>
                        <a href="#" className="card_link">
                            <div className="card__img--hover" style={{backgroundImage:chiTietSP.link1}}></div>
                        </a>
                        <div className="card__info">
                            <span className="card__category"> Recipe</span>
                            <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
                            <span className="card__by">by <a href="#" className="card__author" title="author">Celeste Mills</a></span>
                        </div>
                    </article>
                </section>
            </Col>
        });
        const navVer =
            <div className="navVer">
                <Nav vertical style={{width:250,border:"gray"}}>
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
            </div>
        return (
            <Container>
                <div style={{display: "flex"}}>
                    <div style={{padding:20,paddingTop:60,paddingLeft:0}}>
                        {navVer}
                    </div>
                    <Row xl="3" xs="2" style={{padding:20}}>
                        {spList}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default AppShowProduct;