
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

 
 
function Header() {
  return (

 
       

            <Navbar collapseOnSelect expand="lg" sticky='top' className='header'>
              <Container>

                <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="Images/gist.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              GIST-Infonet
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#faucet">Faucet</Nav.Link>
                  <Nav.Link href="#description">Description</Nav.Link>
                  <Nav.Link href="#resource">Resource</Nav.Link>
                  <NavDropdown title="Explore" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  
                  <Nav.Link eventKey={2} href="#transaction">
                    Transactions
                  </Nav.Link>
                  <Nav.Link href="#deets"><Button variant="danger" size='sm'>Connect Wallet</Button></Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>


    
    
  );
}
export default Header;