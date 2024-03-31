import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import {Navbar, Container, Row, Col, Button, Form, Image} from "react-bootstrap";
import KakaoLogin from "react-kakao-login";
/* interceptor에서 헤더에 토큰을 자동으로 장착해주는 axios */
import axios from '../../interceptor.js';
import getUserInfo from '../../getUserInfo';
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../store/Auth';
import { loginForm } from '../../js/member/login.js';
import '../../css/user/user.css';
import logo from "../../images/LomDDeock-letterlogo-korean.png";

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    // 카카오 로그인 clientId
    const kakaoClientId = '9169f348c8c5bb0b3fc8f2e08db92d78'

    // 카카오 로그인 API 성공 시 호출
    const kakaoOnSuccess = async (data)=>{
        localStorage.setItem("kakao_token", data.response.access_token);
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
        const email = data.profile.kakao_account.email;
        // 해당 메일로 만들어진 계정이 있는지 확인
        const check = await performCheck(email);
        if (check) {
            // 계정이 없을경우 새로 생성
            signUp(email);
        }
        // 계정 로그인
        signIn(email);
    }
    // 카카오 로그인 API 실패 시 호출
    const kakaoOnFailure = (error) => {
        console.log(error);
        alert('로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.')
    };
    // 카카오 로그인 시 해당 계정이 서버에 등록 된 계정인지 확인
    const performCheck = async (email) => {
        return axios.get('/api/social/check/KAKAO?email=' + email)
            .then((res) => {
                // true or false를 리턴한다
                return res.data;
            })
            .catch((error) => {
                console.error("Error during check:", error);
                throw error;
            });
    }
    // 소셜 로그인 시 해당 메일로 등록된 계정이 없을 경우 계정 가입
    const signUp = async (email) => {
        try {
            const response = await axios.post('/api/social/signup', {
                email: email
            });
        } catch (error) {
            // 오류가 발생한 경우의 추가 로직
            console.error('Error during sign-up:', error);
        }
    }
    // 소셜 로그인 토큰 발행
    const signIn = async (email) => {
        try {
            const response = await axios.post('/api/social/signin', {
                email: email
            });
            localStorage.setItem("email", email);
            // localStorage에 token이라는 이름으로 accessToken을 발행
            localStorage.setItem("token", response.data.accessToken);
            setRefreshToken(response.data.refreshToken);
            console.log('accessToken: ' + response.data.accessToken);
            // 로그인 성공 후 메인 페이지로 이동
            navigate("/");
        } catch (error) {
            // 오류가 발생한 경우의 추가 로직
            console.error('Error during sign-in:', error);
        }
    }
    const localSignIn = async () => {
        const token = await loginForm(loginEmail, loginPassword);
        if (token === '') {
            alert('이메일 혹은 비밀번호가 틀립니다.')
            return false;
        }
        localStorage.setItem("email", loginEmail);
        // localStorage에 token이라는 이름으로 accessToken을 발행
        localStorage.setItem("token", token.accessToken);
        setRefreshToken(token.refreshToken);
        navigate("/");
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 5, offset: 3 }} id="loginCol">
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2 class="title">로그인</h2>

                    <div>

                    <li id="kkLoginBtn">
                        <KakaoLogin
                              token={kakaoClientId}
                              onSuccess={kakaoOnSuccess}
                              onFail={kakaoOnFailure}
                              className="w100p kkLogin"
                          />
                    </li>
                    <li id="nvLoginBtn">
                        <a href="#">네이버 로그인</a>
                    </li>
                    <li id="ggLoginBtn">
                        <a href="#">구글 로그인</a>
                    </li>
                        <strong>또는</strong>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event) => setLoginEmail(event.target.value)}>
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="email" placeholder="이메일 주소 입력" />
                            <Form.Text className="text-muted" >
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(event) => setLoginPassword(event.target.value)}>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="자동로그인" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="danger" type="button" onClick={() => {localSignIn()}}>
                                로그인
                            </Button>
                        </div>
                        <span>
                            <Link to="/user/confirmEmail">비밀번호 재설정</Link>
                            <Link to="/user/signup">회원가입</Link>
                        </span>
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </Container>

    );

}

export  default  Login;