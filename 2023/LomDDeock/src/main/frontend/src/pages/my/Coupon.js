import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Table,Pagination } from 'react-bootstrap';
import { getMyCouponCount, getMyCouponList } from '../../js/member/myCoupon.js';
import '../../css/my/my.css';
function Coupon(){
    // 보유 쿠폰 수
    const [myCouponCount, setMyCouponCount] = useState({});
    // 쿠폰 리스트
    const [myCouponList, setMyCouponList] = useState([]);
    // 쿠폰 리스트 페이징
    const [myCouponPage, setMyCouponPage] = useState({});
    // 검색조건
    const [useYn, setUseYn] = useState('A');
    useEffect(()=>{
        const fetchData = async () => {
            const info = await getMyCouponCount();
            setMyCouponCount(info);
            const couponList = await getMyCouponList(1, useYn);
            setMyCouponList(couponList.dtoList);
            setMyCouponPage(couponList);
        };
        fetchData();
    },[])
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const date = formatter.formatToParts(new Date(dateString));
        return `${date[4].value}-${date[0].value}-${date[2].value}`;
    }
    const handlePageClick = async (pageNumber, useYnInfo) => {
        setUseYn(useYnInfo)
        const couponList = await getMyCouponList(pageNumber, useYnInfo);
        setMyCouponList(couponList.dtoList);
        setMyCouponPage(couponList);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = myCouponPage.start; i <= myCouponPage.end; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={i === myCouponPage.pg} onClick={()=>{handlePageClick(i, useYn)}}>
              {i}
            </Pagination.Item>
          );
        }
        return pageNumbers;
    };
    return (
        <section className="my">
            <div className="myBanner">
                <h2>쿠폰함</h2>
            </div>
            <Container id="coupon">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="pointBanner">
                            <p>
                                <span>보유 쿠폰</span>
                                <h3>{myCouponCount.couponCount}장</h3>
                            </p>
                            <p>30일 내 <span className="coup-expires">{myCouponCount.expireCount}장</span>의 쿠폰이 만료될 예정이에요.</p>
                        </div>
                        <div>
                            <div className="sort">
                                <Button variant="danger" size="lg" className="all" onClick={()=>{handlePageClick(1, 'A')}}>
                                    전체
                                </Button>
                                <Button variant="danger" size="lg" className="accumulate" onClick={()=>{handlePageClick(1, 'Y')}}>
                                    사용가능
                                </Button>
                                <Button variant="danger" size="lg" className="use" onClick={()=>{handlePageClick(1, 'N')}}>
                                    사용완료
                                </Button>
                                <Button variant="danger" size="lg" className="expiration" onClick={()=>{handlePageClick(1, 'Z')}}>
                                    만료
                                </Button>
                            </div>
                            <div className="point-list">
                                <Table hover size="sm" className="text-center">
                                    <thead>
                                    <tr>
                                        <th>쿠폰명</th>
                                        <th>적용기준</th>
                                        <th>제한조건</th>
                                        <th>상태</th>
                                        <th>유효기간</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {myCouponList.map((coupon) => (
                                        <tr>
                                            <td>{coupon.couponName}</td>
                                            <td>{coupon.couponApply}</td>
                                            <td>{coupon.discountLimit}</td>
                                            <td className={`coup ${coupon.useYn === 'Y' ? 'available' : (coupon.useYn === 'N' ? 'use' : (coupon.useYn === 'Z' ? 'expiration' : ''))}`}>
                                                {coupon.useYn === 'Y' ? '사용가능' : (coupon.useYn === 'N' ? '사용완료' : (coupon.useYn === 'Z' ? '만료' : ''))}
                                            </td>
                                             <td>
                                                {coupon.couponExpireDate && formatDate(coupon.couponExpireDate)}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>

                                {/* 페이징 */}
                                <Pagination style={{justifyContent:'center'}}>
                                    {myCouponPage.prev && (
                                        <>
                                          <Pagination.Prev onClick={()=>{handlePageClick(myCouponPage.start - 1)}}/>
                                        </>
                                    )}
                                    {renderPageNumbers()}
                                    {myCouponPage.next && (
                                        <>
                                            <Pagination.Next onClick={()=>{handlePageClick(myCouponPage.end + 1)}}/>
                                        </>
                                    )}
                                </Pagination>
                            </div>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default Coupon;