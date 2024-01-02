import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card, CardBody,
    CardGroup, CardSubtitle, CardText, CardTitle

} from 'reactstrap';

function FooterCom() {
    return (
        <CardGroup>
            <Card style={{background: "#008080", color: "white"}}>
                <CardBody>
                    <CardTitle tag="h5">
                        Giới thiệu
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        --/demo/--
                    </CardSubtitle>
                    <CardText>
                        The only way to get love is to be lovable. It's very irritating if you have a lot of money.
                        You'd like to think you could write a check: 'I'll buy a million dollars' worth of love.' But it
                        doesn't work that way. The more you give love away, the more you get ("Warren Buffett").
                    </CardText>
                    <br/><br/>
                </CardBody>
            </Card>
            <Card style={{background: "#008080", color: "white"}}>
                <CardBody>
                    <CardTitle tag="h5">
                        Liên hệ
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        --/demo/--
                    </CardSubtitle>
                    <CardText>
                        Số 129 Quang Trung, Uông Bí, Quảng Ninh
                        <br/>
                        0374223222
                        <br/>
                        phuclocub@gmail.com
                    </CardText>
                    <br/><br/>
                </CardBody>
            </Card>
            <Card style={{background: "#008080", color: "white"}}>
                <CardBody>
                    <CardTitle tag="h5">
                        Kết nối với chúng tôi
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        --/demo/--
                    </CardSubtitle>
                    <CardText>
                        FaceBook: 03742223222
                        <br/>
                        Instagram: 0374223222
                        <br/>
                        Gmail: phuclocub@gmail.com
                    </CardText>
                    <br/><br/>
                </CardBody>
            </Card>
        </CardGroup>
    );
}

export default FooterCom;