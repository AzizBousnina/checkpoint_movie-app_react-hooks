import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'


function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='logo' href="#home"><img src='https://pngimg.com/uploads/netflix/netflix_PNG6.png' alt='pic' width={300} height={50} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mystery</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login/Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation ;