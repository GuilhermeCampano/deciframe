import React from 'react';
import Vivus from 'vivus';

const svgSalsicha  = require('../../assets/salsicha.svg');
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.vivusCallback = () => {
      console.log('this.vivusCallback');
    }
  }
  componentDidMount = () => {
    new Vivus('svg-file', {duration: 200, file:svgSalsicha});
    new Vivus('svg-test', {duration: 200}, this.vivusCallback);
  }
  render() {
    return (
      <div className="home">
        <h1>HOME</h1>
        <svg id="svg-test" width="100" height="100">
          <path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
        </svg>
        <div id="svg-file" height="200px"></div>
      </div>
    )
  }
}
