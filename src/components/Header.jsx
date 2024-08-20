import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Creator</Link>
          </li>
        </ul>
      </nav>
      <h1>Creatorverse</h1>
    </header>
  );
};

export default Header;