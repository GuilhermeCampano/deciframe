import React from 'react';
import {Link} from 'react-router';
export default class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <a className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/stages">Stages</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
