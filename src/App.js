import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store';
import {Provider} from 'react-redux';

// paginas
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';

function App() {
  return(
    <Provider store={store}>
      <Router>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/NovoUsuario' component={NovoUsuario}/>
        <Route exact path = '/Login' component={Login}/>
      </Router>
    </Provider>
  )
}

export default App;
