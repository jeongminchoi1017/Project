import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Col, Container, Row, InputGroup, Image } from 'react-bootstrap';
import PopupDom from '../../popup/PopupDom';
import PopupPostCode from '../../popup/PopupPostCode';
import { emailConfirm, getEmailCode, emailCodeConfirm } from '../../js/member/emailConfirm.js';
import { register } from '../../js/member/register.js';
import '../../css/user/user.css';
import logo from "../../images/LomDDeock-letterlogo-korean.png";
function Register(){
    const navigate = useNavigate();
    // 유효성 검사
    const rePass = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/;
    const reHp      = /^01(?:0|1|[6-9])-(?:\d{4})-\d{4}$/;

    // 폼 전송 시 유효성 체크
    const [formCheck, setFormCheck] = useState({
        email: false,
        password: false,
        hp: false
    });

    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = (data) => {
        const zip = document.getElementsByName('zip');
        const addr1 = document.getElementsByName('addr1');
        setZip(data.zip);
        setAddr1(data.addr);
        zip[0].value = data.zip;
        addr1[0].value = data.addr;
        setIsPopupOpen(false)
    }

    // 이메일 인증관련 변수
    const [email, setEmail] = useState('');
    const [emailCode, setEmailCode] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('naver.com'); // 기본 도메인 설정
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const domainChange = (e) => {
        setSelectedDomain(e.target.value);
    }

    // 이메일로 인증코드 전송
    const sendCode = async () => {
        const fullEmail = email + '@' + selectedDomain;
        const flag = await emailConfirm(fullEmail);
        if (flag) {
            alert('이미 등록된 이메일 주소입니다.');
            return false;
        }
        // 인증번호 전송 시 이메일 변동 불가능 하도록 수정
        document.getElementById('inputEmail').disabled = true;
        document.getElementById('selectDomain').disabled = true;
        document.getElementById('sendCode').disabled = true;
        document.getElementById('inputEmailCode').disabled = false;
        const emailCodeText = document.getElementById('emailCodeText');
        emailCodeText.style.display = '';
        emailCodeText.style.color = 'red';

        // 인증코드 전송 (성공 시 true, 실패 시 false 반환)
        const codeFlag = await getEmailCode(fullEmail)
        if (codeFlag) {
            emailCodeText.style.color = 'green';
            emailCodeText.innerText = '이메일을 확인 후 인증코드를 입력해주세요.';
        } else {
            emailCodeText.style.color = 'red';
            emailCodeText.innerText = '인증코드 전송이 실패했습니다. 새로고침 후 다시 시도해주세요.';
        }
    }

    // 인증코드 검증
    const confirmCode = async () => {
        const emailCodeText = document.getElementById('emailCodeText');

        // 인증코드 검증 (성공 시 true, 실패 시 false 반환)
        const flag = await emailCodeConfirm(emailCode);
        if (flag) {
            emailCodeText.style.color = 'green';
            emailCodeText.innerText = '이메일 인증이 완료되었습니다.';
            setFormCheck(prevState => ({
              ...prevState,
              ['email']: true
            }));
            document.getElementById('inputEmailCode').disabled = true;
            document.getElementById('buttonEmailCode').disabled = true;
        } else {
            emailCodeText.style.color = 'red';
            emailCodeText.innerText = '이메일 인증이 실패하였습니다. 다시 시도해주세요.';
            setFormCheck(prevState => ({
              ...prevState,
              ['email']: false
            }));
        }
    }

    const [password, setPassword] = useState('');
    useEffect(()=>{passwordConfirm()},[password])
    // 비밀번호 검증
    const passwordConfirm = async () => {
        const passwordConfirmText = document.getElementById('passwordConfirmText');
        const password2 = document.getElementById('passwordConfirm').value;
        if (password === '' && password2 === '') {
            setFormCheck(prevState => ({
              ...prevState,
              ['password']: false
            }));
            passwordConfirmText.style.display = 'none';
            return false;
        }
        passwordConfirmText.style.display = '';
        if (password == password2) {
            if (password.match(rePass)) {
                passwordConfirmText.style.color = 'green';
                passwordConfirmText.innerText = '비밀번호가 일치합니다.';
                setFormCheck(prevState => ({
                  ...prevState,
                  ['password']: true
                }));
            } else {
                passwordConfirmText.style.color = 'red';
                passwordConfirmText.innerText = '비밀번호는 영문, 숫자, 특수문자 조합 8~12자리여야합니다.';
                setFormCheck(prevState => ({
                  ...prevState,
                  ['password']: false
                }));
            }
        } else {
            passwordConfirmText.style.color = 'red';
            passwordConfirmText.innerText = '비밀번호가 일치하지 않습니다.';
            setFormCheck(prevState => ({
              ...prevState,
              ['password']: false
            }));
        }
    }

    // 전화번호 검증
    const [hp, setHp] = useState('');
    useEffect(()=>{hpConfirm()},[hp])
    const hpConfirm = async() => {
        const hpConfirmText = document.getElementById('hpConfirmText');
        if (hp.match(reHp) || hp === '') {
            hpConfirmText.style.display = 'none';
            setFormCheck(prevState => ({
              ...prevState,
              ['hp']: true
            }));
        } else {
            hpConfirmText.style.display = '';
            setFormCheck(prevState => ({
              ...prevState,
              ['hp']: true
            }));
        }
    }

    const [zip, setZip] = useState('');
    const [addr1, setAddr1] = useState('');
    const [addr2, setAddr2] = useState('');
    // 폼 전송시 유효성 검사
    const formConfirm = async(e) => {
        e.preventDefault();
        if (!formCheck.email) {
            alert('이메일을 확인하십시오.');
            return false; // 폼 전송 취소
        } else if(!formCheck.password) {
            alert('비밀번호를 확인하십시오.');
            return false; // 폼 전송 취소
        } else if(!formCheck.hp) {
            alert('전화번호를 확인하십시오.');
            return false; // 폼 전송 취소
        }
        const formData = {
            email: email + '@' + selectedDomain,
            password: password,
            hp: hp,
            zip: zip,
            addr1: addr1,
            addr2: addr2
        }
        const flag = await register(formData);
        if (flag) {
            alert('회원가입이 성공하였습니다.');
            navigate('/user/login');
        } else {
            alert('회원가입에 오류가 발생했습니다.');
        }
        return true;
    }
    return(
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 7, offset: 3 }}>
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2>회원가입</h2>
                    <Form onSubmit={formConfirm}>
                        <Form.Label>이메일 아이디</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="이메일 주소를 입력하세요"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name="email"
                                id="inputEmail"
                                onChange={emailChange}
                                required
                            />
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Select name="domain" id="selectDomain" onChange={domainChange}>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                                {/* 다른 이메일 옵션들을 추가할 수 있습니다 */}
                            </Form.Select>
                            <Button variant="outline-secondary" id="sendCode" onClick={sendCode}>
                                인증번호 전송
                            </Button>
                        </InputGroup>
                        <p id="emailCodeText" style={{display:'none', fontSize: '12px'}}>인증번호 전송 중입니다. 잠시만 기다려주세요.</p>
                        <Form.Label>인증번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="인증번호를 입력하세요."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                id="inputEmailCode"
                                onChange={(event) => setEmailCode(event.target.value)}
                                disabled
                                required
                            />
                            <Button variant="outline-secondary" id="buttonEmailCode" onClick={confirmCode}>
                                인증번호 확인
                            </Button>
                        </InputGroup>

                        <Form.Label>비밀번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="password" type="password" placeholder="비밀번호를 입력하세요" required
                            onChange={(event) => setPassword(event.target.value)}/>
                        </InputGroup>

                        <Form.Label>비밀번호 확인</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control id="passwordConfirm" type="password" placeholder="비밀번호 확인" required
                            onChange={(e) => {passwordConfirm()}}/>
                        </InputGroup>
                        <p id="passwordConfirmText" style={{display:'none', fontSize: '12px'}}>비밀번호가 일치하지 않습니다</p>
                        <Form.Label>전화번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="hp" type="tel" placeholder="전화번호를 입력하세요" required
                            onChange={(event) => setHp(event.target.value)}/>
                        </InputGroup>
                        <p id="hpConfirmText" style={{display:'none', fontSize: '12px', color: 'red'}}>유효하지 않은 휴대폰번호 입니다.</p>
                        <Form.Label>주소</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="우편번호"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name="zip"
                                onChange={(event) => setZip(event.target.value)}
                                required
                            />
                            <Button variant="outline-secondary" id="zipcodeButton" onClick={openPostCode}>
                                우편번호 찾기
                            </Button>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPostCode onClose={closePostCode} />
                                    </PopupDom>
                                )}
                            </div>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder="주소" name='addr1'
                             onChange={(event) => setAddr1(event.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder="상세주소 입력" name='addr2'
                            onChange={(event) => setAddr2(event.target.value)}/>
                        </InputGroup>
                        <div className="text-center">
                            <Button variant="danger" type="submit">
                                회원가입
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default  Register;