import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Axios from 'axios';
import CommentForm from './commentForm';
import CommentList from './commentList';


class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    let self = this;
    this.state = {
      data: []
    };
    Axios.get(props.url)
    .then(function (response) {
      console.log(response.data.results);
      self.state.data = response.data.results;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="commentBox">
        <CommentForm/>
        <hr/>
        <CommentList data={this.state.data}/>
      </div>
    )
  }
}

export default CommentBox;
