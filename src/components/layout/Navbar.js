import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='red darken-2'>
      <div className='nav-wrapper'>
        <NavLink to='/' className='brand-logo'>
          <i className='material-icons'>games</i> Basketball Manager
        </NavLink>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/create-team'>Create Team</NavLink>
          </li>
          <li>
            <NavLink to='/first-quater'>First Quater</NavLink>
          </li>
          <li>
            <NavLink to='/team-created'>Selected Team</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
