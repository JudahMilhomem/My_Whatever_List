// Style
import '../styles/Application.css';
import '../styles/Home.css'

// Imports
  // React
import React from 'react';
  // Components
import Input from '../components/Form/Input/Input';
// import NavigationBar from '../components/NavigationBar/NavigationBar';

const Home = () => {
  return (
    <div>
      <header>
        {/* <NavigationBar/> */}
      </header>
      
      <main className="flex-container main-content">
        <section className="flex-container form login-form">
          <h1 className="title h2-text" id="welcome-message">Welcome to My Whatever List!</h1>
          <p className="text p1-text" id="website-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta eum ut, ea dolor magni. <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, obcaecati.
          </p>

          <Input
            label="User"
            type="text"
            htmlFor="user"
            placeholder="example@gmail.com"
          />

          <Input
            label="Password"
            type="password"
            htmlFor="password"
            placeholder="Insert your password"
          />

          <button className="login-button type-1-button">Login</button>
          <a href="#" className="recover-login-info">Trouble logging in?</a>
        </section>
      </main>
    </div>
  )
}

export default Home;
