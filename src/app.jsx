import styles from './index.scss';
import React from 'react';
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Stages from './components/stages/stages.jsx';
import TodoBox from './components/todo/todoBox.jsx';
import Menu from './components/menu/menu.jsx';

const container = {
  width: '100%'
};
class Main extends React.Component {
  render() {
    return (
      <div className="container" style={container}>
        <Menu/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main} path="app">
      <Route path="/" component={Home}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/todo" component={TodoBox}></Route>
      <Route path="/stages" component={Stages}></Route>
    </Route>
  </Router>
), document.getElementById('app'))
