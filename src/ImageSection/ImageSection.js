import React from 'react';
import './ImageSection.css';
import image from './Group 2.png';

function ImageSection() {
  return (
    <div className="ImageSection">
      <img alt="mainimage" className='ImageSection_image' src={image}/>
    </div>
  );
}

export default ImageSection;