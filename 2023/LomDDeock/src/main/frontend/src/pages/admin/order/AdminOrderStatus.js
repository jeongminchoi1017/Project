import React from "react";
import '../../../css/admin/admin.css';
import {Button, Col, Container, InputGroup, Row, Table} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

function adminOrderStatus() {
    return (
        <section id="admin">
            <Container id="adminOrderStatus">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택">
                            <option value="all">전체</option>
                            <option value="normal">일반</option>
                            <option value="side">사이드디시</option>
                            <option value="drinkOrOthers">음료/기타</option>
                        </Form.Select>
                        {/* 검색창 */}
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="메뉴명 입력"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">검색</Button>
                        </InputGroup>
                        <Table hover size="sm" className="text-center">
                            <thead>
                            <tr>
                                <th>번호</th>
                                <th>주문번호</th>
                                <th>메뉴명</th>
                                <th>결제금액</th>
                                <th>주문일</th>
                                <th>주문자</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>14</td>
                                <td>202312354</td>
                                <td><Link to="/menu/menuView">○○○떡볶이</Link></td>
                                <td>45,000</td>
                                <td>2023-11-01 18:00</td>
                                <td>
                                    <button>보기</button>
                                </td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>202312354</td>
                                <td><Link to="/menu/menuView">☆☆☆떡볶이</Link></td>
                                <td>45,000</td>
                                <td>2023-11-01 18:00</td>
                                <td>
                                    <button>보기</button>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>202312354</td>
                                <td><Link to="/menu/menuView">△△△세트</Link></td>
                                <td>45,000</td>
                                <td>2023-11-01 18:00</td>
                                <td>
                                    <button>보기</button>
                                </td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>202312354</td>
                                <td><Link to="/menu/menuView">△△△떡볶이</Link></td>
                                <td>45,000</td>
                                <td>2023-11-01 18:00</td>
                                <td>
                                    <button>보기</button>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>202312354</td>
                                <td><Link to="/menu/menuView">○○○세트</Link></td>
                                <td>45,000</td>
                                <td>2023-11-01 18:00</td>
                                <td>
                                    <button>보기</button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="paging">
                            <span className="num prev"><Link to="#">&lt;</Link></span>
                            <span className="num on"><Link to="#">1</Link></span>
                            <span className="num"><Link to="#">2</Link></span>
                            <span className="num"><Link to="#">3</Link></span>
                            <span className="num"><Link to="#">4</Link></span>
                            <span className="num"><Link to="#">5</Link></span>
                            <span className="num next"><Link to="#">&gt;</Link></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminOrderStatus;