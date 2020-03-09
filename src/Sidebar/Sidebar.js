import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import menuIcon from './menuIcon.jpg';
import homeIcon from './homeIcon.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import kataxwrish from './kataxwrish.png';


function Sidebar() {
  return (
    <div className="Sidebar">
      <img alt="logo" className='Sidebar_image' src={logo}/>
      <div className='Sidebar_menu'>
        <img alt="menuIcon" src={menuIcon}/>
        <p>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</p>
      </div>

          <NavLink activeClassName = 'is-active' to='/home'>
            <figure className='shape'>
              <img alt="homeIcon" src={homeIcon}/>
              <div> Κεντρική σελίδα </div>
            </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/warehouse1'>
            <figure className='shape'>
              <img alt="icon1" src={icon1}/>
              <div> Αποθήκη 1 </div>
            </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/warehouse2'>
            <figure className='shape'>
              <img alt="icon2" src={icon2}/>
              <div> Αποθήκη 2 </div>
          </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/warehouse3'>
          <figure className='shape'>
            <img alt="icon3" src={icon3}/>
            <div> Αποθήκη 3 </div>
          </figure>
          </NavLink>
        
          <NavLink activeClassName = 'is-active' to='/warehouse4'>
          <figure className='shape'>
            <img alt="icon4" src={icon4}/>
            <div> Αποθήκη 4 </div>
          </figure>
          </NavLink>

      
      <div className='Sidebar_menu'>
        <img alt="menuIcon" src={menuIcon}/>
        <p>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</p>
      </div>
      <NavLink activeClassName = 'is-active' to='/insert'>
            <figure className='shape'>
              <img alt="kataxwrish" src={kataxwrish}/>
              <div> Καταχώριση </div>
            </figure>
      </NavLink>
    </div>
  );
}

export default Sidebar;