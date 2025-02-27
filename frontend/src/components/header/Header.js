import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Button, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/' style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          {/* Make text white */}
          <Nav
            className='me-auto my-2 my-lg-0 ms-lg-4 '
            style={{ maxHeight: '100px ' }}
            navbarScroll>
            <NavLink className='nav-link text-white' to='/'>
              Home
            </NavLink>
          </Nav>
          <Button variant='outline-warning' style={{ marginRight: '10px' }}>
            Sign In
          </Button>
          <Button variant='outline-info'>Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
