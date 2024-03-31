import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import React from "react";
import '../../../css/admin/admin.css';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function adminMenuModify() {
    return (
        <section id="admin">
            <Container id="adminMenuManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택">
                            <option value="normal">일반</option>
                            <option value="side">사이드디시</option>
                            <option value="drinkOrOthers">음료/기타</option>
                        </Form.Select>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                메뉴명<span>(필수)</span>
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="메뉴의 이름을 입력해주세요."
                            />
                        </InputGroup>
                        <Form.Group controlId="formFile" className="mb-3">
                            메뉴 이미지 첨부 (필수)
                            <Form.Control type="file" />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>메뉴 설명<span>(선택)</span></InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="해당 메뉴에 대한 설명을 입력해주세요."/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>사이즈 옵션</InputGroup.Text>
                            <Form.Control />
                            <InputGroup.Text>개</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>사이즈</InputGroup.Text>
                            <Form.Control />
                            <Form.Control />
                            <InputGroup.Text>원</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>맵기 옵션</InputGroup.Text>
                            <Form.Control />
                            <InputGroup.Text>개</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control />
                            <InputGroup.Text>맛</InputGroup.Text>
                            <Form.Control />
                            <InputGroup.Text>맛</InputGroup.Text>
                            <Form.Control />
                            <InputGroup.Text>맛</InputGroup.Text>
                        </InputGroup>
                        <article className="addOption">
                            <p>선택옵션 추가 (선택)</p>
                            <button>+</button>
                            <button>-</button>
                            <div className="classification">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">
                                        중분류
                                    </InputGroup.Text>
                                    <Form.Control
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="중분류를 입력해주세요. ex) 떡 -> 떡 추가 옵션이 생성됩니다."
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>소분류 개수</InputGroup.Text>
                                    <Form.Control />
                                    <InputGroup.Text>개</InputGroup.Text>
                                </InputGroup>
                                <div className="subcate">
                                    <Form.Group controlId="formFile" className="mb-3 formFile">
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <InputGroup className="mb-3 inputSubcate">
                                        <InputGroup.Text>재료명, 양</InputGroup.Text>
                                        <Form.Control />
                                        <InputGroup.Text>금액</InputGroup.Text>
                                        <Form.Control />
                                        <InputGroup.Text>원</InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                        </article>
                        <button>수정완료</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminMenuModify;