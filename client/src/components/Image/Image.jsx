// Style
import './Image.css';
import Template from './Vault_Boy_template_image.png';

// Imports
  // React
import React from 'react';

const Image = ({className}) => {
  return (
    <div className={`image-box ${className}`}>
      <img
        src={Template}
        alt="image"
      />
    </div>
  )
}

export default Image;
