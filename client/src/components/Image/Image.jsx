import './Image.css'

import React from 'react'
import imageName from './RE4_Remake.jpg'

const Image = () => {
  return (
    <div className="image-box">
      <img src={imageName} alt="imagem"/>
    </div>
  )
}

export default Image // make it a dynamic component **
