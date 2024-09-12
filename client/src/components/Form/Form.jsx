// Generic form component (for games *)
// Style
import './reset.css';

// Imports
  // React
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
  // Components
import Input from './Input/Input';

import GameFinder from '../../api/GameFinder'; // API


const Form = () => {
  const { id } = useParams(); // **

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

  return (
    <div>
      <section>
        <form action="">
            <Input
              label="Name"
              type="text"
              htmlFor="game-name"
              value={name}
              onChange={handleNameChange}
              placeholder="Insert game name"
            />

            <Input
              label="Date"
              type="text"
              htmlFor="release-date"
              value={date}
              onChange={handleDateChange}
              placeholder="Insert release date"
            />

            <Input
              label="Company"
              type="text"
              htmlFor="game-company"
              value={company}
              onChange={handleCompanyChange}
              placeholder="Insert game's company"
            />

            <button type="submit" className="submit-button type-1-button">Update</button>
        </form>
      </section>
    </div>
  )
}

export default Form;
