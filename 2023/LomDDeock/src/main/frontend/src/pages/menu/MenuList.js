import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Tab, Tabs, Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../../css/menu/menuList.css';
import MainMenu from './category/MainMenu';
import SideMenu from './category/SideMenu';
import DrinkMenu from './category/DrinkMenu';
import axios from "axios";
import MenuPagination from "./proc/MenuPagination";

function MenuList() {
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록
    const [pageData, setPageData ] =useState({}); // 페이지네이션
    const [page, setPage] = useState(1); // 페이지 번호
    const [cate, setCate] = useState("normal"); // 현재 게시글 목록

    const handleTabSelect = (key) => {
        // key에 따라 cate 값을 세팅
        switch (key) {
            case "main":
                setCate("normal");
                break;
            case "side":
                setCate("side");
                break;
            case "drinkOrOthers":
                setCate("drinkOrOthers");
                break;
            default:
                // 기본값 설정 또는 에러 처리
                setCate("normal");
                break;
        }
    };

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(()=>{
        console.log("cate : "+cate);
        console.log("page : "+page);
        axios.get(`/api/menu/MenuList?cate=${cate || ''}&page=${page || ''}&size=6`)
            .then(res=>{
                const data = res.data;
                if(data.cate === "normal"){
                    setListData(data.menues);
                }else {
                    setListData(data.sides);
                }
                setPageData(data);
                setPage(data.currentPage);
                console.log("page : "+page);
            })
            .catch(err=>{
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    },[cate, page]);
    return (
        <section className="menuList">
            <Tabs
                defaultActiveKey="main"
                id="uncontrolled-tab-example"
                onSelect={handleTabSelect} // onSelect 콜백 등록
                className="mb-3">
                <Tab eventKey="main" title="메인메뉴" onClick={()=>setCate("normal")}>
                    <MainMenu
                        listData={listData}
                        cate={cate}
                    />
                </Tab>
                <Tab eventKey="side" title="사이드" onClick={()=>setCate("side")}>
                    <SideMenu
                        listData={listData}
                        cate={cate}
                    />
                </Tab>
                <Tab eventKey="drinkOrOthers" title="음료" onClick={()=>setCate("drinkOrOthers")}>
                    <DrinkMenu
                        listData={listData}
                        cate={cate}
                    />
                </Tab>
            </Tabs>
            <MenuPagination
                page={page}
                setPage={setPage}
                pageData={pageData}
            />
        </section>
    )
}

export default MenuList;