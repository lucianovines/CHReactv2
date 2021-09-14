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
import productsContext from '../context/productsContext';
import { useContext } from 'react';

export default function NavBar() {

  const cartInContext = useContext(cartContext);
  const productsInContext = useContext(productsContext);


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
        {productsInContext.categories.map((category)=>(
            <NavDropdown.Item  > 
              <Link className="navBarV navBarDropDown" to={`/category/${category.Description}`}>{category.Name} </Link>
            </NavDropdown.Item>
        ))}
      </NavDropdown>

    </Nav>
    <Link className="cartSize" to="/cart"><CartWidget />{cartInContext.cartSize}</Link>
    </Container>
  </Navbar>
  </>
  );
}