import './GameFinderTable.css'
import { ReactComponent as TrashIcon} from './trash-can-icon.svg'

import React, { useEffect, useContext } from 'react'
import GameFinder from '../../api/GameFinder'
import { GamesContext } from '../../context/GamesContext'

const GameFinderTable = (props) => {
  const {games, setGames} = useContext(GamesContext);

  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await GameFinder.get('/');
            setGames(response.data.data);
        } catch(err){
            console.log(err);
        }
    };

    fetchData();
  }, [setGames]);

  const handleDelete = async (id) => {
    try{
      const response = await GameFinder.delete(`/${id}`);
      setGames(games.filter(item => {
        return item.id !== id;
      }));
    } catch(err){
      console.log(err);
    }
  }

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
          {games && games.map((game) => {
            return(
              <tr key={game.id}>
                <td>{game.game_name}</td>
                <td>{game.rdate}</td>
                <td>{game.company}</td>
                <td className="icon trash-can-icon">
                  <button onClick={() => handleDelete(game.id)} className="no-bg-button delete-button"><TrashIcon/></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default GameFinderTable
