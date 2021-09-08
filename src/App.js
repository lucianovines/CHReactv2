import './App.css';
import './assets/css/styles.css'
import NavBar from './components/navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CartProvider} from "./context/cartContext"
import Cart from './components/cart';


//Firebase
import { collection, getDocs } from '@firebase/firestore';
import { getData } from './firebase';

//pages
import ProductsList from './pages/ProductsList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
