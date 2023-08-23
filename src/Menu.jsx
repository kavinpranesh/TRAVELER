import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h4><span>TRAVEL</span><span className='title'>ER</span></h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Tour Packages</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog Grid</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Detail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Destination</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Travel Guides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Testimonal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Menu;