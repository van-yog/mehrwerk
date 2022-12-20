import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <a href="/">Logo</a>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list_item">
            <NavLink to="/aufgabe-1">Aufgabe 1</NavLink>
          </li>
          <li className="header__list_item">
            <NavLink to="/aufgabe-2">Aufgabe 2</NavLink>
          </li>
          <li className="header__list_item">
            <NavLink to="/shops">Aufgabe 3 - Shop App</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
