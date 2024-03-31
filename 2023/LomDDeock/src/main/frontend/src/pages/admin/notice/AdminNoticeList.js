import React, {useState, useEffect} from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {formatDate} from "../../../js/cs/formatData";

function NoticeList(){
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록
    const [pageData, setPageData ] =useState({}); // 페이지네이션
    const [page, setPage] = useState(1); // 페이지 번호

    const [activeItem, setActiveItem] = useState(null);

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(() => {
        axios.get(`/api/admin/notice/adminNoticeList?&page=${page}`)
            .then(res => {
                setListData(res.data.csList);
                setPageData(res.data);
                setPage(res.data.pg);
            })
            .catch(err => {
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    }, [page]);



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
            axios.delete(`/api/admin/notice/adminNoticeDelete/${cno}`)
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
                {listData.map((item,index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header onClick={() => handleItemClick(index)}>
                            {item.title}
                            <span className="date">{formatDate(item.rdate)}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className="typeReset" dangerouslySetInnerHTML={{ __html: item.content }} />
                            <p>
                                <button className="btnDelete" onClick={() => handleDelete(item, index)}>삭제</button>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <NoticePagination
                page={page}
                setPage={setPage}
                pageData={pageData}
            />
        </>
    )

}

function NoticePagination({page, setPage, pageData}) {
    const navigate = useNavigate();

    const handlePageChange = (newPage) => {
        setPage(newPage);
        navigate(`/admin/notice/adminNoticeList?page=${newPage}`);
    };

    const renderPaginationNumbers = () => {
        const pages = [];
        for (let i = pageData.start; i <= pageData.end; i++) {
            pages.push(
                <span
                    key={i}
                    className={`num${page === i ? ' on' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };


    return (
        <div className="paging">
            <span
                className={`num prev ${!pageData.prev ? ' disabled' : ''}`}
                onClick={() => handlePageChange(pageData.start - 1)}
            >
                &lt;
            </span>
            {renderPaginationNumbers()}
            <span
                className={`num next ${!pageData.next ? ' disabled' : ''}`}
                onClick={() => handlePageChange(pageData.end + 1)}
            >
                &gt;
            </span>
        </div>
    );

}

function adminNoticeList() {
    return (
        <section id="admin">
            <Container id="adminNoticeList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="new-notice-write">
                            <Link to="/admin/notice/adminNoticeWrite" className="btnWrite">새 공지사항 작성</Link>
                        </div>
                        <NoticeList/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminNoticeList;