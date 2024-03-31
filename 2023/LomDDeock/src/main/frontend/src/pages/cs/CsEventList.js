import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion, Pagination } from 'react-bootstrap';
import { getEventList } from '../../js/cs/eventList.js';
import '../../css/cs/cs.css';
function EventList() {
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
    return (
        <section className="cs">
            <Container id="event-list">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/CsNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>이벤트</strong> </span>
                        </div>
                        <div className="event-div">
                            <ul>
                                {eventList.map((event) => (
                                <li>
                                    <h3>
                                        <Link to={`/cs/CsEventView/${event.cno}`}>
                                            {event.title}
                                        </Link>
                                    </h3>
                                    <Link to={`/cs/CsEventView/${event.cno}`}>
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
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default EventList;