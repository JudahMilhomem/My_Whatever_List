// Style
import './NavigationBar.css';

// Imports
    // React
import React from 'react';
import { ReactComponent as ProfileIcon} from './circle-profile-icon.svg';
import { ReactComponent as BurgerMenu} from './burger-menu-icon.svg';

const NavigationBar = () => {
  return (
    <div className="flex-container navigation-bar">
        <div className="flex-container options-container">
            <a className="icon profile-icon" href="">
              <ProfileIcon/>
            </a>

            <a className="icon burger-menu-icon" href="">
              <BurgerMenu/>
            </a>
        </div>
    </div>
  )
}

export default NavigationBar;
