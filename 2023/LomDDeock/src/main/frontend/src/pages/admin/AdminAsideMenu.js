import {Col, ListGroup} from "react-bootstrap";
import React from "react";

const adminAsideMenu = ()=>{
    return (
        <Col sm={2}>
            <div className="todayDate">
                <h2>2023-11-07</h2>
            </div>
            <ListGroup className="asideMenu">
                <ListGroup.Item action variant="light" href="/admin/adminIndex">ADMIN HOME</ListGroup.Item>
                <ListGroup.Item action variant="light">
                    메뉴관리
                    <ul>
                        <li><a href="/admin/menu/AdminMenuList">▶ 메뉴목록</a></li>
                        <li><a href="/admin/menu/AdminMenuRegister">▶ 메뉴등록</a></li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/order/adminOrderStatus">주문현황</ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/banner/adminBanner">배너관리</ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/event/adminEventList">이벤트관리</ListGroup.Item>
                <ListGroup.Item action variant="light">
                    쿠폰관리
                    <ul>
                        <li><a href="/admin/coupon/AdminCouponList">▶ 쿠폰지급내역</a></li>
                        <li><a href="/admin/coupon/adminCouponPayment">▶ 쿠폰지급</a></li>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/notice/adminNoticeList">공지사항관리</ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/faq/adminFaqList">자주묻는질문</ListGroup.Item>
                <ListGroup.Item action variant="light" href="/admin/qna/adminQna">고객의소리</ListGroup.Item>
            </ListGroup>
        </Col>
    )
}

export default adminAsideMenu;