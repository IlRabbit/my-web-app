import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <Navbar className="mynav" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">D&D Wiki</Navbar.Brand>
        <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/spells/" className='nav-link'>Spells</Link>
            <Link to="/monsters/" className='nav-link'>Monsters</Link>
            <Link to="/feats/" className='nav-link'>Feats</Link>
            <Link to="/items/" className='nav-link'>Items</Link>
            <Link to="/planes/" className='nav-link'>Planes</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNav