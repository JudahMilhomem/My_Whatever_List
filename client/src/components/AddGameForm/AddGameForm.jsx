import React from 'react'
import './AddGameForm.css'

const AddGameForm = () => {
  return (
    <div className="flex-container form-section-box">
        <section className="form-section">
            <form action="" className="flex-container add-game-form">
                <h1 className="form-title">Add a game</h1>

                <div className="flex-container input-field-box">
                    <label htmlFor="game-name">Name <span>*</span></label>
                    <input type="text" className="input-field name-input" id="game-name" placeholder="Insert a name" required/>
                </div>

                <div className="flex-container input-field-box">
                    <label htmlFor="release-date">Release <span>*</span></label>
                    <input type="text" className="input-field release-input" id="release-date" placeholder="Insert the release date" required/>
                </div>

                <div className="flex-container input-field-box">
                    <label htmlFor="company-name">Company <span>*</span></label>
                    <input type="text" className="input-field company-input" id="company-name" placeholder="Insert the game's Company" required/>
                </div>

                <div className="flex-container textarea-field-box">
                    <label htmlFor="game-description">Description</label>
                    <textarea className="textarea description" id="game-description" placeholder="Add a description (optional)"></textarea>
                </div>

                <button className="submit-button type-1-button">Add new game</button>
            </form>
        </section>
    </div>
  )
}

export default AddGameForm
