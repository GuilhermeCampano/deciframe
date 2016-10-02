import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Axios from 'axios';
import CommentForm from './commentForm';
import CommentList from './commentList';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  loadCommentsFromServer(){
    let self = this;
    Axios.get(this.props.url)
    .then(function (response) {
      self.setState({data:response.data.results});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleCommentSubmit(comment) {
    console.info('new comment', comment);
    let newData = this.state.data;
    newData.push({
      title:comment.title,
      producer:comment.producer,
      created:new Date()
    });
    this.setState({data:newData});
  }
  componentDidMount() {
    // this.loadCommentsFromServer();
  }
  render() {
    let commentList;
    if (this.state.data.length > 0) {
      commentList = <CommentList data={this.state.data}/>
    } else {
      commentList = <h2>Ops vazio</h2>;
    }
    return (
      <div className="commentBox">
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <hr/>
        {commentList}
      </div>
    )
  }
}

export default CommentBox;
