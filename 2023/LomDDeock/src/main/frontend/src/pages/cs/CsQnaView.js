import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import { getQnaView, deleteCs } from '../../js/cs/qnaView.js';
import '../../css/cs/cs.css';
function QnaView() {
    const { cno } = useParams();
    const [qnaView, setQnaView] = useState({});
    const [replyForm, setReplyForm] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            const qnaInfo = await getQnaView(cno);
            setQnaView(qnaInfo);
            setReplyForm(qnaInfo.replyForm);
        };
        fetchData();
    },[])
    const qnaDelete = async () => {
        if (window.confirm('해당 문의글을 삭제하시겠습니까?')) {
            const flag = await deleteCs(cno);
            if (flag) {
                window.location.href = '/my/myQnaList';
            } else {
                alert('문제가 발생하였습니다.');
            }
        }
    }
    return (
        <section className="cs">
            <Container id="qna-view">
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

                        <div className="view">
                            <Table>
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>유형</td>
                                    <td>{qnaView.cateName}</td>
                                </tr>
                                <tr>
                                    <td>제목</td>
                                    <td>{qnaView.title}</td>
                                </tr>
                                <tr>
                                    <td className="align-center">내용</td>
                                    <td>{qnaView.content}</td>
                                </tr>
                                {replyForm === null ? null : (
                                    <tr>
                                        <td className="align-center">답변</td>
                                        <td>
                                            <span>
                                                {replyForm.reply}
                                            </span>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                            <div className="btn-qna">
                                <button className="btn" onClick={()=>{qnaDelete()}}>
                                    삭제
                                </button>
                                <button className="btn" onClick={()=>{window.location.href='/cs/CsQnaList'}}>
                                    목록
                                </button>
                            </div>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaView;