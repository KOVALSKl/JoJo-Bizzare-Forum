import "./Header.css"
import { Container, Row, Col } from 'react-bootstrap'
import picture from "../../assets/jojo_logo.png";
import Hamburger from "../hamburger-menu/Hamburger";
import { useState } from "react";
import { useEffect } from "react";


function Header() {

    // CHAGE HEIGHT OF HEADER ON SCORLL
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

    // console.log(offset)

    return (
        <div className="header" >
            <Container>
                <Row>
                    <Col xs={10}>
                        <div className="header-logo">
                            <img src={picture} />
                            <span>ojo’s Bizzare Forum</span>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="header-hamburger-menu">
                            <Hamburger />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;