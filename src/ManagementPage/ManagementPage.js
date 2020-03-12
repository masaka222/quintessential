import React from 'react';
import './ManagementPage.css';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Warehouse1 from '../Warehouse1/Warehouse1';
import Warehouse2 from '../Warehouse2/Warehouse2';
import Warehouse3 from '../Warehouse3/Warehouse3';
import Warehouse4 from '../Warehouse4/Warehouse4';
import EntryPage from '../EntryPage/EntryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ManagementPage() {
  return (
    <div className="ManagementPage">
        <BrowserRouter>
            <Sidebar/>
            <Switch>
                <Route path='/management/home' component = {Home}/>
                <Route path='/management/warehouse1' component = {Warehouse1}/>
                <Route path='/management/warehouse2' component = {Warehouse2}/>
                <Route path='/management/warehouse3' component = {Warehouse3}/>
                <Route path='/management/warehouse4' component = {Warehouse4}/>
                <Route path='/management/entry'      component = {EntryPage}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default ManagementPage;