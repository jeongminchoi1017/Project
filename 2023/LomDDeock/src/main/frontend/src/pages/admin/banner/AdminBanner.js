import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import FileUpload from "../fileUpload/FileUpload";

function adminBanner() {
    return (
        <section id="admin">
            <Container id="adminBanner">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <p>
                                <label>배너1</label>
                                <button>삭제</button>
                            </p>
                            <FileUpload/>
                        </div>
                        <div>
                            <p>
                                <label>배너2</label>
                                <button>삭제</button>
                            </p>
                            <FileUpload/>
                        </div>
                        <button>완료</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminBanner;