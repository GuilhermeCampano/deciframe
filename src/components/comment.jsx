import React from 'react';

export default class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    )
  }
}
