import React from "react";
import '../../../css/admin/admin.css';
import {Button, Col, Container, InputGroup, Row, Table} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

function adminCouponList() {
    return (
        <section id="admin">
            <Container id="adminCouponList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col id="adminList">
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택">
                            <option value="all">전체</option>
                            <option value="couponName">쿠폰명</option>
                            <option value="paymentDay">지급일</option>
                            <option value="availablePeriod">유효기간</option>
                            <option value="limit">적용기준</option>
                            <option value="Constraints">제한조건</option>
                            <option value="customer">지급고객</option>
                            <option value="reson">사유</option>
                        </Form.Select>
                        {/* 검색창 */}
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="검색어 입력"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">검색</Button>
                        </InputGroup>
                        <div className="adminListTable">
                            <Table hover size="sm" className="text-center">
                                <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>쿠폰명</th>
                                    <th>지급일</th>
                                    <th>유효기한</th>
                                    <th>적용기준</th>
                                    <th>제한조건</th>
                                    <th>지급고객</th>
                                    <th>사유</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>14</td>
                                    <td>회원가입 축하 쿠폰</td>
                                    <td>2023-11-01</td>
                                    <td>2024-04-30</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>aaa@gmail.com</td>
                                    <td>회원가입</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>전제품 10% 할인 쿠폰</td>
                                    <td>2023-11-01</td>
                                    <td>2024-04-30</td>
                                    <td>-</td>
                                    <td>최대 5,000원까지</td>
                                    <td>전체고객</td>
                                    <td>고객감사</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>전제품 5% 할인 쿠폰</td>
                                    <td>2023-11-01</td>
                                    <td>2024-04-30</td>
                                    <td>○○떡볶이 한정</td>
                                    <td>-</td>
                                    <td>bbb@gmail.com</td>
                                    <td>컴플레인</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>회원가입 축하 쿠폰</td>
                                    <td>2023-11-01</td>
                                    <td>2024-04-30</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>ccc@gmail.com</td>
                                    <td>회원가입</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>전제품 10% 할인 쿠폰</td>
                                    <td>2023-11-01</td>
                                    <td>2024-04-30</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>ddd@gmail.com</td>
                                    <td>컴플레인</td>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminCouponList;