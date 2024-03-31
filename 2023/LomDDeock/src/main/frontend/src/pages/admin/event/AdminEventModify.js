import React, { useState, useEffect } from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FileUpload from "../fileUpload/FileUpload";
import {Link, useParams, useNavigate} from "react-router-dom";
import { getEventView } from '../../../js/cs/eventView.js';
import axios from 'axios';
function AdminEventModify() {
    const navigate = useNavigate();
    const { cno } = useParams();
    const [eventView, setEventView] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
            const eventInfo = await getEventView(cno);
            setEventView(eventInfo);
            setTitle(eventInfo.title);
            setContent(eventInfo.content);
        };
        fetchData();
    },[])
    function checkEvent() {
        const titleFlag = (title === '' || title === undefined);
        const contentFlag = (content === '' || content === undefined);
        if (titleFlag) {
            alert('제목을 입력해주세요.');
            return false;
        }
        if (contentFlag) {
            alert('내용을 입력해주세요.');
            return false;
        }
        if (window.confirm('해당 이벤트를 수정하시겠습니까?')) {
            sendEvent();
        }
    }
    const sendEvent = async() => {
        const resp = await axios.post('/api/modifyEvent',{
            cno: cno,
            title: title,
            content: content,
        });
        alert('수정되었습니다.');
        navigate('/admin/event/adminEventList');
    }
    return (
        <section id="admin">
            <Container id="adminEventManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <div>
                                <h3>이벤트 수정</h3>
                            </div>
                            <label>이벤트 제목</label>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="제목을 입력해주세요."
                                value={title}
                                onChange={(e)=>{setTitle(e.target.value)}}/>
                            </InputGroup>
                            <label>이미지 업로드</label>
                            <FileUpload/>
                            <label>설명추가</label>
                            <InputGroup className="mb-3">
                                <Form.Control as="textarea" aria-label="With textarea" placeholder="답변을 입력해주세요."
                                value={content}
                                onChange={(e)=>{setContent(e.target.value)}}/>
                            </InputGroup>
                            <div>
                                <Link to="/admin/event/adminEventList" className="btnCancel">취소</Link>
                                <Link to="#" className="btnRegister" onClick={()=>{checkEvent()}}>수정완료</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminEventModify;