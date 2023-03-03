import React from 'react';
import { NavLink } from 'react-router-dom';

// use Navlink instead of a, to replaces href
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="discover"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Discover
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="search"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Search
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
