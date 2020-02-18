import React from 'react';
import {Switch, Route} from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage.js'
import LoginPage from './components/LoginPage.js'
import './App.css';
import Friends from './components/Friends.js';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <RegistrationPage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/friends'>
        <Friends />
      </Route>
    </Switch>
  );
}

export default App;
