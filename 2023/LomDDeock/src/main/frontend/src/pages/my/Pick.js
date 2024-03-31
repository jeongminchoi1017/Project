import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Figure, Button , Table,Pagination,Card } from 'react-bootstrap';
import { getWishList } from '../../js/member/myPick.js'
import '../../css/my/my.css';
function Pick(){
    // 찜목록 리스트
    const [wishList, setWishList] = useState([]);
    // 찜목록 리스트 페이징
    const [wishPage, setWishPage] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const wishInfo = await getWishList(1);
            setWishList(wishInfo.dtoList);
            setWishPage(wishInfo);
        };
        fetchData();
    },[])

    const handlePageClick = async (pageNumber) => {
      const wishInfo = await getWishList(pageNumber);
      setWishList(wishInfo.dtoList);
      setWishPage(wishInfo);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = wishPage.start; i <= wishPage.end; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={i === wishPage.pg} onClick={()=>{handlePageClick(i)}}>
              {i}
            </Pagination.Item>
          );
        }
        return pageNumbers;
    };
    return (
        <section className="my">
            <div className="myBanner">
                <h2>나의 찜</h2>
            </div>
            <Container id="pick">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="pick-list">
                            {wishList.map((wish) => (
                            <Card>
                                <Card.Img variant="top" src={`/thumbs/${wish.thumb}`} className="my-order-img"/>
                                <Card.Body style={{maxWidth: '548px'}}>
                                    <Card.Title>{wish.menuName}</Card.Title>
                                    <Card.Text>
                                        <div className="detail-manu">
                                            {wish.descript}
                                        </div>
                                        <span className="price">{wish.price.toLocaleString()}원</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            ))}
                        </div>
                        {/* 페이징 */}
                        <Pagination style={{justifyContent:'center'}}>
                            {wishPage.prev && (
                                <>
                                  <Pagination.Prev onClick={()=>{handlePageClick(wishPage.start - 1)}}/>
                                </>
                            )}
                            {renderPageNumbers()}
                            {wishPage.next && (
                                <>
                                    <Pagination.Next onClick={()=>{handlePageClick(wishPage.end + 1)}}/>
                                </>
                            )}
                        </Pagination>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default Pick;