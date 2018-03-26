import React from 'react';
import { Link } from 'react-router-dom';


const BattleSubMenu = () => (
  <ul>
    <li><Link to="/battle/position">Rank</Link></li>
    <li><Link to="/battle/kills">Kills</Link></li>
    <li><Link to="/battle/resume">Resume</Link></li>
  </ul>
);

export default BattleSubMenu;
