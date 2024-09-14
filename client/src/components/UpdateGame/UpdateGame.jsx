// Style
import '../../styles/Application.css';
import '../../styles/UpdatePage.css';

// Imports
  // React
import React from 'react';
  // Components
import Form from '../Form/Form';
import Image from '../Image/Image';
// import Card from '../Card/Card'

const UpdateGame = () => {
  return (
    <div className="container flex-container content-box">    
      <Image
        src="/images/Hollow_Knight.jpg" // test **
      /> {/* <Card/> */}
      <Form/>
    </div>
  )
}

export default UpdateGame;
