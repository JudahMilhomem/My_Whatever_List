// Style
import './Image.css';

// Imports
  // React
import React from 'react';

const Image = ({imageURL}) => {
  return (
    <div className="image-box">
      <img
        src={imageURL} // not really working dawg 💀...
        alt="image"
      />
    </div>
  )
}

export default Image;
