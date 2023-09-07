import '../components/Navibar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='title1'><h1><span>TRAVEL</span><span className='title'>ER</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='home1' href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Service">Services</Nav.Link>
            <Nav.Link href="#Tour Packages">Tour Packages</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Blog Grid">Blog Grid</NavDropdown.Item>
              <NavDropdown.Item href="#Blog Detail">Blog Detail</NavDropdown.Item>
              <NavDropdown.Item href="#Destination">Destination</NavDropdown.Item>
              <NavDropdown.Item href="#Travel Guides">Travel Guides</NavDropdown.Item>
              <NavDropdown.Item href="#Testimonal">Testimonal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navibar;