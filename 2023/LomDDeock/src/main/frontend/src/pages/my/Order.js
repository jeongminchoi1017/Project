import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Figure, Button , Table,Pagination, Card } from 'react-bootstrap';
import '../../css/my/my.css';

function Order() {
    return (
        <section className="my">
            <div className="myBanner">
                <h2>주문내역</h2>
            </div>
            <Container id="order">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="order-list">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/100x180" className="my-order-img"/>
                                <Card.Body>
                                    <Card.Title>2023.11.02 (목)</Card.Title>
                                    <Card.Text>
                                       주문 번호 : <span className="order-number">20231103</span> <br/>
                                       배달 상태 : <span className="delivery-complete">배달 완료</span> <br/>
                                        <div className="order-details">
                                            상세 내역:
                                            객체지향 세트 <br/>
                                            · 토핑 : 분모자, 차돌박이, 튀김어묵, 계란 <br/>
                                            · 사이드메뉴 : 통모짜핫도그, 순대, 날치알주먹밥 <br/>
                                            · 음료 : 쿨피스 (1L), 제로콜라(코카) <br/>

                                        </div>
                                    </Card.Text>
                                    <Button size="lg" className="btn success">재주문</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/100x180" className="my-order-img"/>
                                <Card.Body>
                                    <Card.Title>2023.11.06 (화)</Card.Title>
                                    <Card.Text>
                                       주문 번호 : <span className="order-number">20231103</span> <br/>
                                       배달 상태 : <span className="delivery-ing">배달 중</span> <br/>
                                        <div className="order-details">
                                            상세 내역:
                                            마라떡볶이 <br/>
                                            · 토핑 : 넓적당면, 차돌박이, 모짜치즈, 비엔나소시지, 튀김어묵 <br/>
                                            · 사이드메뉴 : 꿔바로우, 김말이, 날치알주먹밥 <br/>
                                            · 음료 : 쿨피스 (1L), 스프라이트(355ml) <br/>
                                        </div>
                                    </Card.Text>
                                    <Button size="lg" className="btn success">재주문</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* 페이징 */}
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default Order;