import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-2">
      <nav>
        <ul>
        <li className="site-title"><strong>Creatorverse</strong></li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Creator</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;