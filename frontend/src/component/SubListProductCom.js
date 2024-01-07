import React, {Component} from 'react';
import '../App.css';
import {
    Col,
    Row,
} from 'reactstrap';
import {Link} from "react-router-dom";

class SubListProductCom extends Component {
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
    };
    constructor(props) {
        super(props);
        this.state = {item: this.emptyItem, lstChiTietSP: []};

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
        const {idDongSP}  =  this.props;
        console.log(idDongSP);
        const requestOptions = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        };
        try {
            fetch(`http://localhost:8080/sanPham/getRelatedChiTietSP/${idDongSP}`, requestOptions)
                .then(response => response.json())
                .then(data => this.setState({lstChiTietSP: data}));
        } catch (err) {
            console.log(err.toString())
        }
    }


    render() {
        const {lstChiTietSP} = this.state;
        const spList = lstChiTietSP.map(chiTietSP => {
            return <Col className="bg col-xl-4 col-xs-12 mb-4" key={chiTietSP.idChiTietSP} style={{}}>
                <article className="card card--1" style={{}}>
                    <div className="card__info-hover">
                    </div>
                    <div className="card__img" style={{backgroundImage: 'url(' + chiTietSP.link1 + ')'}}></div>
                    <Link to={{pathname:`/detail-product/${chiTietSP.idChiTietSP}`
                    }} className="card_link">
                        <div className="card__img--hover" style={{backgroundImage: 'url(' + chiTietSP.link1 + ')'}}></div>
                    </Link>
                    <div className="card__info">
                        <span className="card__category" style={{fontSize: "0.5vmax"}}>{chiTietSP.dongSP.ten}</span>
                        <h3 className="card__title" style={{fontSize: "1vmax"}}>{chiTietSP.sp.ten}</h3>
                        <span className="card__by">Price: <a href="#" className="card__author" title="author" style={{
                            fontSize: 20,
                            color: "darkorange"
                        }}>{chiTietSP.giaBan}$</a></span>
                    </div>
                </article>
            </Col>
        });

        return (
            <div className="ListProduct container-xl ">
                <p style={{marginLeft:"5px"}}>
                    <b>Sản phẩm khác</b>
                    <hr/>
                </p>
                <Row className="SubLstProduct" xl="3" xs="1" style={{paddingLeft: "10px"}}>
                    {spList}
                </Row>
            </div>
        );
    }
}

export default SubListProductCom;