import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount = () => { // .bind(this)
    this.setState({count: this.state.count + 1 });
  }
  render() {
    return(
      <div className="home">
        <h1 onClick={this.increaseCount}> HOME {this.state.count}</h1>
      </div>
    )
  }
}
