import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import { Button, ButtonGroup, ToggleButton, Form, Image, InputGroup, Table } from 'react-bootstrap';
import '../../css/menu/menuView.css';
import topping1 from '../../images/menu/Topping1.jpg';
import topping2 from '../../images/menu/Topping2.jpg';
import special1 from '../../images/menu/special1.jpg';
import axios from "axios";
function MenuView() {
    const { cate, menuNo } = useParams();
    console.log("cate : "+cate, "menuNo : "+menuNo);

    const [listData, setListData] = useState([]);
    const [sizeList, setSizeList] = useState([]);
    const [radioValue, setRadioValue] = useState([]);
    const [spicyList, setSpicyList] = useState([]);
    const [toppingList, setToppingList] = useState([]);
    const [sideList, setSideList] = useState([]);

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(()=>{

        axios.get(`/api/menu/MenuView?cate=${cate}&menuNo=${menuNo}`)
            .then(res=>{
                const data = res.data;
                console.log("data : ", Object.entries(data));
                    setListData(data.menu);
                    setSizeList(data.sizes);
                    setSpicyList(data.spicies);
                    setToppingList(data.toppings);
                    setSideList(data.side);
                    console.log("listData : ", Object.entries(listData));
                    console.log("sizeList : ", Object.entries(sizeList));
                    console.log("spicyList : ", Object.entries(spicyList));
                    console.log("toppingList : ", Object.entries(toppingList));
                    console.log("sideList : ", Object.entries(sideList));

            })
            .catch(err=>{
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    },[cate, menuNo]);

    return (
        <>
            <section className="menuView">
                <img src={`/thumbs/${listData.thumb}`} className="thumb"/>
                <section className="menuSelection">
                    <h2 className="menuName">
                        {listData.menuName}
                    </h2>
                    <p className="menuDescription">
                        {listData.descript}
                    </p>
                    <article className="selectSize">
                        <p className="description">
                            사이즈 선택
                        </p>
                        <ButtonGroup>
                            {sizeList.map((size, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`size-${idx}`}
                                    type="radio"
                                    variant={idx == 2 ? 'so':'outline-danger'}
                                    name="radio"
                                    className="menuSizeButton"
                                    value={size.size}
                                    checked={radioValue === size.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}>
                                    {size.size}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </article>
                    <article className="selectSpicy">
                        <p className="description">
                            맵기 선택
                        </p>
                        <Form>
                            {spicyList.map((spicy, index) => (
                                <Form.Check
                                    type={'radio'}
                                    id={'spicy-' + spicy.spicy}
                                    name='spicyLevel'
                                    label={spicy.spicy+"맛"}
                                    defaultChecked={index === 0}>
                                </Form.Check>
                            ))}
                        </Form>
                    </article>
                    <article className="selectTopping">
                        <p className="description">
                            토핑 선택
                        </p>
                        <Table className="toppingTable">
                            <tbody>
                                {toppingList.map((topping, index) => (
                                    <tr>
                                        <td className="toppingThumbArea">
                                            <Image src={`/toppings/${topping.file}`}  roundedCircle className="toppingThumb"/>
                                        </td>
                                        <td className="toppingInfoArea">
                                        <p>
                                            {topping.topping}
                                        </p>
                                        <h5>
                                            {topping.toppingPrice}
                                        </h5>
                                        </td>
                                        <td className="toppingCountArea">
                                            <InputGroup className="topping">
                                                <Button variant="outline-secondary" id="button-addon1" className="toppingButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="toppingCount"
                                                    value="0"
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="toppingButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </article>
                    <article className="selectItemCount">
                        <p className="description">
                            수량 선택
                        </p>
                        <InputGroup className="item">
                            <Button variant="outline-secondary" id="button-addon1" className="itemButton">
                                -
                            </Button>
                            <Form.Control
                                type="text"
                                aria-label="1"
                                aria-describedby="basic-addon1"
                                className="itemCount"
                                value="1"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="itemButton">
                                +
                            </Button>
                        </InputGroup>
                    </article>
                    <article className="selectSide">
                        <p className="description">
                            사이드 디시
                        </p>
                        <div className="toppingTableArea">
                            <Table className="toppingTable">
                                <tbody>
                                {sideList.map((side, index) => (
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={`/sides/${side.thumb}`} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                {side.menuName}
                                            </p>
                                            <strong className="sideSpecialStrong">
                                                {side.price}
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    value="0"
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </article>
                </section>
            </section>
            <section className="orderProgress">
                <Table className="orderProgressTable">
                    <thead>
                    <tr>
                        <th className="orderProgressCol1"></th>
                        <th className="orderProgressCol2"></th>
                        <th className="orderProgressCol3"></th>
                        <th className="orderProgressCol4"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="orderProgressRow1">
                        <td>
                            <strong>
                                떡볶이
                            </strong>
                        </td>
                        <td>
                            <strong>
                                사이드디시
                            </strong>
                        </td>
                        <td>
                            <strong>
                                음료 & 기타
                            </strong>
                        </td>
                        <td>
                            <p>
                                총 금액
                                <strong className="orderTotalPrice">
                                    8,500
                                </strong>
                            </p>
                        </td>
                    </tr>
                    <tr  className="orderProgressRow2">
                        <td>
                            짜장 떡볶이
                        </td>
                        <td>
                            없음
                        </td>
                        <td>
                            없음
                        </td>
                        <td>
                            <Link to="/menu/menuCart">
                                <Button variant="danger" className="orderButton">
                                    주문하기
                                </Button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default MenuView;