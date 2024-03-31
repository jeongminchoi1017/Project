import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Table, Pagination, Form } from 'react-bootstrap';
import { getMyQnaList, getQnaCate } from '../../js/member/qnaList.js';
import '../../css/my/my.css';
function QnaList(){
    // 문의내역 리스트
    const [myQnaList, setMyQnaList] = useState([]);
    // 문의내역 리스트 페이징
    const [myQnaPage, setMyQnaPage] = useState({});
    // 문의 카테고리
    const [qnaCate, setQnaCate] = useState([]);
    // 선택한 카테고리
    const [selectedValue, setSelectedValue] = useState('0');
    useEffect(() => {
        const fetchData = async () => {
            const qnaList = await getMyQnaList(1, selectedValue);
            setMyQnaList(qnaList.dtoList);
            setMyQnaPage(qnaList);
            const qnaCateList = await getQnaCate();
            setQnaCate(qnaCateList);
        };
        fetchData();
    },[])

    const handlePageClick = async (pageNumber) => {
      const qnaList = await getMyQnaList(pageNumber, selectedValue);
      setMyQnaList(qnaList.dtoList);
      setMyQnaPage(qnaList);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = myQnaPage.start; i <= myQnaPage.end; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={i === myQnaPage.pg} onClick={()=>{handlePageClick(i)}}>
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
    // status 한글로 변환
    const getStatus = (status) => {
        if (status == 0) {
            return "문의중";
        } else if (status == 1) {
            return "답변완료";
        }
    }
    const handleChange = async (event) => {
        const selectedVal = event.target.value;
        setSelectedValue(selectedVal);
        const qnaList = await getMyQnaList(1, selectedVal);
        setMyQnaList(qnaList.dtoList);
        setMyQnaPage(qnaList);
      };

    return (
        <section className="my">
            <div className="myBanner">
                <h2>나의 문의내역</h2>
            </div>
            <Container id="QnaList">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="find-myQna">
                            <select value={selectedValue} onChange={handleChange}>
                                <option value='0'>전체</option>
                                {qnaCate.map((qna) => (
                                    <option value={qna.cateNo}>{qna.cateName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="myQna-list">
                            <Table hover size="sm" className="text-center">
                                <thead>
                                    <tr>
                                        <th>유형</th>
                                        <th>제목</th>
                                        <th>작성일</th>
                                        <th>상태</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myQnaList.map((qna) => (
                                         <tr>
                                            <td>{qna.cateName}</td>
                                            <td>
                                                <Link to={`/my/myQnaView/${qna.cno}`}>
                                                    {qna.title}
                                                </Link>
                                            </td>
                                            <td>
                                                {formatDate(qna.rdate)}
                                            </td>
                                            <td className={`${qna.status === 1 ? 'answer-complete' : ''}`}>
                                                {getStatus(qna.status)}
                                            </td>
                                         </tr>
                                    ))}
                                </tbody>
                            </Table>

                            {/* 페이징 */}
                            <Pagination style={{justifyContent:'center'}}>
                                {myQnaPage.prev && (
                                    <>
                                      <Pagination.Prev onClick={()=>{handlePageClick(myQnaPage.start - 1)}}/>
                                    </>
                                )}
                                {renderPageNumbers()}
                                {myQnaPage.next && (
                                    <>
                                        <Pagination.Next onClick={()=>{handlePageClick(myQnaPage.end + 1)}}/>
                                    </>
                                )}
                            </Pagination>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default QnaList;