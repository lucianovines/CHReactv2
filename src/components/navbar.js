import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'
import CartWidget from './CartWidget'
import { CategoriesJSON } from '../jsons/CategoriesJson';
import cartContext from '../context/cartContext';
import { useContext } from 'react';

export default function NavBar() {

  const cartInContext = useContext(cartContext);


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
    <Link className="navBarV d-flex" to="/">Inicio</Link>
    <Link className="navBarV d-flex" to="/"> Productos</Link>
    
      <NavDropdown className="navBarV" title="Categorias" id="navbarScrollingDropdown">
        {CategoriesJSON.map((category)=>(
          <Link className="navBarV" to={`/category/:${category.id}`}> 
            <NavDropdown.Item  href={`#action${category.id}`}> {category.description} </NavDropdown.Item>
          </Link>
        ))}
      </NavDropdown>

    </Nav>
    <CartWidget />
    <Link className="cartSize" to="/cart">{cartInContext.cartSize}</Link>
    </Container>
  </Navbar>
  </>
  );
}