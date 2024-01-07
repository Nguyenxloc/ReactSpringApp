import React, {Component} from 'react';
import '../App.css';
import '../scss/DetailProduct.scss';
import {
    Button,
    Nav, NavItem, NavLink,
    Row,
} from 'reactstrap';
import SubListProductCom from "../component/SubListProductCom";
import FooterCom from '../component/FooterCom';
import DetailProductCom from "../component/DetailProductCom";
import NavBarCom from "../component/NavBarCom";
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
        this.state = {item: this.emptyItem,idDongSP:null};
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

    async componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            const chiTietSP = await (await fetch(`/sanPham/chiTietSP/${this.props.match.params.id}`)).json();
            this.setState({item: chiTietSP});
            this.setState({idDongSP:chiTietSP.dongSP.idDongSP})
        } catch (err) {
            console.log(err.toString())
        }
    }

    render() {
        const {idDongSP} = this.state;
        const {item} = this.state;
        let  x = {idDongSP}
        console.log(idDongSP)
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
        return (item?
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
                        {idDongSP?
                            <SubListProductCom
                                idDongSP={item.dongSP.idDongSP}
                            />
                            :<em>Loading...</em>
                        }
                    </Row>
                </div>
                <br/><br/><br/><br/>
                <FooterCom/>
            </div>
            :<em>Loading...</em>
        );
    }
}

export default DetailProductView;