import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Header(props) {
  return (
    <div className="Header">
      <h1 className='Header_title'>{props.title}</h1>
      <SearchBar/>
    </div>
  );
}

export default Header;