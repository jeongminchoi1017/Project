import React, { useState } from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AdminAsideMenu from "../AdminAsideMenu";
import axios from "axios";

function AdminMenuRegister() {
    const [toppings, setToppings] = useState([]);
    const [sizeCount, setSizeCount] = useState(0);
    const [spicyCount, setSpicyCount] = useState(0);
    const [sizes, setSizes] = useState([]);
    const [spicies, setSpicies] = useState([]);
    const [selectedType, setSelectedType] = useState("normal");

    const handleChange = (e)=>{
        setSelectedType(e.target.value);
    }
    const handleAddTopping = () => {
        setToppings((prevToppings) => [...prevToppings, {}]);
    };

    const handleRemoveTopping = (index) => {
        setToppings((prevToppings) => {
            const newToppings = [...prevToppings];
            newToppings.splice(index, 1);
            return newToppings;
        });
    };
    const handleSizeCountChange = (e) => {
        const count = parseInt(e.target.value, 10) || 0;
        setSizeCount(count);
        // Generate an array with the new count of size inputs
        const newSizes = Array.from({ length: count }, (_, index) => index + 1);
        setSizes(newSizes);
    };
    const handleSpicyCountChange = (e) => {
        const count = parseInt(e.target.value, 10) || 0;
        setSpicyCount(count);
        // Generate an array with the new count of size inputs
        const newSpices = Array.from({ length: count }, (_, index) => index + 1);
        setSpicies(newSpices);
    };

    //axios
    const registerMenu = (e)=>{
        e.preventDefault();

        const registerForm = document.getElementById('registerForm');
        const formData = new FormData(registerForm);


        for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

            // axios를 사용한 폼 전송
            axios.post('/api/menu/register', formData,{
                headers:{'Content-Type': 'multipart/form-data'}
            })

                .then((res) => {

                    alert("등록완료");
                    window.location.replace("/admin/menu/AdminMenuRegister")
                })
                .catch((err) => {
                    console.error("전송실패: " + err);
                });

    };

    return (
        <section id="admin">
            <Container id="adminMenuManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <Form id="registerForm">
                            {/* 유형선택 */}
                            <Form.Select aria-label="유형선택" name="type" onChange={handleChange}>
                                <option value="normal">일반</option>
                                <option value="side">사이드디시</option>
                                <option value="drinkOrOthers">음료/기타</option>
                            </Form.Select>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    메뉴명<span>(필수)</span>
                                </InputGroup.Text>
                                <Form.Control
                                    name="menuName"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="메뉴의 이름을 입력해주세요."
                                />
                            </InputGroup>
                            <Form.Group controlId="formFile" className="mb-3">
                                메뉴 이미지 첨부 (필수)
                                <Form.Control type="file" name="fileThumb"/>
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>메뉴 설명<span>(선택)</span></InputGroup.Text>
                                <Form.Control name="descript" as="textarea" aria-label="With textarea" placeholder="해당 메뉴에 대한 설명을 입력해주세요."/>
                            </InputGroup>
                            {selectedType === "normal" && (
                                <InputGroup className="mb-3" id="sizeOption">
                                    <InputGroup.Text>사이즈 옵션</InputGroup.Text>
                                    <Form.Control name="sizeCount" onChange={handleSizeCountChange} />
                                    <InputGroup.Text>개</InputGroup.Text>
                                </InputGroup>
                            )}
                            {/* Render size inputs based on the sizeCount */}
                            {sizes.map((size) => (
                                <InputGroup className="mb-3 size" key={size} >
                                    <InputGroup.Text>사이즈</InputGroup.Text>
                                    <Form.Control className="sizeValue" name={`sizeDTOs[${size-1}].size`} />
                                </InputGroup>
                            ))}
                            <InputGroup className="mb-3 price">
                                <InputGroup.Text>가격</InputGroup.Text>
                                <Form.Control name="price"/>
                                <InputGroup.Text>원</InputGroup.Text>
                            </InputGroup>
                            {selectedType === "normal" && (
                                <InputGroup className="mb-3" id="spicyOption">
                                    <InputGroup.Text>맵기 옵션</InputGroup.Text>
                                    <Form.Control name="spicyCount" onChange={handleSpicyCountChange} />
                                    <InputGroup.Text>개</InputGroup.Text>
                                </InputGroup>
                            )}
                            {/* Render size inputs based on the sizeCount */}
                            {spicies.map((spicy) => (
                                <InputGroup className="mb-3 spicy" key={spicy} >
                                    <InputGroup.Text>맵기</InputGroup.Text>
                                    <Form.Control className="spicyValue" name={`spicyDTOs[${spicy-1}].spicy`} />
                                    <InputGroup.Text>맛</InputGroup.Text>
                                </InputGroup>
                            ))}
                            {selectedType === "normal" && (
                                <article className="addOption">
                                    <p>선택옵션 추가 (선택)</p>
                                    <button type="button" onClick={handleAddTopping}>+</button>
                                    <button type="button" onClick={() => handleRemoveTopping(toppings.length - 1)}>-</button>
                                    {toppings.map((topping, index) => (
                                        <div className="classification" key={index}>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text>토핑 이름</InputGroup.Text>
                                                <Form.Control name={`toppingDTOs[${index}].topping`}/>
                                            </InputGroup>
                                            <div className="subcate">
                                                <Form.Group controlId="formFile" className="mb-3 formFile">
                                                    <Form.Control type="file" name={`toppingDTOs[${index}].toppingFile`}/>
                                                </Form.Group>
                                                <InputGroup className="mb-3 inputSubcate">
                                                    <InputGroup.Text>금액</InputGroup.Text>
                                                    <Form.Control name={`toppingDTOs[${index}].toppingPrice`}/>
                                                    <InputGroup.Text>원</InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                        </div>
                                    ))}
                                </article>
                            )}
                            <button type="submit" onClick={registerMenu}>등록</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AdminMenuRegister;