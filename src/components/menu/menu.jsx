import React from 'react';
import {Link} from 'react-router';
export default class Menu extends React.Component {
  componentDidMount = () => {
    $(".button-collapse").sideNav();
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal">
          <a className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              <li><Link to="/stages">Stages</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              <li><Link to="/stages">Stages</Link></li>
            </ul>
        </div>
      </nav>
    )
  }
}
