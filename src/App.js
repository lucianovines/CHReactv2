import './App.css';
import './assets/css/styles.css'
import NavBar from './components/navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CartProvider} from "./context/cartContext"
import { ProductsProvider } from './context/productsContext';
import Cart from './components/cart';


//pages
import ProductsList from './pages/ProductsList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
               <ProductsList/>
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
