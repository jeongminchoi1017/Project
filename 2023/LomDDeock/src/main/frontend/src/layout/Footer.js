import {Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col} from 'react-bootstrap';
import '../css/layout.css';
import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/LomDDeock-logo-removebg.png';
import letterLogo from '../images/LomDDeock-letterlogo-english.png';
import pepperImg from '../images/pepper.png';
function Footer() {
    return (
        <footer className="bg-body-tertiary">
            <Container>
                <Nav
                    /*activeKey="/introduce"*/
                    /*onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}*/
                    className="flex-content-center footer-nav">
                    <Nav.Item>
                        <Nav.Link href="/brand/introduce">
                            회사소개
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">
                            공지사항
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/brand/terms">
                            이용약관
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled">
                            개인정보처리방침
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Row className="footerContent">
                <Col>
                    <img src={pepperImg} alt="로고" className="footerPepperImg"/>
                    <p className="footerMent">
                        ㈜롬복떡볶이 부산시 부산진구 서면로12-1  |  사업자등록번호 : 1234-1232-1234  |  대표이사 : 김롬볶<br/>
                        대표번호 : 070-1234-4321  |  고객센터 : 1234-4321  |  Email : lomddeock@lombok.com<br/>
                        Copyright © LOMBOK FOOD SYS All rights reserved.<br/>
                    </p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;