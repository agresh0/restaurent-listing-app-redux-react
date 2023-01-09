import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="no image"
              src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg"
              width="35"
              height="30"
              className="d-inline-block align-top"
            />{' '}&nbsp;
            Foodo Em
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header