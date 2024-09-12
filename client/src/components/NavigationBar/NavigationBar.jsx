// Style
import './NavigationBar.css'

// Imports
    // React
import React from 'react';

const NavigationBar = () => {
  return (
    <div className="container flex-container navigation-bar">
        <div className="container flex-container options-container">
            <a href=""><h1 className="logo">*LOGO*</h1></a>

            <a href=""><h2 className="option your-profile">Your Profile</h2></a>
            <a href="http://localhost:3000/createlist"><h2 className="option create">Create</h2></a>
        </div>
    </div>
  )
}

export default NavigationBar;
