import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/aufgabe-1">
            Aufgabe 1
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/aufgabe-2">
            Aufgabe 2
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/shops">
            Aufgabe 3 - Shop App
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
