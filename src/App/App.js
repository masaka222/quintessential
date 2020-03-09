import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ManagementPage from '../ManagementPage/ManagementPage';
import LoginPage from '../LoginPage/LoginPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/management' component={ManagementPage}/>
        <Route component = {NotFoundPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
