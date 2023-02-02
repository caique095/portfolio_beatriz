
// React
import React, { useRef } from 'react';

//CSS
import './Header.css';

// Logo
import logo from '../../logo.svg';

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
                src={logo}
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
                <Nav.Link as={Link} to="Home" spy={true} smooth={true} offset={-90} duration={800} className="navlink_txt" id="navlink_projects">Início</Nav.Link>
                <Nav.Link as={Link} to="about" spy={true} smooth={true} offset={-90} duration={800} className="navlink_txt" id="navlink_projects">Sobre mim</Nav.Link>
                <Nav.Link as={Link} to="Projetos" spy={true} smooth={true} offset={-90} duration={800} className="navlink_txt" id="navlink_projects">Projetos</Nav.Link>
                <Nav.Link as={Link} to="Experiencias" spy={true} smooth={true} offset={-300} duration={800} className="navlink_txt" id="navlink_projects">Experiências</Nav.Link>
                <Nav.Link as={Link} to="contato" spy={true} smooth={true} offset={-90} duration={800} className="navlink_txt" id="navlink_projects">Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}


