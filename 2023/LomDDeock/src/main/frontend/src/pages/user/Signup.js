import React, {useEffect, useState} from "react";
import { Row, Col, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../css/user/user.css';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import logo from "../../images/LomDDeock-letterlogo-korean.png";
function Signup () {
    const navigate = useNavigate();
    let [termsCheck, setTermsCheck] = useState({
        agree1: false,
        agree2: false,
        agree3: false,
        agree4: false
    });
    let [terms, setTerms] = useState({})
    useEffect(() => {
        axios.get(`/api/terms`).then(response => {
            setTerms(response.data);
        })
    }, []);
    const checkToggleAll = (e) => {
        const isChecked = e.target.checked;
        // 전체 체크
        setTermsCheck({
            agree1: isChecked,
            agree2: isChecked,
            agree3: isChecked,
            agree4: isChecked
        });
        const checkboxs = document.getElementsByName("group1");
        for (let i = 0; i < checkboxs.length; i++) {
            checkboxs[i].checked = isChecked;
        }
    }
    const checkToggle = (e, name) => {
        const isChecked = e.target.checked;
        setTermsCheck(prevState => ({
          ...prevState,
          [name]: isChecked
        }));
        let flag = true;
        const checkboxs = document.getElementsByName("group1");
        for (let i = 0; i < checkboxs.length; i++) {
            if (!checkboxs[i].checked) {
                flag = false;
            }
        }
        document.getElementById("checkAll").checked = flag;
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 7, offset: 3 }} id="loginCol">
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2>이용약관</h2>
                    <div className="mb-3">
                        <Form.Check
                            reverse
                            label="전체 동의"
                            id="checkAll"
                            type='checkbox'
                            onClick={(e)=>{return checkToggleAll(e)}}
                        />
                    </div>
                    <Card>
                        <Card.Header>구매회원약관</Card.Header>
                        <Card.Body>
                            <Card.Text>{terms.terms}</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                                onClick={(e)=>{return checkToggle(e, 'agree1')}}
                            />
                        </div>
                        <Card.Header>전자금융거래</Card.Header>
                        <Card.Body>
                            <Card.Text>{terms.finance}</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                                onClick={(e)=>{return checkToggle(e, 'agree2')}}
                            />
                        </div>
                        <Card.Header>위치정보약관</Card.Header>
                        <Card.Body>
                            <Card.Text>{terms.location}</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                                onClick={(e)=>{return checkToggle(e, 'agree3')}}
                            />
                        </div>
                        <Card.Header>개인정보처리</Card.Header>
                        <Card.Body>
                            <Card.Text>{terms.privacy}</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                                onClick={(e)=>{return checkToggle(e, 'agree4')}}
                            />
                        </div>
                    </Card>
                    <div className="text-center">
                        <Button variant="danger"
                        onClick={() => {
                            if (termsCheck.agree1 && termsCheck.agree2 && termsCheck.agree3 && termsCheck.agree4) {
                                navigate('/user/register');
                            } else {
                                alert('필수 약관에 동의해주세요.')
                            }
                        }}
                        >
                        동의하기</Button>{' '}
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export  default  Signup;