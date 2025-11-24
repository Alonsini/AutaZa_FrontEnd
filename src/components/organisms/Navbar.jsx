import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/HeroNavbar.css';
import logo from '../../assets/img/logo.webp';
import { useAuth } from '../../context/AuthContext';



function NavBar() {
  const { user, logout } = useAuth();

  return (
    <Navbar className="navbar fixed-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Autaza Logo" height="38" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Autos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/AddProduct">Consignaciones</Nav.Link>

            {user?.isDev && (
              <Nav.Link as={Link} to="/developer"> Desarrollador</Nav.Link>
            )}

          </Nav>
          <Nav className="ms-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Inicio de Sesión</Nav.Link>
              </>
            ) : (
              <>
                {user.isDeveloper && (
                  <Nav.Link as={Link} to="/developer">Panel Dev</Nav.Link>
                )}

                <span className="navbar-text me-3">Hola, {user.name}</span>
                <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
