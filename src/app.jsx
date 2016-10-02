import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import TodoBox from './components/todo/todoBox.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.blueBg}>It Works!</h1>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        <TodoBox url='http://swapi.co/api/films/'/>
      </div>
    )
  }
}
