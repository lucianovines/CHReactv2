import './App.css';
import './assets/css/styles.css'
import NavBar from './components/navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CartProvider} from "./context/cartContext"
import { ProductsProvider } from './context/productsContext';
import Cart from './components/cart';
import { useEffect} from 'react';


//pages
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {

  document.title= "Proyecto Coder";

  return (
    <CartProvider>
      <ProductsProvider>
        <BrowserRouter basename={'/CHReactv2'} >
          <NavBar />
          <Switch>

            <Route exact path="/" title="Index Page">
                <ItemListContainer/>
            </Route>

            <Route exact path="/category/:id">
                <ItemListContainer/>        
            </Route>

            <Route exact path="/item/:id">
               <ItemDetailContainer/>
            </Route>

            <Route exact path="/cart">
               <Cart/>
            </Route>

          </Switch>
        </BrowserRouter>
     </ProductsProvider>
    </CartProvider>
  );
}

export default App;
