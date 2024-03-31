import React from 'react';
import Image from 'react-bootstrap/Image'; // 이미지를 위한 React Bootstrap 컴포넌트 가져오기
import '../../css/user/user.css';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/LomDDeock-letterlogo-korean.png';
import InputGroup from "react-bootstrap/InputGroup";

function ConfirmEmail (){
    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} id="loginCol">
                        <div className="d-flex justify-content-center">
                            <Image src={logo} alt="로고" className="logo"/>
                        </div>
                        <h2>비밀번호 재설정</h2>
                        <p>비밀번호를 재설정해주세요.</p>
                        <div className="resetPass">
                            <Form.Label>비밀번호</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="비밀번호를 입력해주세요." />
                            </InputGroup>
                            <Form.Label>비밀번호 확인</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="비밀번호를 한 번 더 입력해주세요." />
                            </InputGroup>
                        </div>

                        <div className="text-center">
                            <Button variant="danger" type="submit">
                                변경하기
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default  ConfirmEmail;