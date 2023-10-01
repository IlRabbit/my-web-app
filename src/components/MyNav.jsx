import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">D&D Wiki</Navbar.Brand>
        <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/spells" className='nav-link'>Spells</Link>
            <Link to="/" className='nav-link'>Monsters</Link>
            <Link to="/" className='nav-link'>Feats</Link>
            <Link to="/" className='nav-link'>Items</Link>
            <Link to="/" className='nav-link'>Planes</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNav