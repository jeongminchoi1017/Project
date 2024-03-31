import '../../css/admin/admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, ListGroup, Row, Container} from "react-bootstrap";
import React from "react";
import AdminAsideMenu from "./AdminAsideMenu";
import MenuSalesStatusData from "./chartOnIndex/MenuSalesStatusChartData";
import SideSalesStatusData from "./chartOnIndex/SideSalesStatusChartData";
import ToppingSalesStatusData from "./chartOnIndex/ToppingSalesStatusChartData";
import MenuSalesStatusChart from "./chartOnIndex/MenuSalesStatusChart";
import SideSalesStatusChart from "./chartOnIndex/SideSalesStatusChart";
import ToppingSalesStatusChart from "./chartOnIndex/ToppingSalesStatusChart";

function adminIndex() {
    return (
        <section id="admin">
            <Container id="adminIndex">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col className="statusArea">
                        {/* 운영현황 */}
                        <article className="OperationStatus">
                            <h5>✔ 운영현황</h5>
                            <div>
                                <strong>주문 건수</strong>
                                <span>300</span>
                            </div>
                            <div>
                                <strong>취소 건수</strong>
                                <span>30</span>
                            </div>
                            <div>
                                <strong>회원가입</strong>
                                <span>200</span>
                            </div>
                            <div>
                                <strong>방문자 수</strong>
                                <span>1,000</span>
                            </div>
                            <div>
                                <strong>고객의소리 문의 수</strong>
                                <span>115</span>
                            </div>
                        </article>
                        {/* 매출현황 */}
                        <div className="SalesStatus">
                            <div className="menuSalesStatus">
                                <h5>✔ 매출현황</h5>
                                <MenuSalesStatusChart data={MenuSalesStatusData}/>
                            </div>
                            <div className="sideSalesStatus">
                                <h6>- 사이드디시 매출현황</h6>
                                <SideSalesStatusChart data={SideSalesStatusData}/>
                            </div>
                            <div className="toppingSalesStatus">
                                <h6>- 11월 토핑 매출현황</h6>
                                <ToppingSalesStatusChart data={ToppingSalesStatusData}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminIndex;