import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthFun from '../utils/Auth';

import { useEffect, useState } from 'react';
import AvatarImag from './Avatar';

function NavBar() {
console.log(AuthFun.getProfile())
const[userData,setUserData]=useState(AuthFun.getProfile())
const name=userData.data.userName;
console.log('name',name)
  return (
    <Navbar expand="lg" style={{backgroundColor:"#0066b2"}}>
      <Container fluid>
        <Navbar.Brand href="#">
            {name? 
            <AvatarImag name={name}/>
:""}
 {userData.data.userName}
 </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;