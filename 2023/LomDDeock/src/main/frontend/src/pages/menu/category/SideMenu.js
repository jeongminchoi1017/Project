import { Button, Card } from 'react-bootstrap';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import React from "react";
function SideMenu({listData}) {
    return (
        <section className="tabMenuList">
            <h1 className="tabCategory">
                SIDE MENU
            </h1>
            {listData.map((item, index)=>(
                <Card key={index} style={{ width: '18rem' }} className="item-card">
                    <Link to="/menu/menuView" className="reset-a">
                        <Card.Img variant="top" src={`/sides/${item.thumb}`}/>
                        <Card.Body>
                            <Card.Title className="menuTitle">
                                {item.menuName}
                            </Card.Title>
                            <Card.Text className="menuPrice">
                                {item.price}원
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </section>
    )
}

export default SideMenu;