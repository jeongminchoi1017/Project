import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import { getQnaList, getQnaCate } from '../../js/cs/qnaList.js';
import '../../css/cs/cs.css';
function QnaList() {
     // 문의내역 리스트
     const [qnaList, setQnaList] = useState([]);
     // 문의내역 리스트 페이징
     const [qnaPage, setQnaPage] = useState({});
     // 문의 카테고리
     const [qnaCate, setQnaCate] = useState([]);
     // 선택한 카테고리
     const [selectedValue, setSelectedValue] = useState('0');
     useEffect(() => {
        const fetchData = async () => {
            const qnaInfo = await getQnaList(1, selectedValue);
            setQnaList(qnaInfo.dtoList);
            setQnaPage(qnaInfo);
            const qnaCateList = await getQnaCate();
            setQnaCate(qnaCateList);
        };
        fetchData();
     },[])

     const handlePageClick = async (pageNumber) => {
        const qnaInfo = await getQnaList(pageNumber, selectedValue);
        setQnaList(qnaInfo.dtoList);
        setQnaPage(qnaInfo);
     };
     const renderPageNumbers = () => {
         const pageNumbers = [];
         for (let i = qnaPage.start; i <= qnaPage.end; i++) {
            pageNumbers.push(
            <Pagination.Item key={i} active={i === qnaPage.pg} onClick={()=>{handlePageClick(i)}}>
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
     function filtering(name) {
       if (name.length < 3) {
         return name;
       }
       const firstChar = name.charAt(0);
       const lastChar = name.charAt(name.length - 1);
       const filteredName = firstChar + '*'.repeat(name.length - 2) + lastChar;
       return filteredName;
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
         const qnaInfo = await getQnaList(1, selectedVal);
         setQnaList(qnaInfo.dtoList);
         setQnaPage(qnaInfo);
     };
    return (
        <section className="cs">
            <Container id="qna-list">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/CsNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9} className="content">
                        <div className="location">
                            <span> 고객센터 > <strong>고객의 소리</strong> </span>
                        </div>
                        <div className="find-csQna">
                            <select value={selectedValue} onChange={handleChange}>
                                <option value='0'>전체</option>
                                {qnaCate.map((qna) => (
                                    <option value={qna.cateNo}>{qna.cateName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="csQna-list">
                            <Table hover size="sm" className="text-center">
                                <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>유형</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>상태</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {qnaList.map((qna) => (
                                        <tr>
                                            <td>{qna.cno}</td>
                                            <td>{qna.cateName}</td>
                                            <td><Link to={`/cs/CsQnaView/${qna.cno}`}>{qna.title}</Link></td>
                                            <td>
                                                {filtering(qna.registant)}
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
                            <div className="buttons">
                                <Link to="/cs/CsQnaWrite" className="btn cs-write">작성</Link>
                            </div>
                            <Pagination style={{justifyContent:'center'}}>
                                {qnaPage.prev && (
                                    <>
                                      <Pagination.Prev onClick={()=>{handlePageClick(qnaPage.start - 1)}}/>
                                    </>
                                )}
                                {renderPageNumbers()}
                                {qnaPage.next && (
                                    <>
                                        <Pagination.Next onClick={()=>{handlePageClick(qnaPage.end + 1)}}/>
                                    </>
                                )}
                            </Pagination>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaList;