import React, { useState } from 'react'
import { Offcanvas, Col, Nav, Row, Tab } from 'react-bootstrap';
import { Button, Navbar, Text } from "@nextui-org/react";
import favicon from '../img/favicon.png'
import bar from '../img/bar.png'
import DashType from '../components/dashboard/DashType';
import Notes from '../components/notes/Notes';
import Todos from '../components/todos/Todos';


function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Navbar isBordered variant="floating">
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%"
                        }
                    }}
                >
                    <img src={favicon} alt='icon' width={50} height={50} />
                    <Text b color="inherit" hideIn="xs">
                        NODO
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Button flat color="primary" auto onPress={handleShow}><img src={bar} alt='bar png' width={22} height={20} /></Button>
                </Navbar.Content>
            </Navbar>


            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton className='mt-4'>
                        <Offcanvas.Title><Text color='secondary' b size={25}>NODO</Text></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" onClick={handleClose} href='/'>Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="first" style={{ width: "22.7em" }} onClick={handleClose}>Dashboard</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" onClick={handleClose}>Notes</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" onClick={handleClose}>Todos</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Offcanvas.Body>
                </Offcanvas>

                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <DashType />
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                        <Notes />
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                        <Todos />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    )
}

export default Dashboard