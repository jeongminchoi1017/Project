import React, { useState, useEffect } from "react";
import '../../../css/admin/admin.css';
import {Accordion, Button, Col, Container, InputGroup, Row, Pagination} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import { getQnaList, getQnaCate, getQnaListAdmin } from '../../../js/cs/qnaList.js';
import { deleteCs } from '../../../js/cs/qnaView.js';

function AdminQna() {
    // 문의내역 리스트
     const [qnaList, setQnaList] = useState([]);
     // 문의내역 리스트 페이징
     const [qnaPage, setQnaPage] = useState({});
    // 문의 카테고리
     const [qnaCate, setQnaCate] = useState([]);
     // 선택한 카테고리
     const [selectedValue, setSelectedValue] = useState('0');
     // 검색조건
     const [search, setSearch] = useState('');
     useEffect(() => {
         const fetchData = async () => {
             const qnaInfo = await getQnaListAdmin(1, selectedValue, '');
             setQnaList(qnaInfo.dtoList);
             setQnaPage(qnaInfo);
             const qnaCateList = await getQnaCate();
             setQnaCate(qnaCateList);
         };
         fetchData();
     },[])
     const handlePageClick = async (pageNumber) => {
         const qnaInfo = await getQnaListAdmin(pageNumber, selectedValue, search);
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
     const handleChange = async (event) => {
          const selectedVal = event.target.value;
          setSelectedValue(selectedVal);
          const qnaInfo = await getQnaListAdmin(1, selectedVal, search);
          setQnaList(qnaInfo.dtoList);
          setQnaPage(qnaInfo);
      };
      const sendDeleteCs = async (cno) => {
        await deleteCs(cno);
        alert('삭제되었습니다.');
        handlePageClick(1);
      }
    return (
        <section id="admin">
            <Container id="adminQna">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택" value={selectedValue} onChange={handleChange}>
                            <option value='0'>전체</option>
                            {qnaCate.map((qna) => (
                                <option value={qna.cateNo}>{qna.cateName}</option>
                            ))}
                        </Form.Select>
                        {/* 검색창 */}
                        <InputGroup>
                            <Form.Control
                                placeholder="검색어 입력"
                                value={search}
                                onChange={(e)=>{setSearch(e.target.value)}}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={()=>{handlePageClick(1)}}>검색</Button>
                        </InputGroup>
                        <Accordion>
                            {qnaList.map((qna, index) => (
                            <Accordion.Item eventKey={`${qna.cno}`}>
                                <Accordion.Header>
                                    {qna.title}
                                    <span className="date">
                                        {formatDate(qna.rdate)}
                                    </span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        {qna.content}
                                    </p>
                                    <p>
                                        작성자 : {qna.registant}<br/>
                                        작성일 : {formatDate(qna.rdate)}
                                    </p>
                                    <p>
                                        <button onClick={()=>{sendDeleteCs(qna.cno)}}>삭제</button>
                                    </p>
                                    {qna.qno > 0 ? (
                                    <>
                                    <p>
                                        {qna.reply}
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                    <p>
                                        답변완료일 : {qna.replyDate}
                                    </p>
                                    </>
                                    ): null}
                                </Accordion.Body>
                            </Accordion.Item>
                            ))}
                        </Accordion>
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminQna;