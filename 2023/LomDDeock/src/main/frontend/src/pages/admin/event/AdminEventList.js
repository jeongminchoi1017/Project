import React, { useState, useEffect } from 'react';
import '../../../css/admin/admin.css';
import {Col, Container, Row, Pagination} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";
import { getEventList } from '../../../js/cs/eventList.js';
import { deleteCs } from '../../../js/cs/qnaView.js';

function AdminEventList() {
    // 이벤트 리스트
    const [eventList, setEventList] = useState([]);
    // 이벤트 리스트 페이징
    const [eventPage, setEventPage] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const eventInfo = await getEventList(1);
            setEventList(eventInfo.dtoList);
            setEventPage(eventInfo);
        };
        fetchData();
    },[])

    const handlePageClick = async (pageNumber) => {
      const eventInfo = await getEventList(pageNumber);
      setEventList(eventInfo.dtoList);
      setEventPage(eventInfo);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = eventPage.start; i <= eventPage.end; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={i === eventPage.pg} onClick={()=>{handlePageClick(i)}}>
              {i}
            </Pagination.Item>
          );
        }
        return pageNumbers;
    };
    const sendDeleteEvent = async (cno) => {
        if (window.confirm('해당 이벤트를 삭제하시겠습니까?')) {
            await deleteCs(cno);
            alert('삭제되었습니다.');
            handlePageClick(1);
        }
    }
    return (
        <section id="admin">
            <Container id="adminEventList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="eventRegisterButton">
                            <Link to="/admin/event/adminEventRegister">이벤트 등록</Link>
                        </div>
                        <div className="eventList">
                            <ul>
                                {eventList.map((event) => (
                                <li>
                                    <h3>
                                        <Link to={`/cs/CsEventView/${event.cno}`}>
                                            {event.title}
                                        </Link>
                                    </h3>
                                    <div>
                                        <button><Link to={`/admin/event/adminEventModify/${event.cno}`}>수정</Link></button>
                                        <button onClick={()=>{sendDeleteEvent(event.cno)}}>
                                            삭제
                                        </button>
                                    </div>
                                    <Link to="/cs/CsEventView">
                                        <img src="/events/thumbnail/mara.png" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <Pagination style={{justifyContent:'center'}}>
                            {eventPage.prev && (
                                <>
                                  <Pagination.Prev onClick={()=>{handlePageClick(eventPage.start - 1)}}/>
                                </>
                            )}
                            {renderPageNumbers()}
                            {eventPage.next && (
                                <>
                                    <Pagination.Next onClick={()=>{handlePageClick(eventPage.end + 1)}}/>
                                </>
                            )}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminEventList;