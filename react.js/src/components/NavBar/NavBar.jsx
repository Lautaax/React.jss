import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from './CartWidget';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contacto  </Nav.Link>
            
          </Nav>
          <CardWidget className="justify-content-end"/>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
