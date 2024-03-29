import React from 'react';
import Tilt from 'react-tilt';
import scitools from './SCI-Toolset-Icon.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img alt='scitools' src={scitools}/></div>
      </Tilt>
    </div>
  )
}

export default Logo;