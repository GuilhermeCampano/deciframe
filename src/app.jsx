import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
// import TodoBox from './components/todo/todoBox.jsx';
import Pages from './components/pages/pages.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Pages/>
    )
  }
}
