import React from 'react';

export default class Todo extends React.Component {
  render() {
    return(
      <li>
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>{this.props.title}</div>
        <div className="collapsible-body"><p>{this.props.children} </p></div>
      </li>
    )
  }
}
