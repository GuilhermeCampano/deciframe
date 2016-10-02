import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import CommentBox from './components/commentBox.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.blueBg}>It Works!</h1>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        <CommentBox url='http://swapi.co/api/films/'/>
      </div>
    )
  }
}
