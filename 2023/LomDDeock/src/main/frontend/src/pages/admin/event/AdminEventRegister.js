import React, { useState, useEffect,useRef } from 'react';
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FileUpload from "../fileUpload/FileUpload";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function AdminEventRegister() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function checkQna() {
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
        if (window.confirm('해당 문의를 작성하시겠습니까?')) {
            sendEvent()
        }
    }
    const sendEvent = async() => {
        const resp = await axios.post('/api/sendEvent',{
            title: title,
            content: content,
            group: 'event'
        });
        alert('저장되었습니다.');
        navigate('/admin/event/adminEventList');
    }

    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [displayImage, setDisplayImage] = useState(false);

    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        if (!imgRef.current || !imgRef.current.files || imgRef.current.files.length === 0) {
            console.error("No file selected");
            return;
        }

        console.log(imgRef.current);
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
            setDisplayImage(true);
        };
    };

    useEffect(() => {
        console.log(imgRef.current);
        if (imgRef.current && imgRef.current.files.length > 0) {
            const file = imgRef.current.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile(reader.result);
            };
        }
    }, [imgRef]);



    return (
        <section id="admin">
            <Container id="adminEventManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <div>
                                <h3>이벤트 등록</h3>
                            </div>
                            <label>이벤트 제목</label>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="제목을 입력해주세요." onChange={(e)=>{setTitle(e.target.value)}}/>
                            </InputGroup>
                            <label>썸네일 이미지 업로드</label> <br/>
                            <div className="event-thumb">
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="profileImg"
                                    onChange={saveImgFile}
                                    ref={imgRef}
                                />
                                <br/>
                                <img
                                    style={{ display: displayImage ? "block" : "none" }}
                                    src={imgFile ? imgFile : null }
                                    alt="프로필 이미지"
                                    className="thumb-image"
                                />
                            </div>
                            <br/>
                            <label>이미지 업로드</label>
                            <FileUpload/>
                            <label>설명추가</label>
                            <InputGroup className="mb-3">
                                <Form.Control as="textarea" aria-label="With textarea" placeholder="답변을 입력해주세요." onChange={(e)=>{setContent(e.target.value)}}/>
                            </InputGroup>
                            <div className="event-btns">
                                <Link to="/admin/event/adminEventList" className="btnCancel">취소</Link>
                                <Link to="#" className="btnRegister" onClick={()=>{checkQna()}}>등록</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminEventRegister;