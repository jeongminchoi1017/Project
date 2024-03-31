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
                        <p>회원가입한 이메일 주소를 입력해주세요.</p>
                        <div className="confirmEmailForm">
                            <Form.Label>이메일 아이디</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="이메일 주소를 입력하세요"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Select id="basic-addon2">
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                    {/* 다른 이메일 옵션들을 추가할 수 있습니다 */}
                                </Form.Select>
                                <Button variant="outline-secondary" id="button-addon2">
                                    인증번호 전송
                                </Button>
                            </InputGroup>
                            <Form.Label>인증번호</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="인증번호를 입력하세요."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    인증번호 확인
                                </Button>
                            </InputGroup>
                        </div>

                        <div className="text-center">
                            <Button variant="danger" type="submit">
                                확인
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default  ConfirmEmail;