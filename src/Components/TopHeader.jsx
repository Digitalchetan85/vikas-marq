import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import Logo from "../images/logo-1.png";

const TopHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" id="navbar" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/"><Image src={Logo} className="img-fluid" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#master-plan">Master Plan</Nav.Link>
            <Nav.Link href="#amenities">Amenities</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#location">Location</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
