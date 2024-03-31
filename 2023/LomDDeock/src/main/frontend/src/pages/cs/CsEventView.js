import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion } from 'react-bootstrap';
import { getEventView } from '../../js/cs/eventView.js';
import '../../css/cs/cs.css';
import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
function EventView() {
    const { cno } = useParams();
    const [eventView, setEventView] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            const eventInfo = await getEventView(cno);
            setEventView(eventInfo);
        };
        fetchData();
    },[])
    return (
        <section className="cs">
            <Container id="event-view">
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
                        <article className="event-now">
                            <div className="event-title">
                                <h3>{eventView.title}</h3>
                            </div>
                            <div className="event-content">
                                <p>
                                    <img src="/events/view/event.jpg" alt={eventView.title}/><br/>
                                    {eventView.content}
                                </p>
                            </div>
                        </article>
                        <div className="goto-event">
                            <Link to="/cs/CsEventList" className="btn">목록</Link>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default EventView;