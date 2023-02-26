/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            <Nav.Link href="/">Sobre nosotros</Nav.Link>
            <Nav.Link href="formulario">Contáctanos</Nav.Link>
            <Nav.Link href="biblioteca">Biblioteca</Nav.Link>
            <Nav.Link href="videos">Videos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavLanding;
