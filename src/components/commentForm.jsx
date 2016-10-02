import React from 'react';
export default class CommentForm extends React.Component {
  constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
 }
  handleClick() {
   console.log(this); // React Component instance
  }
  render() {
    return (
      <div className="commentForm" onClick={this.handleClick}>
        Hello, world! I am a CommentFormmmmmm.
      </div>
    )
  }
}
