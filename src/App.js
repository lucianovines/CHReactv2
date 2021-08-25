import './App.css';
import './assets/css/styles.css'
import NavBar from './components/navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {cartContext} from "./context/cartContext"

//pages
import Home from './pages/Home';
import ItemDetailView from './pages/ItemDetailView';
import ProductsList from './pages/ProductsList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/">
           <ItemListContainer/>
        </Route>

        <Route exact path="/category/:id">
            <cartContext.Provider value={[]}>
              <ItemListContainer/>
            </cartContext.Provider>
        </Route>

        <Route exact path="/item/:id">
           <ItemDetailContainer/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
