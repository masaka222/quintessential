import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

import logo from './logo.png';
import menuIcon from './menuIcon.jpg';
import settingsIcon from './settingsIcon.png';

import SVGIcon from "./SVGIcon";



function Sidebar() {
  return (
    <div className="Sidebar">
      <img alt="logo" className='Sidebar_logo' src={logo}/>
      <div className='Sidebar_menu'>
        <img alt="menuIcon" src={menuIcon} className='menuIcon'/>
        <div className='menuText'>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</div>
      </div>

          <NavLink activeClassName = 'is-active' to='/management/home'>
            <figure className='shape'>
              <SVGIcon className='Sidebar_icon' name="home" width={22} fill={'#474EBB'} />
              <div className='Sidebar_text'> Κεντρική σελίδα </div>
            </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/management/warehouse1'>
            <figure className='shape'>
              <SVGIcon className='Sidebar_icon' name="one" width={18} />
              <div className='Sidebar_text'> Αποθήκη 1 </div>
            </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/management/warehouse2'>
            <figure className='shape'>
              <SVGIcon className='Sidebar_icon' name="two" width={18} />
              <div className='Sidebar_text'> Αποθήκη 2 </div>
          </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/management/warehouse3'>
            <figure className='shape'>
              <SVGIcon className='Sidebar_icon' name="three" width={18} />
              <div className='Sidebar_text'> Αποθήκη 3 </div>
            </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/management/warehouse4'>
            <figure className='shape'>
              <SVGIcon className='Sidebar_icon' name="four" width={19} />
              <div className='Sidebar_text'> Αποθήκη 4 </div>
            </figure>
          </NavLink>

      
      <div className='Sidebar_menu'>
        <img alt="menuIcon" src={menuIcon} className='menuIcon'/>
        <div className='menuText'>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</div>
      </div>
      
      <NavLink activeClassName = 'is-active' to='/management/entry'>
        <figure className='shape' id='lastOption'>
          <SVGIcon className='Sidebar_icon' name="dots" width={18} />
          <div className='Sidebar_text'> Καταχώριση </div>
        </figure>
      </NavLink>

      <div className='Sidebar_settings'>
        <img alt="settingsIcon" src={settingsIcon} className='menuIcon'/>
        <div className='menuText'>ΡΥΘΜΙΣΕΙΣ</div>
      </div>
    </div>
  );
}

export default Sidebar;