import React from 'react';
import Home from '../home/home.jsx';
import About from '../about/about.jsx';
import Stages from '../stages/stages.jsx';

export default class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }
  changePage(pageAlias) {
    this.setState({currentPage: pageAlias});
  }
  getPage() {
    switch (this.state.currentPage) {
      case 'home':
        return <Home/>;
      case 'about':
        return <About/>
      case 'stages':
        return <Stages/>
      default:
        return <Home/>;
    }
  }
  render() {

    return (
      <div className = "page-container">
        <nav>
          <li onClick={() => this.changePage('home')}> Home</li>
          <li onClick={() => this.changePage('about')}> Sobre</li>
          <li onClick={() => this.changePage('stages')}> Enigmas</li>
        </nav>
        <div className = "main-container">{this.getPage()}</div>
      </div>
    )
  }
}
