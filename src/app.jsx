import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import TodoBox from './components/todo/todoBox.jsx';
import Home from './components/page/home.jsx';
import About from './components/page/about.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }
  changePage = () => {
    if(this.state.currentPage == 'home'){
      this.setState({currentPage: 'about'});
    } else {
      this.setState({currentPage: 'home'});
    }
  }
  getPage() {
    return this.state.currentPage == 'home' ? <Home/> : <About/>;
  }
  render() {

    return (
      <div>
        <h1 className={styles.blueBg}>It Works!</h1>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
        <TodoBox url='http://swapi.co/api/films/'/>
        {this.getPage()}
        <button onClick= {this.changePage}> Mudar pagina</button>
      </div>
    )
  }
}
