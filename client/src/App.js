
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import InitialPage from './components/inicialPage';
import Home from './components/home';
import CreatePokemon from './components/createPokemon';
import Navbar from './components/Navbar';
import PokemonDetails from './components/pokemonDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route exact path={'/'}>
            <InitialPage />
          </Route>
          <Route exact path={'/Home'}>
            <Navbar />
            <Home />
          </Route>
          <Route exact path={'/Create'}>
            <Navbar />
            <CreatePokemon />
          </Route>
          <Route exact path={'/:id'}>
            <Navbar />
            <PokemonDetails />
          </Route>
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
