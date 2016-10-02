import React from 'react';
import Comment from './comment';

export default class CommentList extends React.Component {
  render() {
    let data = this.props.data;
    let commentNodes = data.map(function(comment) {
      return (
        <Comment title={comment.title}>
          {comment.producer}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}
