import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavLanding() {
	return (
		<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FUPAGUA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre nosotros</Nav.Link>
            <Nav.Link href="#features">Biblioteca</Nav.Link>
            <Nav.Link href="#pricing">Videos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
	);
}
export default NavLanding;
