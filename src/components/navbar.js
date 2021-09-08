import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap'
import logo from './../images/ALOGO.jpg'
import {Link} from 'react-router-dom'
function NavBar({list}) {
  const staff = list[0].staff;
  const student = list[0].student;
  return (
    <Navbar expand="lg" animate="false" className="nnn">
  <Container className="navbar">
    <Navbar.Brand href="/" className="text-primary font-weight-bold"><Image height="50" src="https://nigerianfinder.com/wp-content/uploads/2018/02/Uniben-Logo-301x300.png"/> <span className="nav-head">ICON AWARD</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
              {student.map(({category}, index) => {
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
