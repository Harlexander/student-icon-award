import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap'
import logo from './../images/napps.jpeg'
import {Link} from 'react-router-dom'
function NavBar({list}) {
  return (
    <Navbar expand="lg" animate="false" className="nnn">
  <Container className="navbar">
    <Navbar.Brand href="/" className="text-primary font-weight-bold"><Image height="50" src={logo}/> <span className="nav-head">NAPSS</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown
          title="Category"
          id="basic-nav-dropdown"
        >
        {/* <NavDropdown.Divider className="header-divider" /> */}
        {/* {staff.map(({category}, index) => {
                return (
                  <a key={index} href={`/category/${category}`} className="text-decoration-none">{category}</a>
                )
              })} */}
              {list.map(({category}, index) => {
                return (
                  <NavDropdown.Item href={`/category/${category}`} key={index} className="border-bottom py-2">{category}</NavDropdown.Item>
                )
              })}

      </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;
