import React, {useEffect,useState}from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Layout = ({children}) => {

  const [user, setUser]=useState({})

useEffect(()=>{
  const info =JSON.parse(window.sessionStorage.getItem("user"))
  setUser(info)
},[])

const handleOnLogOut=()=>{
  window.sessionStorage.removeItem("user")
}
 return (
    <div>
      {/* //header section */}
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder text-light'>ET</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className=' text-light' />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className='nav-link fw-bolder text-light'>{user?.name}</div>

              {!user?._id?
              <>
              <Link to="/register" className='nav-link fw-bolder text-light'>SignUp</Link>
              <Link to="/" className='nav-link fw-bolder text-light'>Login</Link>
              </>:
              <Link to="/" className='nav-link fw-bolder text-light' 
              onClick={handleOnLogOut}
              >Logout</Link>
              }
              
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