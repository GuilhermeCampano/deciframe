import React from 'react';
import TodoBox from '../todo/todoBox.jsx';
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
      case 'todo':
        return <TodoBox/>
      default:
        return <Home/>;
    }
  }
  componentDidMount(){
    console.log('mount');
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  }
  render() {

    return (
      <div className = "page-container">
        <nav>
         <div className="nav-wrapper teal">
           <a className="brand-logo">Logo</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a onClick={() => this.changePage('todo')}> Todo </a></li>
             <li><a onClick={() => this.changePage('home')}> Home </a></li>
             <li><a onClick={() => this.changePage('about')}> Sobre </a></li>
             <li><a onClick={() => this.changePage('stages')}> Enigmas </a></li>
           </ul>
         </div>
       </nav>
        <div className = "main-container">{this.getPage()}</div>
      </div>
    )
  }
}
