import { Link, useNavigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import axios from 'axios';
import { getQnaCate } from '../../js/member/qnaList.js';
import '../../css/cs/cs.css';
function QnaWrite() {
    const navigate = useNavigate ();
    // 문의 카테고리
    const [qnaCate, setQnaCate] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const qnaCateList = await getQnaCate();
            setQnaCate(qnaCateList);
        };
        fetchData();
    },[])
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedValue(selectedValue);
    }
    // 선택한 카테고리
    const [selectedValue, setSelectedValue] = useState('0');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function checkQna() {
        const qnaCateFlag = (selectedValue === '' || selectedValue === undefined || selectedValue === '0');
        const titleFlag = (title === '' || title === undefined);
        const contentFlag = (content === '' || content === undefined);
        if (qnaCateFlag) {
            alert('유형을 선택해주세요.');
            return false;
        }
        if (titleFlag) {
            alert('제목을 입력해주세요.');
            return false;
        }
        if (contentFlag) {
            alert('내용을 입력해주세요.');
            return false;
        }
        if (window.confirm('해당 문의를 작성하시겠습니까?')) {
            sendQna();
        }
    }
    const sendQna = async () => {
        const resp = await axios.post('/api/sendQna', {
            group: 'qna',
            cate: selectedValue,
            title: title,
            content, content
        });
        if (resp.data === true) {
            navigate('/cs/csQnaList');
        }
    }
    return (
        <section className="cs">
            <Container id="qna-write">
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
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>고객의 소리</strong> </span>
                        </div>
                        <div className="write-content">
                            <p>롬복떡볶이 이용 중 불편하신 점을 문의주시면 최대한 빠른 시일내에 답변 드리겠습니다.</p>

                            <form action="#" method="post">
                                <h5>유형</h5>
                                <div className="find-csQna">
                                    <select value={selectedValue} onChange={handleSelectChange}>
                                        <option value='0'>-</option>
                                        {qnaCate.map((qna) => (
                                            <option value={qna.cateNo}>{qna.cateName}</option>
                                        ))}
                                    </select>
                                </div>
                                <h4>제목</h4>
                                <input type="text" name="title" placeholder="문의 제목을 입력해주세요." onChange={(e)=>{setTitle(e.target.value)}}/>
                                <h4>내용</h4>
                                <textarea onChange={(e)=>{setContent(e.target.value)}}></textarea>
                                <button type="button" className="btn" onClick={()=>{checkQna()}}>등록</button>
                            </form>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaWrite;