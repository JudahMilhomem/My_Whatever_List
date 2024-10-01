// Style
import '../styles/Application.css';
import '../styles/Home.css'

// Imports
  // React
import React from 'react';
import { useNavigate } from 'react-router-dom';
  // Components
import Input from '../components/Form/Input/Input';

const Home = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    // +

    navigate('your-page');
  }

  return (
      <main className="flex-container home-main-content-box">
        <section className="grid-container home-section-content-box">
          <h1 className="title t1-font-size" id="welcome-message">Welcome to My Whatever List!</h1>
          <div className="flex-container" id="website-description-content-box">
            <p className="text t2-font-size" id="website-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nihil ut, voluptatem fugit dolor eaque qui totam officia voluptates numquam.</p>
          </div>
          {/* ! */}

          <form action="">
            <Input
              containerClassName="flex-container home-login-input-container user"
              labelClassName="home-login-label user"
              inputClassName="home-login-input user"

              label="User"
              type="text"
              htmlFor="user"
              placeholder="example@gmail.com"
            />

            <Input
              containerClassName="flex-container home-login-input-container password"
              labelClassName="home-login-label password"
              inputClassName="home-login-input password"

              label="Password"
              type="password"
              htmlFor="password"
              placeholder="Insert your password"
            />
          </form>

          <div className="flex-container row-4">
            {/* ! */}
            <button onClick={handleLogin} className="login-button type-1-button">Login</button>
            <a href="#" className="recover-login-info">Trouble logging in?</a>
          </div>
        </section>
      </main>
  )
}

export default Home;
