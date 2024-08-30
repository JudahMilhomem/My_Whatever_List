// I have even less idea of what I did here

import './GameFinderTable.css'

import React, { useEffect, useContext } from 'react'
import GameFinder from '../../api/GameFinder'
import { GamesContext } from '../../context/GamesContext'

const GameFinderTable = (props) => {
  const {games, setGames} = useContext(GamesContext);

  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await GameFinder.get('/'); // API call
            setGames(response.data.data);
            // console.log(response.data.data);
        } catch(err){
            console.log(err);
        }
    };

    fetchData();
  }, [setGames]); ////

  return (
    <div className="flex-container table-container">
      <h1 className="title table-title">List Of Games</h1>

      <table className="games-table">
        <thead>
          <tr className="bg-danger">
            <th scope="col">Name</th>
            <th scope="col">Release</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {games && games.map((game) => { // meaning: if 'games' exists -> run code **
            return(
              <tr key={game.id}>
                <td>{game.game_name}</td>
                <td>{game.rdate}</td>
                <td>{game.company}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GameFinderTable
