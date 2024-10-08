import React, { useState, useContext} from 'react'
import './AddGameForm.css'
import GameFinder from '../../api/GameFinder'
import {GamesContext} from '../../context/GamesContext'

const AddGameForm = () => {
  const {games, setGames} = useContext(GamesContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await GameFinder.post("/", {
            game_name: name,
            rdate: date,
            company: company
        });
        setGames([...games, response.data.data[0]]);
    } catch(err){
        console.log(err);
    }
  }

  return (
    <div className="flex-container form-section-box">
        <section className="form-section">
            <form action="" className="flex-container add-game-form">
                <h1 className="form-title">Add a game</h1>

                <div className="flex-container input-field-box">
                    <label htmlFor="game-name">Name <span>*</span></label>
                    <input
                        type="text"
                        className="input-field name-input"
                        id="game-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // ??
                        placeholder="Insert a name"
                        required
                    />
                </div>

                <div className="flex-container input-field-box">
                    <label htmlFor="release-date">Release <span>*</span></label>
                    <input
                        type="text"
                        className="input-field release-input"
                        id="release-date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Insert the release date"
                        required
                    />
                </div>

                <div className="flex-container input-field-box">
                    <label htmlFor="company-name">Company <span>*</span></label>
                    <input
                        type="text"
                        className="input-field company-input"
                        id="company-name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Insert the game's company"
                        required
                    />
                </div>
                {/* +implement description */}

                <button type="submit" onClick={handleSubmit} className="submit-button type-1-button">Add new game</button>
            </form>
        </section>
    </div>
  )
}

export default AddGameForm
