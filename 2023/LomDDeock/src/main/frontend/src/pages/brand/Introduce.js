import React from 'react';
import { Container } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import logo from '../../images/LomDDeock-logo-removebg.png';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import '../../css/brand/introduce.css';
import Icon from '@mdi/react';
import { mdiAlphaBBox, mdiDomain, mdiMap } from '@mdi/js';


function Introduce (){
    return(
        <section id="introduce">
            <div className="pin-spacer">
                <div className="bg"></div>
            </div>
            <Container>
                <div className="link_menu">
                    <ul>
                        <li><a href="#brandIntro"><Icon path={mdiDomain} size={3} /></a></li>
                        <li><a href="#BI"><Icon path={mdiAlphaBBox} size={3} /></a></li>
                        <li><a href="#map"><Icon path={mdiMap} size={3} /></a></li>
                    </ul>
                </div>
                <div className="brandIntro" id="brandIntro">
                    <h3>브랜드 소개</h3>
                    <div className="brandContent">
                        <p>롬복떡복이 LomDDeock</p>
                        <p>
                            세상에 떡볶이는 많습니다.<br/>
                            그러나 맛있는 떡볶이는 흔치 않습니다.
                        </p>
                        <p>
                            맛있는, 다양한 떡볶이 맛으로 수많은 고객들을 매니아로 만든 맛<br/>
                            가족, 친구, 연인, 동료 등 좋은 사람들과 함께 즐길 수 있는
                        </p>
                        <p>
                            <strong>롬복떡볶이</strong>입니다.
                        </p>
                    </div>
                </div>
                <div className="BI" id="BI">
                    <h3>BI(BRAND IDENTITY)</h3>
                    <Image src={logo} alt="로고" className="logo"/>
                    <p>
                        위 롬복떡볶이 BI(BRAND IDENTITY)의 형태나 비례는 어떠한 경우에도 정확하게 표현되어야 하며, <br/>
                        규정된 형태와 비례, 색상은 임의로 변경될 수 없습니다. 더하여, 브랜드의 시각적 이미지를 전달해주는 <br/>
                        중요 수단이므로 제시된 가이드라인을 준수하는 동시에, 브랜드 이미지에 손상이 발생하지 않도록 주의하여<br/>
                        사용하여야 합니다.
                    </p>
                </div>

                <div className="map" id="map">
                    <h3>오시는 길</h3>
                    <Map className="mapContainer"// 지도를 표시할 Container
                        center={{
                            // 지도의 중심좌표
                            lat: 33.450701,
                            lng: 126.570667,
                        }}
                        style={{
                            // 지도의 크기
                            width: "1400px",
                            height: "700px",
                        }}
                        level={4} // 지도의 확대 레벨
                    >
                        <MapMarker // 마커를 생성합니다
                            position={{
                                // 마커가 표시될 위치입니다
                                lat: 33.450701,
                                lng: 126.570667,
                            }}
                        />
                    </Map>
                    <table id="adress">
                        <tr>
                            <td>주소</td>
                            <td>서울 특별시 성동구 성수이로18길 7,  HS빌딩 7층</td>
                        </tr>
                        <tr>
                            <td>대표번호</td>
                            <td>070-1234-1234</td>
                        </tr>
                        <tr>
                            <td>대표 E-MAIL</td>
                            <td>lomDDeock@lomlom.com</td>
                        </tr>
                    </table>
                </div>

            </Container>
        </section>
    );
}

export default Introduce;