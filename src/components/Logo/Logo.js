import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <NavLink className="logo__link" to="/">
        <img className="logo__img" src={imgLogo} alt="logo" />
        <span className="logo__text">Merhwerk</span>
      </NavLink>
    </div>
  );
};

export default Logo;
