import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../logout'
import '../css/layout.css';
import '../css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/LomDDeock-letterlogo-korean.png';
import character from '../images/LomDDeock-character.png';
import Image from "react-bootstrap/Image";
import pepperImg from "../images/pepper.png";
function Header () {
    const navigate = useNavigate();
    const [memberEmail] = useState(localStorage.getItem("email"));
    return (
        <header id="header">
            <div className=" d-flex justify-content-center">
                <Link to="/">
                    <div>
                        <img src={logo} alt="로고" className="logo"/>
                        <img src={character} alt="로고"  className="character"/>
                    </div>
                </Link>
                <Navbar>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {memberEmail === null ?
                            <Nav.Link href="/user/login">로그인</Nav.Link> :
                            <>
                            <Nav.Link onClick={async ()=>{logout()}}>
                                로그아웃
                            </Nav.Link>
                            <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/my/myInfo">
                                    나의 정보
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myCoupon">
                                    쿠폰함
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myOrder">
                                    주문내역
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myPick">
                                    나의 찜
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myQnaList">
                                    나의 문의내역
                                </NavDropdown.Item>
                            </NavDropdown>
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Nav as="ul" className="justify-content-center">
                <Nav.Item as="li">
                    <Nav.Link href="/menu/menuList">롬떡 메뉴</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/cs/CsEventList">이벤트</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <NavDropdown title="고객안내" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/cs/CsNotice">
                            공지사항
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/cs/CsEventList">
                            이벤트
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/cs/CsFaq">
                            자주묻는 질문
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/cs/CsQnaList">
                            고객의 소리
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/brand/introduce">브랜드 소개</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Header;