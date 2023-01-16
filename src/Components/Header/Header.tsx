
// React
import React, { useRef } from 'react';

//CSS
import './Header.css';

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//React Scroll
import * as ReactScroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Header() {

  return (
    <>
        <Navbar className="sticky-top" id="header" collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand as={Link} to="Home" spy={true} smooth={true} offset={-90} duration={800}> 
            <img
                src="/IMG/Logo.svg"
                height="45"
                className="d-inline-block align-top"
                alt="Logo Beatriz."
                id="navlink_logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link></Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center" id="navlink">
                <Nav.Link as={Link} to="Home" spy={true} smooth={true} offset={-90} duration={500} className="navlink_txt" id="navlink_projects">Home</Nav.Link>
                <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-90} duration={500} className="navlink_txt" id="navlink_projects">About me</Nav.Link>
                <Nav.Link as={Link} to="Projetos" spy={true} smooth={true} offset={-90} duration={500} className="navlink_txt" id="navlink_projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="contato" spy={true} smooth={true} offset={-90} duration={500} className="navlink_txt" id="navlink_projects">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}


