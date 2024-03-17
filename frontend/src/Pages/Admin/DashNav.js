import React from "react";
import logo from "../../Components/Assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Row, Col, Container, Navbar, Image, Nav } from "react-bootstrap";

const DashNav = () => {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      className="shadow bg-body-tertiary"
    >
      <Navbar.Brand href="/">
        <Row>
          <Col className="text-end">
            <Image src={logo} style={{ width: "auto" }} />
          </Col>
          <Col className="fs-3 fw-bold m-auto">New Shop</Col>
        </Row>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto fs-4 fw-semibold mx-auto"></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashNav;
