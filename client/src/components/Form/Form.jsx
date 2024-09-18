// Generic form component (for games *)
// Style
import './reset.css';

// Imports
  // React
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
  // Components
import Input from './Input/Input';

import GameFinder from '../../api/GameFinder'; // API


const Form = ({className}) => {
  const { id } = useParams(); // **
  let navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => { // ** take note
    const fetchData = async () => {
      try {
        const response = await GameFinder.get(`/${id}`);
        const gameData = response.data.data[0];
        setName(gameData.game_name);
        setDate(gameData.rdate);
        setCompany(gameData.company);
      } catch(err){
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleNameChange = (e) => {setName(e.target.value)};
  const handleDateChange = (e) => {setDate(e.target.value)};
  const handleCompanyChange = (e) => {setCompany(e.target.value)};

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updateGame = await GameFinder.put(`/${id}`, {
        game_name: name,
        rdate: date,
        company
      });
      navigate('createlist');
      // +implement success message
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <section>
        <form className={`form ${className}`} action="">
            <Input
              label="Name"
              type="text"
              htmlFor="game-name"
              value={name}
              onChange={handleNameChange}
              onClick={handleUpdate}
              placeholder="Insert game name"
            />

            <Input
              label="Date"
              type="text"
              htmlFor="release-date"
              value={date}
              onChange={handleDateChange}
              onClick={handleUpdate}
              placeholder="Insert release date"
            />

            <Input
              label="Company"
              type="text"
              htmlFor="game-company"
              value={company}
              onChange={handleCompanyChange}
              onClick={handleUpdate}
              placeholder="Insert game's company"
            />

            <button type="button" onClick={handleUpdate} className="submit-button type-1-button">Update</button>
        </form>
      </section>
    </div>
  )
}

export default Form;
