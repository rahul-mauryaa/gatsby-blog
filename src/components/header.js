import * as React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ siteTitle }) => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/ssr" className="nav-link">
              ssr
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
