import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'



export default function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Proyecto Viñes
      </Navbar.Brand>
    <Nav className="me-auto">
    <Link className="navBarV" to="/">Inicio</Link>
    <Link className="navBarV" to="/"> Productos</Link>
    <Link className="navBarV" to="/category/">Categorias</Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  </>
  );
}