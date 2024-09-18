// Style
import '../../styles/Application.css';
import '../../styles/UpdatePage.css';
import './UpdateGame.css'

// Imports
  // React
import React from 'react';
  // Components
import Form from '../Form/Form';
import Image from '../Image/Image';

const UpdateGame = () => {
  return (
    <main className="container flex-container main-content">
      <section className="container flex-container game-info-content-container">
        <div className="container flex-container game-info-content">
          <Image
            className="game-image"/>
          <Form
            className="game-info-form"/>
        </div>
      </section>
    </main>
  )
}

export default UpdateGame;
