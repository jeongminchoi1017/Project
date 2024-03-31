import React from "react";
import '../../../css/admin/admin.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function adminCouponPayment() {
    return (
        <section id="admin">
            <Container id="adminCouponPayment">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>쿠폰명<span>(필수)</span></InputGroup.Text>
                                <Form.Control />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>지급사유<span>(필수)</span></InputGroup.Text>
                                <Form.Control />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>유효기한<span>(필수)</span></InputGroup.Text>
                                <input type='date'/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>적용기준<span>(선택)</span></InputGroup.Text>
                                <Form.Control />
                                <InputGroup.Text>메뉴 한정</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>제한조건<span>(선택)</span>　최대</InputGroup.Text>
                                <Form.Control />
                                <InputGroup.Text><span>원</span>　할인 가능</InputGroup.Text>
                            </InputGroup>
                            <div className="mb-3">
                                <p>지급고객<span>(필수)</span></p>
                                <Form.Check
                                    type="radio"
                                    label="전체고객"
                                    name="group1"
                                    id={`reverse-radio-1`}
                                />
                                <Form.Check
                                    type="radio"
                                    label="특정고객"
                                    name="group1"
                                    id={`reverse-radio-2`}
                                />
                            </div>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>고객 이메일 아이디</InputGroup.Text>
                                <Form.Control />
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Select id="basic-addon2">
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </Form.Select>
                            </InputGroup>
                        </div>
                        <button>지급하기</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminCouponPayment;