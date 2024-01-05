import React, {Component} from 'react';
import '../App.css';
import '../scss/DetailProduct.scss';
import {
    Button,
    Nav, NavItem, NavLink,
    Row,
} from 'reactstrap';
import FooterCom from '../component/FooterCom';
import DetailProductCom from "../component/DetailProductCom";
import NavBarCom from "../component/NavBarCom";
import SubListProductCom from "../component/SubListProductCom";
class DetailProductView extends Component {
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
        this.state={
            item:this.props.location.state,
        }
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
        const {item} = this.state;
        const navVer =
            <div className="navVer">
                <Nav vertical style={{width:270}}>
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
            <div>
                <NavBarCom/>
                <div className="DetailProductViewCSS container-xl" style={{display: "flex"}}>
                    <div className="mt-5" style={{}}>
                        {navVer}
                    </div>
                    <Row xl="1" xs="1" style={{marginLeft:"10px"}}>
                        <DetailProductCom
                        product={item}
                        />
                        <SubListProductCom
                        idDongSP={item.dongSP.idDongSP}
                        />
                    </Row>
                </div>
                <br/><br/><br/><br/>
                <FooterCom/>
            </div>
        );
    }
}

export default DetailProductView;