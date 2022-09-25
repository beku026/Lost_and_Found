import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import s from './Header.module.scss';



const Header = () => {
    return (
        <header className={s.header}>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <NavLink to="/">
                  <Navbar.Brand href="#Action" className={s.main_title}>Lost and Found Portal</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <NavLink to="/">
                        <Nav.Link href="#action1">Home</Nav.Link>
                    </NavLink>
                    <NavLink to='/profile'>
                      <Nav.Link href="#action2">
                        Profile
                      </Nav.Link>
                    </NavLink>
                    <NavLink to='/autorizaton'>
                      <Nav.Link href="#action2">
                        Sign In
                      </Nav.Link>
                    </NavLink>
                    <NavLink to='/foundItem'>
                      <Nav.Link href="#action2">
                        Found Item
                      </Nav.Link>
                    </NavLink>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
      );
};

export default Header;