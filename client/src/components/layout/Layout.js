import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const Layout = ({children}) => {
  return (

    <div>
      {/* //header section */}
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* middle section */}
      <main className="container wrapper">{children}</main>
      {/* //footer section */}
<footer className='text-light bg-dark text-center'>
  Copyright @2022
</footer>

    </div>
  )
}

export default Layout