// I have even less idea of what I did here

import React, { useEffect } from 'react'
import GameFinder from '../../api/GameFinder'

const GameFinderForm = () => {
  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await GameFinder.get('/');
            console.log(response);
        } catch(err){
            console.log(err);
        }
    };

    fetchData();
  }, []);  

  return (
    <div className="container">
      <section className="form">
        <form action="" className="game-finder">
            <div className="input-field name">
                <label htmlFor="game-name">Name *</label>
                <input type="text" id="game-name" placeholder="insert game name" required/>
            </div>

            <div className="input-field date">
                <label htmlFor="release-date">Release</label>
                <input type="text" id="release-date" placeholder="insert release date"/>
            </div>

            <div className="input-field company">
                <label htmlFor="game-company">Company</label>
                <input type="text" id="game-company" placeholder="insert game company"/>
            </div>

            <button>Search</button>
        </form>
      </section>
    </div>
  )
}

export default GameFinderForm
