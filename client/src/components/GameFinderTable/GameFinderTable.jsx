import './GameFinderTable.css'
import { ReactComponent as TrashIcon} from './trash-can-icon.svg'
import { ReactComponent as EditIcon} from './pencil-edit-icon.svg'

import React, { useEffect, useContext } from 'react'
import GameFinder from '../../api/GameFinder'
import { GamesContext } from '../../context/GamesContext'
import { useNavigate } from 'react-router-dom'

const GameFinderTable = (props) => {
  const {games, setGames} = useContext(GamesContext);
  let navigate = useNavigate();

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

  const handleUpdate = (id) => {
    navigate(`games/${id}/update`);
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
                <td className='td td-game-name'>{game.game_name}</td>
                <td>{game.rdate}</td>
                <td>{game.company}</td>
                <td className="icon pencil-edit-icon">
                  <button onClick={() => handleUpdate(game.id)} className="no-bg-button delete-button"><EditIcon/></button>
                </td>
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
