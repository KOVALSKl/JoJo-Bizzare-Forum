import "./Header.css"
import { Container, Row, Col } from 'react-bootstrap'
import picture from "../../assets/jojo_logo.png";
import Hamburger from "../hamburger-menu/Hamburger";


function Header() {
    return (
        <div className="header">
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