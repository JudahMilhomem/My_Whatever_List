// Style
import './NavigationBar.css'

// Imports
    // React
import React from 'react';
import { ReactComponent as ProfileIcon} from './circle-profile-icon.svg';

const NavigationBar = () => {
  return (
    <div className="flex-container navigation-bar">
        <div className="flex-container options-container">
            <a className="icon profile-icon" href="">
              {/* <ProfileIcon/> */}
              <p>*PROFILE PICTURE*</p>
            </a>

            {/* +implement Burger Menu */}
        </div>
    </div>
  )
}

export default NavigationBar;
