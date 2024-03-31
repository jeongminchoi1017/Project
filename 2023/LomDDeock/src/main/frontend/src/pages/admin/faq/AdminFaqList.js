import React, {useState, useEffect} from "react";
import '../../../css/admin/admin.css';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link, useLocation } from "react-router-dom";
import axios from "axios";
import FaqPagination from "./proc/FaqPagination";
import FaqCate from "./proc/FaqCate";

// 년,월,일만 출력
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
}
function FaqList(){
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록
    const [pageData, setPageData ] =useState({}); // 페이지네이션
    const [page, setPage] = useState(1); // 페이지 번호
    // 카테고리 추출
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cate = searchParams.get('cate');
    // 수정될 데이터
    const [selectedItem, setSelectedItem] = useState(null);
    const [modifyData, setModifyData] = useState(null);
    // 게시글 삭제 여부
    const [activeItem, setActiveItem] = useState(null);

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(() => {
        axios.get(`/api/admin/faq/adminFaqList?cate=${cate || ''}&page=${page}`)
            .then(res => {
                setListData(res.data.csList);
                setPageData(res.data);
                setPage(res.data.pg);
            })
            .catch(err => {
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    }, [cate, page]);


    /* ------------ 수정모드 -------------- */
    const changeData = (item, index) => {
        // 수정할 데이터 가져오기
        setSelectedItem({ item, index });
    };
    useEffect(() => {
        // selectedItem이 변경될 때마다 로그를 출력
        console.log(selectedItem);
    }, [selectedItem]);

    // 수정된 데이터 전송
    const handleModifyComplete = async () => {
        const modifiedItem = {
            ...selectedItem.item,
            content: modifyData
        };
        try {
            const response = await axios.put('/api/admin/faq/adminFaqModify', modifiedItem);
            // 서버로부터의 응답에서 수정 후 데이터 추출
            const modifiedDataFromServer = response.data;

            // 수정 후의 데이터로 상태 업데이트
            setSelectedItem(null);

            // 수정 목록 업데이트
            setListData(prevListData => {
                const newListData = [...prevListData];
                newListData[selectedItem.index] = modifiedDataFromServer;
                return newListData;
            });

            setModifyData(null);
            console.log("전송 성공!");
        } catch (error) {
            console.error('데이터 전송 실패:', error);
        }
    };

    // 수정 모드 폼
    const modifyBoard = selectedItem && (
        <Accordion.Body>
            <form>
                <p>
                    <textarea
                        defaultValue={selectedItem.item.content}
                        name="content"
                        onChange={e => setModifyData( e.target.value )}>
                    </textarea>
                </p>
                <p>
                    <button type="button" className="btnModify" onClick={handleModifyComplete}>완료</button>
                </p>
            </form>
        </Accordion.Body>
    );

    /* ------------ 삭제 -------------- */
    const handleItemClick = (index) => {
        if (activeItem === index) {
            // 현재 아이템이 열려있으면 닫기
            setActiveItem(null);
        } else {
            // 다른 아이템을 클릭하면 해당 아이템 열기
            setActiveItem(index);
        }
    };

    const handleDelete = (item, index) => {
        console.log(item, index);
        const cno = item.cno;

        if(window.confirm('해당 게시글을 삭제하시겠습니까?')){
            axios.post(`/api/admin/faq/adminFaqDelete/${cno}`)
                .then(res =>{
                    alert("정상적으로 게시글이 삭제되었습니다.");

                    // 삭제가 성공하면 FAQ 목록에서 삭제된 항목을 지워서 상태를 업데이트
                    setListData(prevListData => {
                        const newListData = [...prevListData];
                        newListData.splice(index, 1);
                        return newListData;
                    });

                    setActiveItem(null);

                })
                .catch(err => {
                    alert("정상적으로 삭제되지 못하였습니다.");
                    console.log('error : '+err);
                });
        }
    }

    return (
        <>
            <Accordion activeKey={activeItem !== null ? activeItem.toString() : null}>
                {listData.map((item, index) => (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                            <Accordion.Header onClick={() => handleItemClick(index)}>
                                [{item.cateName}]{item.title}
                                <span className="date">{formatDate(item.rdate)}</span>
                            </Accordion.Header>
                            {selectedItem && selectedItem.index === index ? modifyBoard : (
                                <Accordion.Body>
                                    <p>
                                        {item.content.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    <p>
                                        <button className="btnModify" onClick={() => changeData(item, index)}>수정</button>
                                        <button className="btnDelete" onClick={() => handleDelete(item, index)}>삭제</button>
                                    </p>
                                </Accordion.Body>
                            )}
                        </Accordion.Item>
                ))}
            </Accordion>
            <FaqPagination
                page={page}
                setPage={setPage}
                pageData={pageData}
            />
        </>
    )
}
function AdminFaqList() {
    return (
        <section id="admin">
            <Container id="adminFaqList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="faqRegisterButton">
                            <Link to="/admin/faq/adminFaqRegister" className="btnWrite">자주묻는질문 등록</Link>
                        </div>
                        <FaqCate/>
                        <FaqList/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminFaqList;