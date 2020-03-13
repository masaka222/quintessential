import React from 'react';
import './SearchBar.css';
import magnifier from './magnifier.png';

function SearchBar() {
  return (
    <div className="SearchBar">
      <form action="#" className="search">
        <button className="search__button">
          <img alt='magnifyingGlass' className='magnifyingGlass' src={magnifier}/>
        </button>
        <input type="text" className="search__input" placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων" size="52"/>
      </form>
    </div>
  );
}

export default SearchBar;