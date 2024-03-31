import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Tab, Tabs, Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../../css/main/main.css';
import React, {useState, useEffect} from "react";
import blankImage from '../../images/blank.png';
import axios from "axios";

function MainList () {
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(()=>{
        axios.get(`/api/main/list`)
            .then(response=>{
                setListData(response.data);
            })
            .catch(err=>{
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    },[]);
    return (
        <>
            {listData.map((item, index)=>(
                <article className="hit-item" key={index}>
                    <Link to="/menu/menuView" className="reset-a">
                        <img src={`/thumbs/${item.thumb}`} className="thumb" alt={item.menuName}/>
                        <div className="item-info">
                            <h5 className="item-name">
                                {item.menuName}
                            </h5>
                            <p className="item-etc">
                                {item.descript}
                            </p>
                            <p className="item-price">
                                {item.price}원
                            </p>
                        </div>
                    </Link>
                </article>
            ))}
        </>
    );
}
function Main() {
    return(
        <section className="main">
            <div className="banner">
                <img src="/test/27_pc.jpg" alt="배너"/>
            </div>
            {/* subMenu  시작 */}
            <div className="subMenu">
                <Container>
                    <Nav
                        activeKey="/home"
                        className="flex-content-center">
                        <Nav.Item>
                            <Nav.Link href="/menu/menuList" >
                                롬떡메뉴
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/cs/CsEventList">
                                이벤트
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
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
                        <Nav.Item>
                            <Nav.Link href="/brand/introduce">
                                브랜드 소개
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
            {/* subMenu 끝 */}
            {/* 인기상품 시작 */}
            <section className="hit">
                <div className="description">
                    <span>
                        인기상품
                    </span>
                </div>
                <MainList/>
            </section>
            {/* 인기상품 끝 */}
        </section>
    )
}

export default Main;