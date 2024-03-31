import React, {useEffect, useMemo, useRef } from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import { useState } from "react";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link, useNavigate} from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

function Write() {
    const navigate = useNavigate();
    // 전송할 데이터
    const [content, setContent] = useState("");
    console.log(content);
    const [title, setTitle] = useState("");
    const [registant, setRegistant] = useState('');
    const quillRef = useRef(null);

    // 최종 전송
    const [formData, setFormData] = useState(new FormData());

    // 제목 내용 수집
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // 로그인 된 이메일 가져오기
    useEffect(()=>{
        const email = localStorage.getItem('email');
        if (email) {
            setRegistant(email.slice(0, 3) + '***');
        }
    },[]);

    // 전송준비
    const submitForm  = (formData) => {
        formData = formData || new FormData();
        
        formData.append('title', title);
        formData.append('content', content);
        formData.append('registant', registant);
        formData.append('group', 'notice');
        
        // 빈칸확인
        function isFieldEmpty(value) {
            return !value || value.trim() === '';
        }

        if (isFieldEmpty(title) && isFieldEmpty(content) && isFieldEmpty(registant)) {
            alert('빈칸이 없는지 다시 확인해주세요.');
            setFormData(null);
            return;
        }

        axios.post('/api/admin/notice/adminNoticeWrite', formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(res => {
                alert("등록되었습니다.");
                navigate("/admin/notice/adminNoticeList");

                setFormData(null);
            })
            .catch(err => {
                alert("전송에 문제가 발생했습니다 로그를 확인해주세요.");
                console.log("error : ",err);
                setFormData(null);
            });
    }
    
    // 전송 결정
    const handleSubmit = (event) => {
        event.preventDefault();

        submitForm(formData);
    }


    // 에디터 설정
    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{'header': [1, 2, 3, 4, 5, 6, false]}],
                    [{'align': []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 'link'],
                    [{'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color']}, {'background': []}],
                    ['image', 'video'],
                    ['clean'],
                ],
            }, // toolbar
            /* 추가된 코드 */
            ImageResize: {
                parchment: Quill.import('parchment')
            }
        }; // return
    }, []);


    const formats = [
        'header','align',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image','color','background','video','clean'
    ];

    return (
        <>
            <div>
                <form encType="multipart/form-data">
                    <h4>공지사항 제목 <em className="write-required">(필수)</em></h4>
                    <input type="text" name="title" placeholder="제목을 작성해주세요." onChange={handleTitleChange}/>
                    <h4>내용 입력 <em className="write-required">(필수)</em></h4>
                    <ReactQuill
                        ref={quillRef}
                        style={{ width: "100%", height: "300px" }}
                        onChange={setContent}
                        modules={modules}
                        formats={formats}
                    />
                    <div className="links">
                        <Link to="/admin/notice/adminNoticeList" className="btnWrite noticeList">취소</Link>
                        <button type="button" className="btnWrite noticeReg" onClick={handleSubmit}>작성</button>
                    </div>
                </form>
            </div>
        </>
    );
}
function AdminNoticeWrite() {
    return (
        <section id="admin">
            <Container id="adminNoticeWrite">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col className="write-content">
                        <div>
                            <h3>공지사항 작성</h3>
                        </div>
                        <div>
                            <Write/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AdminNoticeWrite;