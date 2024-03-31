import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion, Pagination } from 'react-bootstrap';
import { getFaqList } from '../../js/cs/faqList.js'
import '../../css/cs/cs.css';
function Faq() {
     // 자주묻는 질문 리스트
     const [faqList, setFaqList] = useState([]);
     // 문의내역 리스트 페이징
     const [faqPage, setFaqPage] = useState({});
     // 자주묻는 질문 카테고리 값 (이벤트로 고정)
     const [cateNo, setCateNo] = useState(10);
     useEffect(() => {
        const fetchData = async () => {
            const faqInfo = await getFaqList(1, cateNo);
            setFaqList(faqInfo.dtoList);
            setFaqPage(faqInfo);
        };
        fetchData();
     },[])

     const handlePageClick = async (pageNumber, cate) => {
        setCateNo(cate);
        const faqInfo = await getFaqList(pageNumber, cate);
        setFaqList(faqInfo.dtoList);
        setFaqPage(faqInfo);
     };
     const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = faqPage.start; i <= faqPage.end; i++) {
            pageNumbers.push(
            <Pagination.Item key={i} active={i === faqPage.pg} onClick={()=>{handlePageClick(i, cateNo)}}>
                {i}
            </Pagination.Item>
            );
        }
        return pageNumbers;
     };
    // 날짜 yyy-mm-dd로 변환
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const date = formatter.formatToParts(new Date(dateString));
        return `${date[4].value}-${date[0].value}-${date[2].value}`;
    }
    return (
        <section className="cs">
            <Container id="faq">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/csNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>자주묻는질문</strong> </span>
                        </div>
                        <div className="faq-cate">
                            <Link to="#" className={`${cateNo === 10 ? 'on' : ''}`}
                            onClick={()=>{handlePageClick(1, 10)}}>
                                이벤트
                            </Link>
                            <Link to="#" className={`${cateNo === 11 ? 'on' : ''}`}
                            onClick={()=>{handlePageClick(1, 11)}}>
                                주문/결제
                            </Link>
                            <Link to="#" className={`${cateNo === 12 ? 'on' : ''}`}
                            onClick={()=>{handlePageClick(1, 12)}}>
                                취소/환불
                            </Link>
                            <Link to="#" className={`${cateNo === 13 ? 'on' : ''}`}
                            onClick={()=>{handlePageClick(1, 13)}}>
                                혜택
                            </Link>
                            <Link to="#" className={`${cateNo === 14 ? 'on' : ''}`}
                             onClick={()=>{handlePageClick(1, 14)}}>
                                이용문의
                            </Link>
                            <Link to="#" className={`${cateNo === 15 ? 'on' : ''}`}
                             onClick={()=>{handlePageClick(1, 15)}}>
                                회원정보
                            </Link>
                            <Link to="#" className={`${cateNo === 16 ? 'on' : ''}`}
                            onClick={()=>{handlePageClick(1, 16)}}>
                                쿠폰
                            </Link>
                        </div>
                        <Accordion>
                            {faqList.map((faq, index) => (
                                <Accordion.Item eventKey={`${index}`}>
                                    <Accordion.Header>{faq.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            {faq.content}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                        <Pagination style={{justifyContent:'center'}}>
                            {faqPage.prev && (
                                <>
                                  <Pagination.Prev onClick={()=>{handlePageClick(faqPage.start - 1)}}/>
                                </>
                            )}
                            {renderPageNumbers()}
                            {faqPage.next && (
                                <>
                                    <Pagination.Next onClick={()=>{handlePageClick(faqPage.end + 1)}}/>
                                </>
                            )}
                        </Pagination>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default Faq;