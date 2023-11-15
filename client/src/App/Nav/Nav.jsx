import React from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from "react-bootstrap/esm/NavLink";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import {
  Link,
} from 'react-router-dom';


function SiteNav (props) {
    return (
        <Navbar expand="lg" bg="bg-primary" fixed="top" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fs-4">MangaBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 fs-5 align-items-center">
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
                <NavLink as={Link} to="/uploadTitle" >Добавить тайтл</NavLink>

              </Nav>
              
              <Nav className="fs-5 w-100 align-items-center justify-content-end">
              <NavLink as={Link} to="/user/login"><FontAwesomeIcon icon={faRightToBracket} /></NavLink>
                <InputGroup className="w-auto">
                  <Button bg="danger"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                      <Form.Control 
                        type="search"
                        placeholder="Поиск"
                        aria-label="Search"
                      />
                </InputGroup>
                
              </Nav>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default SiteNav