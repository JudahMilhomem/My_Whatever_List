// Style
import '../styles/UpdatePage.css';

// Imports
  // React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
  // Components
import UpdateGame from '../components/UpdateGame/UpdateGame';

import GameFinder from '../api/GameFinder'; // API


const UpdatePage = () => {
  const { id } = useParams();

  // States
  const [name, setName] = useState("");
  
  useEffect(() => {
    const fetchData = async () => { // may be redundant!! **
      try {
        const response = await GameFinder.get(`/${id}`);
        const gameData = response.data.data[0];
        setName(gameData.game_name);
      } catch(err){
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container flex-container page-content">
      <header className="container flex-container header-content">
        <h1 className="title page-title">Update game</h1>
        <h2 className="subheading game-name">{name}</h2>
      </header>
      <UpdateGame/>
    </div>
  )
}

export default UpdatePage;
