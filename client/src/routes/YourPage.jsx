// Style
import '../components/NavigationBar/NavigationBar.css';
import '../styles/YourPage.css';

// Imports
  // React
import React from 'react';
  // Components
import NavigationBar from '../components/NavigationBar/NavigationBar';

const YourPage = () => {
  return (
    <div className="flex-container page-content">
      <header className="flex-container top-navbar-container">
        <NavigationBar/>
      </header>

      <main className="flex-container main-content empty-list">
        <h1 className="title" id="no-lists">You don't have any Lists!</h1>
        <div className="flex-container text-box">
          <p className="text-d1">Hey there! Seems like you haven't created anything yet...</p>
          <p className="text-d1">Want to create your first list?!</p>
        </div>

        <button className="type-1-button create-list-button"><a href="http://localhost:3000/createlist">Create a List</a></button>
      </main>
    </div>
  )
}

export default YourPage;
