import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

        </Switch>
        <div className="App">
          <h1>Henry Pokemons</h1>
 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
