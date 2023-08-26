import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Col} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';



const Appbar = () => {
  return (
    <Navbar expand="lg"  id='appbar'>
    <Container id="container">
      <Navbar.Brand href="#home" id="logo">TamilNadu Tourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className=' d-grid justify-content-start'>
      <Col className='d-flex justify-content-end'>
        <Nav>
        <Nav.Link href="#Home" id="nav2"><NavLink to="/"> Home</NavLink></Nav.Link>
            <Nav.Link href="#place"  id="nav2"> <NavLink to="/places">Places To Visit</NavLink></Nav.Link>
            <Nav.Link href="#"  id="nav2">Best Time To Visit</Nav.Link>
            <Nav.Link href="#" id="nav2">Packages</Nav.Link>
            <Nav.Link href="#" id="nav2">Destination</Nav.Link>
            <Nav.Link href="#" id="nav2">Food</Nav.Link>
        </Nav>
        </Col>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Appbar;