import React from "react"

import './Styles.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from "react-bootstrap/esm/NavLink";

import {
  Link,
} from 'react-router-dom';


function SiteNav (props) {
    return (
        <Navbar expand="lg" bg="bg-primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fs-4">MangaBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 fs-5">
                <NavDropdown title="Каталог" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/1.1" >Манги</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.2">Манхвы</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.3">OEL</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.4">Комиксы</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.4">Случайный тайтл</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Ранобэ</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Книги</NavDropdown.Item>
                  <NavDropdown.Item href="#action/1.4">Случайный тайтл</NavDropdown.Item>
                </NavDropdown>
                <NavLink as={Link} to="/uploadTitle" className="ms-auto" >Добавить тайтл</NavLink>
                <div className="vr text-dark" />
                <NavLink as={Link} to="/">Войти</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default SiteNav