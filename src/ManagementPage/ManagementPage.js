import React from 'react';
import './ManagementPage.css';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Warehouse1 from '../Warehouse1/Warehouse1';
import Warehouse2 from '../Warehouse2/Warehouse2';
import Warehouse3 from '../Warehouse3/Warehouse3';
import Warehouse4 from '../Warehouse4/Warehouse4';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ManagementPage() {
  return (
    <div className="ManagementPage">
        <BrowserRouter>
            <Sidebar/>
            <Switch>
                <Route path='/home' component = {Home}/>
                <Route path='/warehouse1' component = {Warehouse1}/>
                <Route path='/warehouse2' component = {Warehouse2}/>
                <Route path='/warehouse3' component = {Warehouse3}/>
                <Route path='/warehouse4' component = {Warehouse4}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default ManagementPage;