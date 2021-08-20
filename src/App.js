import './App.css';
import './assets/css/styles.css'
import NavBar from './components/navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import ItemDetailView from './pages/ItemDetailView';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/">
           <Home/>
        </Route>

        <Route exact path="/category/:id">
           <Home/>
        </Route>

        <Route exact path="/item/:id">
           <ItemDetailView/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
