import React from "react";
import logo from "../../Components/Assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Row, Col, Button, Navbar, Image, Stack } from "react-bootstrap";

const DashNav = () => {
  return (
    <div>
      <Navbar id="navbar-system">
        <Navbar.Brand href="#home">
          <Image src={logo} style={{ height: "40px", width: "150px" }} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CgProfile style={{ marginBottom: 2 }} size={20} color="black" />
            <a href="#login" className="fw-semibold p-1 text-black">
              sulo
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DashNav;
