/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";

export function NavLanding() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
      <Container fluid>
      <Navbar.Brand href="/">
            <img
              src="logo/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo_FUPAGUA"
            />
          </Navbar.Brand>
        <Navbar.Brand href="/">FUPAGUA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/" className="nav-link">
            Sobre nosotros
              </Link>
            <Link href="Contactanos" className="nav-link">
            Contáctanos
              </Link>
            <Link href="biblioteca" className="nav-link">
            Biblioteca
              </Link>
            <Link  href="videos" className="nav-link">
            Videos
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavLanding;
