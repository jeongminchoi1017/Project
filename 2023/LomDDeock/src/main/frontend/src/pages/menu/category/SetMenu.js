import { Button, Card } from 'react-bootstrap';
import blank from '../../../images/menu/blank.svg';
import spicy9 from '../../../images/menu/img_spicystep9.png';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
function SetMenu() {
    return (
        <section className="tabMenuList">
            <h1 className="tabCategory">
                SET MENU
            </h1>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="item-card">
                <Card.Img variant="top" src={blank}/>
                <Card.Body>
                    <Card.Title className="menuTitle">
                        <Link to="/menu/menuView" className="reset-a">
                            떡볶이
                        </Link>
                    </Card.Title>
                    <Card.Img src={spicy9} className="menuImg"/>
                    <Card.Text className="menuPrice">
                        30000원
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

export default SetMenu;