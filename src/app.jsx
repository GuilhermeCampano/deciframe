import styles from './index.scss';
import React from 'react';
import Pages from './components/pages/pages.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Pages/>
      </div>
    )
  }
}
