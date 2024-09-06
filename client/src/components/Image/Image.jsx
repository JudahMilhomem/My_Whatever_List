import './Image.css'

import React from 'react'
import example from './Seu_Madruga.jpg'

const Image = () => {
  return (
    <div className="image-box">
      <img src={example} alt="lenda"/>
    </div>
  )
}

export default Image
