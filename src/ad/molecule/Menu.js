import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/battle">Battle</Link></li>
    <li><Link to="/player">Player</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
);

export default Menu;
