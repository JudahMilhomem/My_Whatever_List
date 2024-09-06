import React from 'react'

const Input = (props) => {
  return (
    <div>
      <div className="flex-container input-field-box">
        <label htmlFor="game-name">Test <span>*</span></label>
        <input
            id="game-name"
            type="text"
            className="input-field name-input"
            placeholder="test"/>
            {/* required or not */}
      </div>
    </div>
  )
}

export default Input
